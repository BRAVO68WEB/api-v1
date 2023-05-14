import mongoose, { Schema } from 'mongoose'

const urlMinifySchema = new Schema(
    {
        originalURL: {
            type: String,
        },
        minifiedURL: {
            type: String,
        },
        minifiedBy: {
            type: String,
        },
        minifiedKey: {
            type: String,
        },
        shortURL: {
            type: String,
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

urlMinifySchema.methods = {
    view(full) {
        const view = {
            // simple view
            id: this.id,
            originalURL: this.originalURL,
            minifiedURL: this.minifiedURL,
            minifiedBy: this.minifiedBy,
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

const model = mongoose.model('UrlMinify', urlMinifySchema)

export const schema = model.schema
export default model
