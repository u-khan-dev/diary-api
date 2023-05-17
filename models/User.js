import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'users',
    timestamps: true
});

export default model('User', UserSchema);