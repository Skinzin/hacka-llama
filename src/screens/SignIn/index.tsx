import { View } from "react-native";
import { Input } from "../../components/input";
import { styles } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { Text } from "react-native-paper";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const { navigate } = useNavigation();

    const onSubmit = () => {
        signIn(email, password)
    }
    

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text style={styles.title}>
                Seja bem-vindo/a{`\n`}de volta!
            </Text>
            <View style={styles.content}>
                <Input 
                    keyboardType="email-address"
                    label="E-mail"
                    placeholder="joedohn@email.com"
                />
                <Input 
                    label="Senha"
                    placeholder="********"
                    secureTextEntry
                />

                <Button 
                    title="Entrar"
                    variant="primary"
                    onPress={onSubmit}
                />

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Não tem uma conta?</Text>
                    <Button title="Cadastrar uma conta" onPress={() => navigate("SignUp")} variant="secondary" />
                </View>
            </View>
        </GestureHandlerRootView>
    )
}