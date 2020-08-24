const { ApolloServer, gql } = require ('apollo-server')


const perfil = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrator'
}]




const typeDefs = gql `
    scalar Date

    type Perfil {
        id: ID
        nome: String
    }

    #pontos de entrada
    type Query {
        usuarios: [Usuario]
        usuarioLogado(id: ID): Usuario
        perfil: [Perfil]
        perfilParamentro(nome: String): Perfil 
        
    }


`

const resolvers = {
    
   
    Query: {

        perfil(){
            return perfil
        },
        perfilParamentro(_ , args){
            const perl = perfil
            .filter(p => p.nome == args.nome)
            return perl ? perl[0] : null  
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