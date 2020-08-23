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
    type Produto{
        nome: String!
        preco: Float!
        desconto: Float
        produtoComDesconto: Float
    }
    
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
        ola: String
        horaAtual: Date
        usauario: Usuario
        produtoEmDesaque: Produto
        numeroMegaSena: [Int!]!
        usuarios: [Usuario]
    }


`

const resolvers = {
    Produto: {
        produtoComDesconto(pa){
            if(pa.desconto){
                return pa.preco * (1 - pa.desconto)
            }else {
                return p.preco
            }
        }
    },
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
        },
        produtoEmDesaque(){
            return {
                nome: 'Renato',
                preco: 10,
                desconto: 2,
            }
        },
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