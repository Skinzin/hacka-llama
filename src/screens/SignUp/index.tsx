import { ScrollView, View } from "react-native";
import { Input } from "../../components/input";
import { styles } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { Checkbox, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";


export function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        fixedIncome: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    });
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();
    const { signUp } = useAuth();

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
      };

    const onSubmit = () => {
        const { confirmPassword, ...newFormData } = formData;

        signUp(formData.name, formData.password, formData.email, formData.cpf, formData.fixedIncome, formData.phone)
    }
    

    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView style={{
                width: '100%'
            }}>
                <Text style={styles.title}>
                    Se cadastre na nossa plataforma!
                </Text>
                <View style={styles.content}>
                    <Input 
                        keyboardType="default"
                        label="Nome:"
                        placeholder="Joe Dohn"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                    <Input 
                        keyboardType="default"
                        label="CPF:"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChangeText={(text) => handleChange('cpf', text)}
                    />
                    <Input 
                        keyboardType="numeric"
                        label="Renda Mensal:"
                        placeholder="R$ 0,00"
                        value={formData.fixedIncome}
                        onChangeText={(text) => handleChange('fixedIncome123', text)}
                    />
                    <Input 
                        keyboardType="email-address"
                        label="E-mail:"
                        placeholder="joedohn@email.comvini@"
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <Input 
                        label="Senha"
                        placeholder="********"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />
                    <Input 
                        label="Confirme a senha"
                        placeholder="********"
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                    />

                    <Input 
                        label="Celular:"
                        placeholder="+55 (00) 00000-0000"
                        value={formData.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                    />

                    <View>
                        <Text style={styles.text}>Os termos de uso sobre privacidade dos seus dadosestão protegidos. Você concorda ao com os termos de uso? </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Checkbox 
                                status={isChecked ? "checked" : "unchecked"}
                                onPress={() => setIsChecked(!isChecked)}
                            />
                            <Text style={styles.text}>Sim, eu <Text style={{ color: "#013AB5" }}>estou e acordo</Text></Text>
                        </View>
                    </View>

                    <Button 
                        title="Cadastrar"
                        variant="primary"
                        onPress={onSubmit}
                    />
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}