import React from 'react';
import OlaPerfilFuncao from './OlaPerfilFuncao';
import OlaPerfilClasse from './OlaPerfilClasse';

const App = () => {
  return (
    <div>
      <h1>Olá Mundo Novo</h1>
      <OlaPerfilFuncao
        nome="João Silva"
        endereco="Rua A, 123"
        telefone="(11) 99999-9999"
      />
      <OlaPerfilClasse
        nome="Maria Souza"
        endereco="Rua B, 456"
        telefone="(21) 98888-8888"
      />
    </div>
  );
};

export default App;
