

const usuarios = [{
    id: 1,
    nome: 'João',
    email: 'joao@gmail.com',
    idade: 24,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 29,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Joana',
    email: 'joana@gmail.com',
    idade: 20,
    perfil_id: 3,
    status: 'BOQUEADO'
}]


const perfil = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrator'
}]


module.exports = { usuarios, perfil}