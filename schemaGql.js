
import {gql} from 'apollo-server'

const typeDefs=gql`
type Query{
    users:[User]
    user(_id:ID!):User
    quotes:[Quote]
    findidquote(by:ID!):[Quote]
    getLead:[Lead]

}
type Lead{
 id:ID
Name:String
Number:String
email:String
Note:String
}

type User{
    _id:ID
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]
}

type Quote{
    by:ID
    ifsc:String
}

type Status{
    to:ID!
    new:String
    new1:String
}

type Source{
    sd:ID!
    source:String
    source1:String
}
type Mutation{
    createUserDummy(userNew:UserInput!):User
    crateLead(newLead:LeadInput!):Lead
}

input LeadInput{
    Name:String!
    Number:String!
    email:String!
    Note:String!
}

input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
 }
  `

export default typeDefs