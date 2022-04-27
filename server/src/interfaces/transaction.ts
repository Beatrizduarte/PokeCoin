import { Document } from 'mongoose'

export interface ITransaction extends Document{
    user: string,
    types: string
    name: string,
    pokemonId: number,
    BTCDay: string,
    quotas: number,
    value: string,
}