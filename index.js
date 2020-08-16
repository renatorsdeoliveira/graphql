const { ApolloServer, gql } = require ('apollo-server')

const typeDefs = gql `
    scalar Date
    type Usuario {
        id: ID,
        nome: String
        email: String
        telefone: Int
        salario: Float
        vip: Boolean
        bla: String
    }

    #pontos de entrada
    type Query {
        ola: String
        horaAtual: Date
        usauario: Usuario
   
    }


`

const resolvers = {
    Usuario: {
       salario(u){
           return u.salario_final + 1
       } ,
       bla(a){
        return 'opa'
       }
    },
    Query: {

        ola() {
            return "retornando testo"
        },
        horaAtual(){
            return new Date
        },
        usauario(){
           return {
               id: 1,
               nome: 'Ana',
               email: 'ana@gmail.com',
               telefone: 35284565,
               salario_final: 3.500,
               vip: true
           }
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