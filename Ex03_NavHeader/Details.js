import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route, navigation }: Props) {
    // Extrai os parâmetros 'content' e 'title' passados pela tela Home.
    const { content, title } = route.params;

    React.useEffect(() => {
        // Define o título do header da tela Details com o valor do parâmetro 'title'.
        navigation.setOptions({ title });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* Exibe o conteúdo recebido como parâmetro. */}
            <Text>{content}</Text>
        </View>
    );
}