
const { body, validationResult } = require('express-validator');
const express = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_SECRET_KEY = "!qwerty95POTY*02Pq#Ow*38";

router.post('/createUser', [
    body('email', 'Incorrect email format').isEmail(),
    body('password', 'Password must be atleast 8 characters long').isLength({ min: 8 })],
    async (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        try {
            await User.create({
                name: req.body.name,
                password: hashPassword,
                email: req.body.email,
                location: req.body.location
            }).then(res.json({ success: true }))

        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post('/loginUser', [
    body('email', 'Incorrect email format').isEmail(),
    body('password', 'Password must be atleast 8 characters long').isLength({ min: 8 })],
    async (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ error: "Invalid email or password" })
            }

            const comparePass = await bcrypt.compare(password, user.password);

            if (!comparePass) {
                return res.status(400).json({ error: "Invalid credentials" })
            }

            const data = {
                user: {
                    id: user.id
                }
            }

            const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: '3d' });

            return res.status(200).json({ success: true, token: token });

        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

module.exports = router;