
import {quotes,users} from './fakedb.js'
import {randomBytes} from 'crypto';
import mongoose from 'mongoose'

const User=mongoose.model("User")
import bcrypt from 'bcryptjs';


//RESOLVERS
  const resolvers={
    Query:{
        users:()=>users,
        //  user:(_,arg)=>users.find(user=>user._id == arg._id),
        user:(_,{_id})=>users.find(user=>user._id == _id),
        
        quotes:()=>quotes,
        findidquote:(_,{by})=>quotes.filter(quote=>quote.by == _id),
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by ==ur._id)
    },

    
    Mutation:{

        crateLead:async (_,{newLead})=>{
          const user=await Lead.findOne
        },
        createUserDummy:async(_,{userNew})=>{
        const user=await User.findOne({email:userNew.email})
        if(user){
            throw new Error("User already exist with the email")
        }
       const hasedPassword= await bcrypt.hash(userNew.password,12)
       
      const newUser= new User({
           ...userNew,
           password:hasedPassword
       })
      return await newUser.save()
        }
    }
}

export default resolvers