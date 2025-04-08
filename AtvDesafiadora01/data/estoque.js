// Declara e exporta uma lista inicial de peças em estoque com nome, quantidade e código
export let estoque = [
  { nome: 'Engrenagem', quantidade: 10, codigo: 'P001' },
  { nome: 'Parafuso', quantidade: 50, codigo: 'P002' },
  { nome: 'Eixo', quantidade: 20, codigo: 'P003' },
];

// Função exportada que adiciona uma nova peça ao array `estoque`
export const adicionarPeca = (novaPeca) => {
  estoque.push(novaPeca); // Insere a nova peça no final da lista
};

// Função exportada que atualiza a quantidade de uma peça específica, com base no código
export const editarQuantidade = (codigo, novaQuantidade) => {
  // Procura a peça no estoque que tenha o código correspondente
  const peca = estoque.find(item => item.codigo === codigo);
  
  // Se encontrar a peça, atualiza a quantidade
  if (peca) {
    peca.quantidade = novaQuantidade;
  }
};
