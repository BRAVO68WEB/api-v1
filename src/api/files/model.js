import mongoose, { Schema } from 'mongoose'

const filesSchema = new Schema(
    {
        uploader: {
            type: String,
        },
        // oneTime: {
        //   type: Boolean,
        //   default: false,
        // },
        // password: {
        //   type: String,
        //   default: null,
        // },
        about: {
            type: String,
            default: null,
        },
        fileURL: {
            type: String,
        },
        minifiedURL: {
            type: String,
        },
        private: {
            type: Boolean,
            default: false,
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

filesSchema.methods = {
    view(full) {
        const view = {
            // simple view
            id: this.id,
            uploader: this.uploader,
            oneTime: this.oneTime,
            password: this.password,
            fileURL: this.fileURL,
            minifiedURL: this.minifiedURL,
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

const model = mongoose.model('Files', filesSchema)

export const schema = model.schema
export default model
