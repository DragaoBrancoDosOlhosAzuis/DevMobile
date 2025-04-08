// Importa o React (necessário para componentes funcionais)
import React from 'react';

// Importa o container de navegação e o criador de pilha de telas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as telas do aplicativo
import LoginScreen from './screens/LoginScreen';
import RecuperarSenhaScreen from './screens/RecuperarSenhaScreen';
import EstoqueScreen from './screens/EstoqueScreen';
import AdicionarPecaScreen from './screens/AdicionarPecaScreen';
import EditarPecaScreen from './screens/EditarPecaScreen';

// Cria uma instância do Stack Navigator
const Stack = createNativeStackNavigator();

// Função principal do aplicativo
export default function App() {
  return (
    // Envolve a navegação com o NavigationContainer (obrigatório para funcionar)
    <NavigationContainer>

      {/* Define as telas da navegação em pilha (Stack Navigator) */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* Tela inicial de login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Tela de recuperação de senha */}
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        
        {/* Tela principal com o estoque */}
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        
        {/* Tela para adicionar nova peça */}
        <Stack.Screen name="AdicionarPeca" component={AdicionarPecaScreen} />
        
        {/* Tela para editar uma peça existente */}
        <Stack.Screen name="EditarPeca" component={EditarPecaScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
