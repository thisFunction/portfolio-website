const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const User = require('../../models/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//@route    get api/users/test
//@desc     Tests users route
//@access   Public
router.get('/test', (req, res) => res.json({msg: "yo"}))

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).json({email: "Email already exists"})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });


            }
        })
});

module.exports = router;