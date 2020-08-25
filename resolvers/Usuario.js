const { perfil } = require('../data/db')

module.exports = {
    salario(u){
        return u.salario_final + 1
    },
    perfil(usuario){
        const perl = perfil
        .filter(p => p.id == usuario.perfil_id)
        return perl ? perl[0] : null  
    }
}