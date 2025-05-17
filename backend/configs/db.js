import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected',()=> console.log("Kết nối rồi hẹ hẹ hẹ"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
    } catch (error) {
        console.log(error.massage);
        
    }
}
export default connectDB;