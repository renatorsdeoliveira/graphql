const  {usuarios, perfil} = require('../data/db')

module.exports = {
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