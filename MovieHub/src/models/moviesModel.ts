import  mongoose, { Schema, InferSchemaType } from "mongoose";

const movieSchema = new Schema ({
    name: {
        type: String,
        required : true
    },
    poster_image : {
        type: String,
        unique: true,
    },
    score : {
        type : Number,
        unique: true,
        required: true
    },
    genre : {
        type : String,
        required: true
    }
})

type Movie = InferSchemaType<typeof movieSchema>;

export const MovieMoodel = mongoose.model('Movie',  movieSchema);