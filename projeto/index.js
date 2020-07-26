const {ApolloServer, gql} = require( 'apollo-server' );

const typeDefs = gql`
    scalar Date
    type Query{
        ola: String
        hora: Date
    }
`

const resolvers = {
    Query:{
        ola(){
            return "olá mundo";
        },
        hora() {
            return new Date
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