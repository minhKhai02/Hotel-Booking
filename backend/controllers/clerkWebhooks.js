import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req,res)=>{
    try {
        const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET)
        const headers = {
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        };
        await whook.verify(JSON.stringify(req.body),headers)
        const {data,type} = req.body
        const userData ={
            _id: data.id,
            email:data.email_address[0].email_address,
            username: data.first_name+""+data.last_name,
            image:data.image_url,
        }
        switch (key) {
            case "User.created":
               {
                await User.create(userData)    
                break;
            }
            case "User.updated":
               {
                await User.findbyIdAndUpdate(data.id,userData)    
                break;
            }
             case "User.deleted":
               {
                await User.findbyIdAndDelete(data.id)    
                break;
            }
            default:
                break;
        }
        res.json({success:true,message:"Đã nhận được Web Hook"})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}
export default clerkWebhooks;
