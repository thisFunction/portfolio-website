const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

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
		.then(profile => {
			if (!profile) {
				errors.noProfile = "There is no profile for this user";
				return res.status(404).json(errors);
			}
		})
		.catch(err => res.status(404).json(err));
});

//@route    POST api/profile/
//@desc     Create user profile
//@access   Private
router.post("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    const newProfileFields = {
        handle: req.body.handle,
        website: req.body.website,
        company: req.body.company,
        location: req.body.location,
        bio: req.body.bio,
        status: req.body.status,
        githubusername: req.body.githubusername,
        skills() {
            if (typeof req.body.skills !== undefined) {
                return req.body.skills.split(',')
            }
        },
        

    }
    newProfileFields.user = req.user
});


module.exports = router;
