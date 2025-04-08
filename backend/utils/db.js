import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        await mongoose.connect("mongodb+srv://sufyanadnan125:zfaCud1EghUeLlny@cluster0.o19mv.mongodb.net/");
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log("error");
    }
}
export default connectDB;