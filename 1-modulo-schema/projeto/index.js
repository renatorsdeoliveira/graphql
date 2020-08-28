const {ApolloServer, gql} = require( 'apollo-server' );

const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query{
        ola: String
        hora: Date
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Query:{
        ola(){
            return "olá mundo";
        },
        hora() {
            return new Date
        },
        usuarioLogado(){
            return {
                id: 6,
                nome: 'Renato',
                email: 'renatorsdeoliveira@gmail',
                idade: 23,
                salario: 1500,
                vip: true
            }

        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`execultando em ${url}`);
});