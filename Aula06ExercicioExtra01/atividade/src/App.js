import React, { useState } from 'react';
import './App.css';
import imagem from './assets/sua_imagem.jpg';
import imagemFundo from './assets/sua_imagem_de_fundo.jpg';

const App = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
      ],
    },
    { title: 'Seção 2', data: [{ id: 3, name: 'Item C' }] },
  ];

  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(true);
    }, 2000);
  };

  return (
    <div className="container">
      <div
        className="imageBackground"
        style={{ backgroundImage: `url(${imagemFundo})` }}
      >
        <h1>Exemplo de Componentes Interativos</h1>
      </div>

      <div className="content">
        <img src={imagem} alt="Imagem" className="image" />

        <input
          type="text"
          className="input"
          placeholder="Digite algo"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <button onClick={handleButtonPress}>Clique Aqui</button>

        <button
          className="button"
          onClick={() => console.log('Botão pressionado')}
        >
          TouchableOpacity (Simulação)
        </button>

        {isLoading && <div className="loading">Carregando...</div>}

        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
        <p>Valor do Slider: {sliderValue}</p>

        <label>
          <input
            type="checkbox"
            checked={switchValue}
            onChange={() => setSwitchValue(!switchValue)}
          />
          Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}
        </label>

        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        {sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>Modal Aberto!</p>
            <button onClick={() => setModalVisible(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
