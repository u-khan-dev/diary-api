import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    title: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    }
}, {
    collection: 'posts',
    timestamps: true
});

export default model('Post', PostSchema);