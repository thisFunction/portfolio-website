const express = require('express');
const router = express.Router()

//Dojo Model

const Dojo = require('../../models/dojo');

// @route       GET api/dojo
// @description GET All Dojo Items
// @access      Public
router.get('/', (req, res) => {
    Dojo.find()
        .then(dojo => res.json(dojo))
})

// @route       GET api/dojo
// @description GET All Dojo Items
// @access      Public
router.post('/', (req, res) => {
    const newDojo = new Dojo({
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob
    });

    newDojo.save().then(item => res.json(item))
})





module.exports = router;