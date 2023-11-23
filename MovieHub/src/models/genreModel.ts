import  mongoose, { Schema, InferSchemaType } from "mongoose";

const  genreSchema = new Schema ({
    name: {
        type: String,
        required : true
    }
})

type Genre = InferSchemaType<typeof genreSchema>;

export const GenreModel = mongoose.model('Genre', genreSchema);