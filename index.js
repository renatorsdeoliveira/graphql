const { ApolloServer, gql } = require ('apollo-server')

const typeDefs = gql `
    #pontos de entrada
    type Query {
        ola: String
    }

`

const resolvers = {
    Query: {
        ola() {
            return "retornando testo"
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Execultando em ${url}`)
})