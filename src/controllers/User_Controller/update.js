const Model = require('../../src/models');

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Check if user exists
        const user = await Model.User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        // Check if email already exists for another user
        if (data.email) {
            const existsEmail = await Model.User.findOne({
                email: data.email,
                _id: { $ne: id },
            });
            if (existsEmail) {
                return res.status(400).json({
                    success: false,
                    message: 'This email is already registered',
                });
            }
        }

        // Check if phone already exists for another user
        if (data.phone) {
            const existsPhone = await Model.User.findOne({
                phone: data.phone,
                _id: { $ne: id },
            });
            if (existsPhone) {
                return res.status(400).json({
                    success: false,
                    message: 'This phone number is already registered',
                });
            }
        }

        // Update user data
        const updatedUser = await Model.User.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            success: true,
            message: 'User updated successfully',
            result: updatedUser,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

module.exports = { update };
