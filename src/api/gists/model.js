import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema(
    {
        title: {
            type: String,
        },
        short: {
            type: String,
        },
        message: {
            type: String,
        },
        tags: {
            type: Array,
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

// todoSchema.methods = {
//   view(full) {
//     const view = {
//       // simple view
//       id: this.id,
//       title: this.title,
//       short: this.short,
//       message: this.message,
//       tags: this.tags,
//       createdAt: this.createdAt,
//       updatedAt: this.updatedAt,
//     };

//     return full
//       ? {
//           ...view,
//           // add properties for a full view
//         }
//       : view;
//   },
// };

const model = mongoose.model('Todo', todoSchema)

export const schema = model.schema
export default model
