const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false
    },
    enabled: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Phone number is required']
    },
    // System-related
    role: {
        type: String,
        enum: ['user', 'admin', 'owner'], // owner = bike provider
        default: 'user'
    },
    // Authentication
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
        select: false
    },
    details: {
        profileImage: {
            type: String,
            trim: true
        }, // profile photo URL
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other']
        },
        dateOfBirth: {
            type: Date
        },
        // Government ID for verification (KYC)
        kyc: {
            aadhaarNumber: {
                type: String,
                trim: true
            },
            drivingLicenseNumber: {
                type: String,
                trim: true
            },
            licenseExpiry: {
                type: Date
            },
            idProofImage: {
                type: String,
                trim: true
            },
            licenseImage: {
                type: String,
                trim: true
            },
            verified: {
                type: Boolean,
                default: false
            }
        },
        // Emergency contact
        emergencyContact: {
            name: {
                type: String,
                trim: true
            },
            relation: {
                type: String,
                trim: true
            },
            phone: {
                type: String,
                trim: true
            }
        },
        addresses:
        {
            type: {
                type: String,
                enum: ['Home', 'Work', 'Other'],
                default: 'Home'
            },
            houseNumber: {
                type: String,
                trim: true
            },
            landmark: {
                type: String,
                trim: true
            },
            city: {
                type: String,
                trim: true
            },
            state: {
                type: String,
                trim: true
            },
            pincode: {
                type: String,
                trim: true
            },
            country: {
                type: String,
                trim: true,
                default: 'India'
            },
            isDefault: {
                type: Boolean,
                default: false
            }
        },
        socialLinks: {
            facebook: {
                type: String,
                trim: true
            },
            instagram: {
                type: String,
                trim: true
            },
            linkedin: {
                type: String,
                trim: true
            }
        },
        bio: {
            type: String,
            trim: true
        },
        preferences: {
            language: {
                type: String,
                default: 'English'
            },
            notifications: {
                type: Boolean,
                default: true
            },
            theme: {
                type: String,
                enum: ['light', 'dark'],
                default: 'light'
            }
        }
    }

},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = { User }