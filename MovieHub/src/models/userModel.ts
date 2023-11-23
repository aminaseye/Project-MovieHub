import  mongoose, { Schema, InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email :{
        type : String,
        unique: true,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    movies : [{type: String}]
})

type User = InferSchemaType<typeof userSchema>;

export const UserModel = mongoose.model('User', userSchema);