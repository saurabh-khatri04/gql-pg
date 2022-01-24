import {ApolloGateway} from '@apollo/gateway'
import {ApolloServer} from 'apollo-server'
const { readFileSync } = require('fs');

const supergraphSdl = readFileSync('./supergraph.graphql').toString();
const PORT = 4000

const gateway = new ApolloGateway({
    supergraphSdl
})

const server = new ApolloServer({
    gateway
});

server.listen(PORT).then(({url}) => {
    console.log(`🚀 Gateway ready at ${url}`);
})
