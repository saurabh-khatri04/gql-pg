import {ApolloServer} from 'apollo-server'
import { typeDefs } from './schema/schema'
import { resolvers } from './resolvers'
import { buildSubgraphSchema } from '@apollo/subgraph';

const server = new ApolloServer({ 
    schema: buildSubgraphSchema({typeDefs, resolvers})
});

const PORT_SERVICE_1 = 4001

server.listen(PORT_SERVICE_1).then(({url}) => {
    console.log(`Server (Service-a) Started at: ${url}` )
})