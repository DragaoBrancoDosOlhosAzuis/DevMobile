// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

// Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
    // Estilos para o container principal
    container: {
        flex: 1, // Preenche todo o espaço disponível
        flexDirection: "column", // Organiza os elementos em coluna
        alignItems: "center", // Centraliza os elementos horizontalmente
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        backgroundColor: "ghostwhite", // Define a cor de fundo
        // Aplica um padding top diferente dependendo da plataforma
        ...Platform.select({
            ios: { paddingTop: 20 }, // Padding top para iOS
            android: { paddingTop: StatusBar.currentHeight }, // Padding top para Android, considerando a altura da barra de status
        }),
    },

    // Estilos para as caixas
    box: {
        width: 300, // Largura da caixa
        height: 100, // Altura da caixa
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "lightgray", // Cor de fundo da caixa
        borderWidth: 1, // Largura da borda
        borderStyle: "dashed", // Estilo da borda (tracejada)
        borderColor: "darkslategray", // Cor da borda
    },

    // Estilos para o texto dentro das caixas
    boxText: {
        color: "darkslategray", // Cor do texto
        fontWeight: "bold", // Peso da fonte (negrito)
    },
});