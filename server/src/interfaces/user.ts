import { Document } from 'mongoose'

export interface IUser extends Document{
    'email': String,
    'info': {
        'createAt': string,
        'lastAccessAt': string,
    }
    'name' : {
        'full': string,
        'social': string,
    },
    'password': string
}