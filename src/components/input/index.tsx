import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { styles } from "./styles";
import { Eye, EyeClosed } from "lucide-react-native";

interface InputProps extends TextInputProps {
    label: string;
    error?: string;
}

export function Input({ label, value, onChangeText, placeholder, secureTextEntry, error, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    return (
        <View style={styles.container}>
            <Text style={[styles.label, styles.text]}>{label}</Text>
            <View style={[
                styles.inputContainer,
                isFocused && styles.inputContainerFocused
            ]}>
                <TextInput
                    style={[styles.input, error && styles.inputError]}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={onChangeText}
                    value={value}
                    // {...rest}
                />
                {secureTextEntry && (
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {
                        isPasswordVisible ? <Eye size={20} color="#D4D4D8" /> : <EyeClosed size={20} color="#D4D4D8"/>
                    }
                    {/* <Icon
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="#999"
                    /> */}
                </TouchableOpacity>
                )}
                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
        </View>
    )
}