const express = require('express');
const router = express.Router();

//Dojo Model
const Dojo = require('../../models/dojo');

// @route       GET api/dojo
// @description GET Dojo Items
// @access      Public
router.get('/', (req, res) => {
    Dojo.find()
        .then(dojo => res.json(dojo))
})

// @route       POST api/dojo
// @description Create Dojo Item
// @access      Public
router.post('/', (req, res) => {
    const newDojo = new Dojo({
        name: req.body.name,
        age: req.body.age,
        dob: req.body.dob
    });
    newDojo.save().then(item => res.json(item))
});

// @route       DELETE api/dojo/:id
// @description Delete Dojo Item
// @access      Public
router.delete('/:id', (req, res) => {
    Dojo.findById(req.params.id)
        .then(item => item.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;