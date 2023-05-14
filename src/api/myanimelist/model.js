import mongoose, { Schema } from 'mongoose'

const myanimelistSchema = new Schema(
    {
        token: {
            type: String,
            unique: true,
        },
        lastUpdate: {
            type: String,
        },
        refreshToken: {
            type: String,
            unique: true,
        },
        tokenIdentifier: {
            type: String,
            unique: true,
        },
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

myanimelistSchema.methods = {
    view(full) {
        const view = {
            // simple view
            id: this.id,
            token: this.token,
            refreshToken: this.refreshToken,
            lastUpdate: this.lastUpdate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }

        return full
            ? {
                  ...view,
                  // add properties for a full view
              }
            : view
    },
}

const model = mongoose.model('Myanimelist', myanimelistSchema)

export const schema = model.schema
export default model
