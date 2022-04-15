import {gql} from '@apollo/client'

export const GET_ALL_QUERIES=  gql`

query getAllQuote{
    quotes{
      by
      ifsc
    }
  }
`