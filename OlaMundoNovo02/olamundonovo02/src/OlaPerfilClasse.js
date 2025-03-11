import React, { Component } from 'react';

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    return (
      <div>
        <h2>Componente Classe</h2>
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
  }
}

export default OlaPerfilClasse;
