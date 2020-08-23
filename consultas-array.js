const { ApolloServer, gql } = require ('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'João',
    email: 'joao@gmail.com',
    idade: 24
}, {
    id: 2,
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 29
}, {
    id: 3,
    nome: 'Joana',
    email: 'joana@gmail.com',
    idade: 20
}]

const typeDefs = gql `
    scalar Date

    
    type Usuario {
        id: ID
        nome: String
        idade: Int
        email: String
        telefone: Int
        salario: Float
        vip: Boolean
        bla: String
    }



`

const resolvers = {
 

    Query: {

        numeroMegaSena(){
            // return [1,3,4,6,7]
            const crescente  = (a, b) => a - b
            return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
        },
        usuarios(){
            return usuarios
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