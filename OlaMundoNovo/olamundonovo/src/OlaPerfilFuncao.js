import React from 'react';

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <div>
      <h2>Componente Funcional</h2>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Endereço:</strong> {endereco}
      </p>
      <p>
        <strong>Telefone:</strong> {telefone}
      </p>
    </div>
  );
};

export default OlaPerfilFuncao;
