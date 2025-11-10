const Model = require('../../src/models');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
    try {
        const data = req.body;

        // 🟠 Validate required fields
        if (!data.email || !data.phone || !data.password) {
            return res.status(400).json({
                success: false,
                message: 'Email, phone number, and password are required.'
            });
        }

        // 🟠 Check if user with this email already exists
        const existsEmail = await Model.User.findOne({ email: data.email });
        if (existsEmail) {
            return res.status(400).json({
                success: false,
                message: 'This email is already registered.'
            });
        }

        // 🟠 Check if user with this phone already exists
        const existsPhone = await Model.User.findOne({ phone: data.phone }); // ✅ fixed key: was "email"
        if (existsPhone) {
            return res.status(400).json({
                success: false,
                message: 'This phone number is already registered.'
            });
        }

        // 🟠 Hash the password securely
        const hashPassword = await bcrypt.hash(data.password, 10);

        // 🟠 Create new user
        const newUser = await Model.User.create({
            ...data,
            password: hashPassword
        });

        // 🟢 Respond with success
        return res.status(200).json({
            success: true,
            message: 'User created successfully.',
            result: newUser
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

module.exports = { create };
