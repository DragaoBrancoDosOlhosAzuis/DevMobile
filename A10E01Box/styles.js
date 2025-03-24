// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native"; // Importa os módulos Platform, StyleSheet e StatusBar do react-native

// Cria e exporta um objeto StyleSheet
export default StyleSheet.create({
    // Estilo para o container principal
    container: {
        flex: 1, // O container ocupa todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "ghostwhite", // Define a cor de fundo como ghostwhite
        // Aplica estilos específicos para iOS e Android
        ...Platform.select({
            ios: { paddingTop: 20 }, // Adiciona um padding superior de 20 para iOS
            android: { paddingTop: StatusBar.currentHeight }, // Adiciona um padding superior igual à altura da barra de status para Android
        }),
    },
    // Estilo para a caixa interna
    box: {
        width: 100, // Define a largura da caixa como 100
        height: 100, // Define a altura da caixa como 100
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "lightgrey", // Define a cor de fundo da caixa como lightgrey
    },
    // Estilo para o texto dentro da caixa
    boxText: {
        color: "darkslategray", // Define a cor do texto como darkslategray
        fontWeight: "bold", // Define o peso da fonte como negrito
    },
});