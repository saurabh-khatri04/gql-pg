import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import {resolvers} from './resolvers'
import {typeDefs} from './schema/schema'

const PORT_SERVICE_2 = 4002

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers})
})

server.listen(PORT_SERVICE_2).then(({url}) => {
    console.log(`Server (Service-b) Started at: ${url}` )
})