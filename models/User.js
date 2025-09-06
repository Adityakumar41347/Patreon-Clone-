import mongoose from "mongoose";
const { Schema, models } = mongoose;
const UserSchema=new Schema({
      name:{type:String},
      email:{type:String,required:true},
      created_at:{type:Date,defult:Date.now},
      profile_image:{type:String},
      cover_image:{type:String},
      updated_at:{type:Date,defult:Date.now},
      done:{type:Boolean,defult:false}
      
})
const User =models.User || mongoose.model("User",UserSchema)
export default User