import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [equipamento, setEquipamento] = useState(null);
  const [equipamentos, setEquipamentos] = useState([]);

  // Carrega todos os equipamentos quando o componente é montado
  useEffect(() => {
    carregarTodosEquipamentos();
  }, []);

  const cadastrarEquipamento = async () => {
    if (!id || !nome || !local) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const novoEquipamento = { id, nome, local };
      await AsyncStorage.setItem(id, JSON.stringify(novoEquipamento));
      setMensagem('Equipamento cadastrado com sucesso!');
      limparCampos();
      carregarTodosEquipamentos();
    } catch (error) {
      setMensagem('Erro ao cadastrar equipamento: ' + error);
    }
  };

  const carregarEquipamento = async () => {
    if (!id) {
      setMensagem('Digite um ID para carregar!');
      return;
    }

    try {
      const equipamentoJSON = await AsyncStorage.getItem(id);
      if (equipamentoJSON) {
        const equipamentoCarregado = JSON.parse(equipamentoJSON);
        setEquipamento(equipamentoCarregado);
        setNome(equipamentoCarregado.nome);
        setLocal(equipamentoCarregado.local);
        setMensagem('Equipamento carregado com sucesso!');
      } else {
        setMensagem('Equipamento não encontrado!');
        setEquipamento(null);
      }
    } catch (error) {
      setMensagem('Erro ao carregar equipamento: ' + error);
    }
  };

  const atualizarEquipamento = async () => {
    if (!id || !nome || !local) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const equipamentoAtualizado = { id, nome, local };
      await AsyncStorage.setItem(id, JSON.stringify(equipamentoAtualizado));
      setMensagem('Equipamento atualizado com sucesso!');
      limparCampos();
      carregarTodosEquipamentos();
    } catch (error) {
      setMensagem('Erro ao atualizar equipamento: ' + error);
    }
  };

  const removerEquipamento = async () => {
    if (!id) {
      setMensagem('Digite um ID para remover!');
      return;
    }

    try {
      await AsyncStorage.removeItem(id);
      setMensagem('Equipamento removido com sucesso!');
      limparCampos();
      carregarTodosEquipamentos();
    } catch (error) {
      setMensagem('Erro ao remover equipamento: ' + error);
    }
  };

  const carregarTodosEquipamentos = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const equipamentosArray = [];
      
      for (const key of keys) {
        const equipamentoJSON = await AsyncStorage.getItem(key);
        if (equipamentoJSON) {
          equipamentosArray.push(JSON.parse(equipamentoJSON));
        }
      }
      
      setEquipamentos(equipamentosArray);
    } catch (error) {
      console.error('Erro ao carregar equipamentos:', error);
    }
  };

  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
    setEquipamento(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TechFix - Gerenciamento de Equipamentos</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ID do equipamento"
        value={id}
        onChangeText={setId}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nome do equipamento"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Local de instalação"
        value={local}
        onChangeText={setLocal}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={cadastrarEquipamento} />
        <Button title="Carregar" onPress={carregarEquipamento} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Atualizar" onPress={atualizarEquipamento} />
        <Button title="Remover" onPress={removerEquipamento} />
      </View>
      
      <Text style={styles.mensagem}>{mensagem}</Text>
      
      <Text style={styles.subtitulo}>Equipamentos Cadastrados:</Text>
      
      <FlatList
        data={equipamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.equipamentoItem}>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Local: {item.local}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  mensagem: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
  equipamentoItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});