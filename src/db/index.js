import mongoose from 'mongoose';
import { DB_Name } from '../constant.js';

export const connectDB = async () =>{
    try{
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(` MongoDB connected !! DB HOST: ${connectInstance.connection.host}`)
    }
    catch(error){
        console.log("Error: ",error)
        process.exit(1) // This is a internal node method to exit
        // throw error;  // You can use this to throw and error too
    }
}

