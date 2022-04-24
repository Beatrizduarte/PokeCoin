import { Schema, model } from 'mongoose';

import { IUser } from '../interfaces';

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true},
    name: { 
        first: { type: String, required: true},
        last: { type: String, required: true},
        social: { type: String, required: false}
    }
}, { timestamps: true })

export default model<IUser>('User', UserSchema);