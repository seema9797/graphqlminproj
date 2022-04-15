import {ApolloServer,gql} from 'apollo-server'
import typeDefs from './schemaGql.js'

import {ApolloServerPluginLandingPageGraphQLPlayground } from  'apollo-server-core'
import {quotes,users} from './fakedb.js'
import mongoose from 'mongoose'
import {MONGO_URI} from './config.js'


mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on("error",(err)=>{
    console.log("Error connection",err)
})


//import models here
import './models/Quotes.js'
import './models/User.js'
import resolvers from './resolvers.js'



  const server=new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
      ]
  })

  server.listen().then(({url})=>{
      console.log(` Server ready at ${url}`);
  })