const express = require('express');
const router = express.Router();

//@route    get api/profile/test
//@desc     Tests profile route
//@access   Public
router.get('/test', (req, res) => res.json({msg: "yo"}))

module.exports = router;