import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Driver @key(fields: "id") {
        id: ID!
        name: String
    }

    type Query {
        drivers: [Driver]
    }
`