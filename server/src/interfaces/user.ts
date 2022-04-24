import { Document } from 'mongoose'

export interface IUser extends Document{
    email: string,
    password: string,
    name : {
        first: string,
        last: string,
        social: string,
    },
}