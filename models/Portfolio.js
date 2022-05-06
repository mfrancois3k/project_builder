import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true,
    },
    config: {
        type: String,
        required: false,
    },
    urlIdentifier: {
        type: String,
        required: false,
    }
})

export const PortfolioModel = mongoose.model('User', PortfolioSchema);


