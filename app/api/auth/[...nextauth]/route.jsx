import NextAuth from 'next-auth'
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import GithubProvider from 'next-auth/providers/github' 
const authOptions = {
  providers: [
    
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET

    }),
    
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
     if(account.provider == "github"){
      // connect to database 
      const client=await mongoose.connect()      
      const currentuser=await User.findOne({email: user.email})
      if(!currentuser){
        const newuser=new User({
          email:email,
          name:profile.name,
          username:email.split("@")[0],
        })
        await newuser.save()
        
      }else{
        user.name=newuser.username
      }
    }
    return true;
  }
}
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
