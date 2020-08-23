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

    #pontos de entrada
    type Query {
      
        usuarioLogado(id: ID): Usuario
        
    }


`

const resolvers = {
    Query: {
        usuarioLogado(_, args){
            const selecionados = usuarios
            .filter(user => user.id == args.id)
            return selecionados ? selecionados[0] : null
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