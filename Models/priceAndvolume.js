import mongoose from "mongoose";

const { Schema } = mongoose;

const priceAndvolumeSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const PriceAndvolume = mongoose.model("PriceAndvolume", priceAndvolumeSchema);
