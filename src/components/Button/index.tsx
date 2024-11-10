import { Pressable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native-paper";


interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
}


export default function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  const buttonStyle = variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;
  const textStyle = variant === 'secondary' ? styles.secondaryButtonText : styles.primaryButtonText;

  return (
    <TouchableHighlight
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      underlayColor={variant === 'secondary' ? '#e6e6e6' : '#0050b3'}
    >
      <View>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}