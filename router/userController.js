const express = require('express');
const router = express.Router();
const User = require('../modal/user');
const config = require('../config/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../config/passport')(passport);


// Register
router.post('/register', (req, res, next) => {
    let newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.status(401).json({success: false, msg: 'Failed to register user'});
        } else {
            res.status(200).json({success: true, msg: 'User registered'});
        }
    });
});

/* router.get('/profile', (req, res, next) => {
    User.find( (err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            return res.status(404).json({ message: 'file not found' });
        }
    });
}) */

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.status(404).json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                console.log('tokenKey',config.secret);
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.status(200).json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
