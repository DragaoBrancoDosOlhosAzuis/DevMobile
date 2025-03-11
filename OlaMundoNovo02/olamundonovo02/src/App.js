import React, { useState } from 'react';
import OlaPerfilFuncao from './OlaPerfilFuncao';
import OlaPerfilClasse from './OlaPerfilClasse';

const App = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(false);

  const handleSubmit = () => {
    if (nome && endereco && telefone) {
      setDadosEnviados(true);
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Olá Mundo Novo 02</h1>

      <div>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
          Enviar
        </button>
      </div>

      {dadosEnviados && (
        <div>
          <OlaPerfilFuncao
            nome={nome}
            endereco={endereco}
            telefone={telefone}
          />
          <OlaPerfilClasse
            nome={nome}
            endereco={endereco}
            telefone={telefone}
          />
        </div>
      )}
    </div>
  );
};

export default App;
