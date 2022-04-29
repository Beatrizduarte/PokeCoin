import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

import { ITransaction } from "../interfaces"; 

const TransactionSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    types: { type: String, required: true },
    name: { type: String, required: true },
    pokemonID: { type: Number, required: true },
    BTCDay: { type: String, required: true },
    quotas: { type: Number, required: true },
    value: { type: String, required: true },
}, { timestamps: true})

export default model<ITransaction>('Transaction', TransactionSchema)