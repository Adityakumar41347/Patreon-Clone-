import mongoose from "mongoose";
const { Schema, models } = mongoose;
const UserSchema=new Schema({
      username:{type:String},
      name:{type:String},
      email:{type:String,required:true},
      
      profile_image:{type:String},
      cover_image:{type:String},
      
      done:{type:Boolean,defult:false}
      
})
const User =models.User || mongoose.model("User",UserSchema)
export default User