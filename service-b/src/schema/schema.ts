import {gql} from 'apollo-server'

export const typeDefs = gql`
    extend type Query {
        rides: [Ride]
    }

    type Ride @key(fields: "id"){
        id: ID!
    }
`