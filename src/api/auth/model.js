import mongoose, { Schema } from 'mongoose'
import crypto from 'crypto'

const authSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
        },
        apiKey: {
            type: String,
        },
        accessType: {
            type: String,
            default: 'entry',
        },
        role: {
            type: String,
            default: 'user',
        },
        active: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        emailToken: {
            type: String,
        },
        loginOtp: {
            type: String,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (obj, ret) => {
                delete ret._id
            },
        },
    }
)

authSchema.methods = {
    view(full) {
        const view = {
            // simple view
            id: this.id,
            email: this.email,
            apiKey: this.apiKey,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }

        return full
            ? {
                  ...view,
              }
            : view
    },
}

authSchema.statics.genConfToken = function () {
    return crypto.randomBytes(16).toString('hex')
}

const model = mongoose.model('authTokens', authSchema)

export const schema = model.schema
export default model
