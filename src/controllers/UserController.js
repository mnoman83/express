import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default {
    async login(req, res) {
        try {
            console.log("req.body: ", req.body);
            const { username, password } = req.body;
            const foundUser = await User.findOne({ where: { username: username } });
            console.log("foundUser: ", foundUser);
            if (foundUser) {
                const isPasswordValid = await bcrypt.compare(password, foundUser.password);
                if (isPasswordValid) {
                    const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN,
                    });
                    res.header('Authorization', `Bearer ${token}`);
                    res.json({ status: 'success', message: "Login successful", token: token});
                } else {
                    res.status(401).json({ error: 'Invalid credentials', message: "Invalid username or password" });
                }
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to process login', message: err.message });
        }
    }
}