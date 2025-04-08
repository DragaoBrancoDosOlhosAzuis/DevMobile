// Define e exporta um array com usuários cadastrados (nome e senha)
export const usuarios = [
  { nome: 'admin', senha: '123' },
  { nome: 'joao', senha: '456' },
  { nome: 'ana', senha: '789' },
];

// Função exportada que procura um usuário pelo nome no array `usuarios`
export const encontrarUsuario = (nome) => {
  // Retorna o primeiro usuário cujo nome coincida com o nome informado
  return usuarios.find(usuario => usuario.nome === nome);
};
