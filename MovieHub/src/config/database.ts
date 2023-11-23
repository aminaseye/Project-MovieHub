import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect('mongodb+srv://aminaseye2:Colacao1@cluster0.2oxdkz7.mongodb.net/movies?retryWrites=true&w=majority')
    .then(() => {
        console.log('[+] Database is connected')
    })
    .catch((err) => {
        console.log(`[!] Error connected Database: ${err}`)
    })
}

export { connectDB }

