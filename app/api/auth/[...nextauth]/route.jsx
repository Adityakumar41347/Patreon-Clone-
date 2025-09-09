import NextAuth from 'next-auth'
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import GithubProvider from 'next-auth/providers/github';
import connectDB from '@/db/connectDB';
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
      await connectDB()
      const currentuser=await User.findOne({email: user.email})
      if(!currentuser){
        const newuser=new User({
          email:user.email,
          name:user.name,
          username:user.email.split("@")[0],
        })
        await newuser.save()
        
      }
    }
    return true;
  },
  async session({ session, user, token }) {
    const dbUser = await User.findOne({email: session.user.email})
    session.user.name = dbUser.username
    return session;
  }
}
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
