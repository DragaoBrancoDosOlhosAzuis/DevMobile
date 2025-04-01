import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from './styles';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Home Screen</Text>
            
            {/* Botão que navega para a tela Details, passando o título como parâmetro. */}
            <Button
                title="First Item"
                onPress={() => navigation.navigate("Details", { title: "First Item" })}
            />
            
            {/* Botão que navega para a tela Details, passando o título como parâmetro. */}
            <Button
                title="Second Item"
                onPress={() => navigation.navigate("Details", { title: "Second Item" })}
            />
            
            {/* Botão que navega para a tela Details, passando o título como parâmetro. */}
            <Button
                title="Third Item"
                onPress={() => navigation.navigate("Details", { title: "Third Item" })}
            />
        </View>
    );
}