import mongoose from "mongoose";

export const ConnetDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGODB_LOCAL);
        console.log(`bhai chal gia he: ${db.connection}`)
    } catch (error) {
        console.log("bhai masla kr gia he: " , error)
    }
}