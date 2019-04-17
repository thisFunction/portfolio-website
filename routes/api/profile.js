const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateEducationInput = require("../../validation/education");

//Load models
const Profile = require("../../models/profile");
const User = require("../../models/user");

//@route    GET api/profile/test
//@desc     Tests profile route
//@access   Public
router.get("/test", (req, res) => res.json({msg: "yo"}));

//@route    GET api/profile/
//@desc     Get current user's profile
//@access   Private
router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
	const errors = {};
	Profile.findOne({user: req.user.id})
		.populate("user", "name")
		.then(profile => {
			if (!profile) {
				errors.noProfile = "There is no profile for this user";
				return res.status(404).json(errors);
			}
		})
		.catch(err => res.status(404).json(err));
});

//@route    GET api/profile/all
//@desc     Get all profiles
//@access   Public
router.get("/all", (req, res) => {
	const errors = {};

	Profile.find()
		.populate("user", ["name"])
		.then(profiles => {
			if (!profiles) {
				errors.noprofile = "There are no profiles";
				return res.status(404).json(errors);
			}
			return res.json(profiles);
		})
		.catch(err => {
			errors.noprofile = "There are no profiles";
			return res.status(404).json(errors);
		});
});

//@route    GET api/profile/handle/:handle
//@desc     Get profile by handle
//@access   Public
router.get("/handle/:handle", (req, res) => {
	const errors = {};

	Profile.findOne({handle: req.params.handle})
		.populate("user", ["name"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				return res.status(404).json(errors);
			}
			return res.json(profile);
		})
		.catch(err => res.status(404).json(err));
});

//@route    GET api/profile/user/:user_id
//@desc     Get profile by user ID
//@access   Public
router.get("/user/:user_id", (req, res) => {
	const errors = {};

	Profile.findOne({user: req.params.user_id})
		.populate("user", ["name"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				return res.status(404).json(errors);
			}
			return res.json(profile);
		})
		.catch(err => {
			errors.noprofile = "There is no profile for this user";
			res.status(404).json(errors);
		});
});

//@route    POST api/profile/
//@desc     Create or edit user profile
//@access   Private
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
	const {errors, isValid} = validateProfileInput(req.body);

	if (!isValid) {
		//return any errors with 400 status
		return res.status(400).json(errors);
	}

	const newProfileFields = {
		handle: req.body.handle,
		website: req.body.website,
		company: req.body.company,
		location: req.body.location,
		bio: req.body.bio,
		status: req.body.status,
		githubusername: req.body.githubusername
	};
	if (typeof req.body.skills !== "undefined") {
		newProfileFields.skills = req.body.skills.split(",");
	}
	newProfileFields.social = {};
	if (typeof req.body.linkedin) newProfileFields.social.linkedin = req.body.linkedin;
	if (typeof req.body.youtube) newProfileFields.social.youtube = req.body.youtube;
	if (typeof req.body.twitter) newProfileFields.social.twitter = req.body.twitter;
	if (typeof req.body.facebook) newProfileFields.social.facebook = req.body.facebook;
	if (typeof req.body.instagram) newProfileFields.social.instagram = req.body.instagram;

	Profile.findOne({user: req.user.id}).then(profile => {
		if (profile) {
			//update
			Profile.findOneAndUpdate(
				{user: req.user.id},
				{$set: newProfileFields},
				{new: true}
			).then(profile => res.json(profile));
		} else {
			//check if handle exists
			Profile.findOne({handle: newProfileFields.handle}).then(profile => {
				if (profile) {
					errors.handle = "Handle already exists";
					res.status(400).json(errors);
				} else {
					//save profile
					new Profile(newProfileFields)
						.save()
						.then(profile => res.json(profile));
				}
			});
		}
	});
	newProfileFields.user = req.user;
});

//@route    POST api/profile/experience
//@desc     Add experience to profile
//@access   Private
router.post(
	"/experience",
	passport.authenticate("jwt", {session: false}),
	(req, res) => {
		const {errors, isValid} = validateExperienceInput(req.body);

		if (!isValid) {
			//return any errors with 400 status
			return res.status(400).json(errors);
		}
		Profile.findOne({user: req.user.id}).then(profile => {
			const newExperience = {
				title: req.body.title,
				company: req.body.company,
				location: req.body.location,
				from: req.body.from,
				to: req.body.to,
				current: req.body.current,
				description: req.body.description
			};

			console.log(profile);
			//Add to exp array
			profile.experience.unshift(newExperience);
			profile.save().then(profile => res.json(profile));
		});
	}
);

//@route    POST api/profile/education
//@desc     Add education to profile
//@access   Private
router.post(
	"/education",
	passport.authenticate("jwt", {session: false}),
	(req, res) => {
		const {errors, isValid} = validateEducationInput(req.body);

		if (!isValid) {
			//return any errors with 400 status
			return res.status(400).json(errors);
		}
		Profile.findOne({user: req.user.id}).then(profile => {
			const newEducation = {
				school: req.body.school,
				degree: req.body.degree,
				current: req.body.current,
				from: req.body.from,
				to: req.body.to,
				fieldOfStudy: req.body.fieldOfStudy
			};

			console.log(profile);
			//Add to exp array
			profile.education.unshift(newEducation);
			profile.save().then(profile => res.json(profile));
		});
	}
);

//@route    DELETE api/profile/experience/:experience_id
//@desc     Delete experience from profile
//@access   Private
router.delete(
	"/experience/:experience_id",
	passport.authenticate("jwt", {session: false}),
	(req, res) => {
		Profile.findOne({user: req.user.id})
			.then(profile => {
				const removeIndex = profile.experience
					.map(item => item.id)
					.indexOf(req.params.experience_id);
				profile.experience.splice(removeIndex, 1);

				profile.save().then(profile => res.json(profile));
			})
			.catch(err => res.status(404).json(profile));
	}
);

//@route    DELETE api/profile/education/:education_id
//@desc     Delete education from profile
//@access   Private
router.delete(
	"/education/:education_id",
	passport.authenticate("jwt", {session: false}),
	(req, res) => {
		Profile.findOne({user: req.user.id})
			.then(profile => {
				const removeIndex = profile.education
					.map(item => item.id)
					.indexOf(req.params.education_id);
				profile.education.splice(removeIndex, 1);
				profile.save().then(profile => res.json(profile));
			})
			.catch(err => res.status(404).json(profile));
	}
);

//@route    DELETE api/profile
//@desc     Delete user and profile
//@access   Private
router.delete(
	"/",
	passport.authenticate("jwt", {session: false}),
	(req, res) => {
		Profile.findOneAndRemove({user: req.user.id})
			.then(() => {
                User.findOneAndRemove({_id: req.user.id})
                    .then(()=> res.json({success: true}))
			})
			.catch(err => res.status(404).json(profile));
	}
);
module.exports = router;
