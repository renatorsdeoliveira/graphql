const { ApolloServer, gql } = require ('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'João',
    email: 'joao@gmail.com',
    idade: 24,
    perfil_id: 1
}, {
    id: 2,
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 29,
    perfil_id: 2
}, {
    id: 3,
    nome: 'Joana',
    email: 'joana@gmail.com',
    idade: 20,
    perfil_id: 3
}]


const perfil = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrator'
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
        perfil: Perfil
    }
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
    
    Usuario: {
        salario(u){
            return u.salario_final + 1
        },
        perfil(usuario){
            const perl = perfil
            .filter(p => p.id == usuario.perfil_id)
            return perl ? perl[0] : null  
        }
     },
    Query: {
        usuarios(){
            return usuarios
        },
        usuarioLogado(_, args){
            const selecionados = usuarios
            .filter(user => user.id == args.id)
            return selecionados ? selecionados[0] : null
        },
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