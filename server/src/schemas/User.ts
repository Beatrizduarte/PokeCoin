import mongoose from 'mongoose';
import { Schema, model, } from 'mongoose';
import { IUser } from '../interfaces';

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true},
    name: { 
        first: { type: String, required: true},
        last: { type: String, required: true},
        social: { type: String, required: false}
    },
    wallet: {
        type: [
            {
                pokemonID: {type: Number, require: true },
                quotas: { type: Number, require: true},
                value: { type: String, required: true },
                baseXP: { type: Number, required: true },
                name: { type: String, required: true},
                image: { type: String, required: true},
                types: { type: String, required: true},
            },
        ], 
        default: null,
    },
}, { timestamps: true })


export default model<IUser>('User', UserSchema);