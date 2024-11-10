import { ChevronRightIcon } from "lucide-react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { styles } from "./styles";


interface EducationalCardProps {
    title: string;
    content: string;
    onPress?: () => void;
}

export function Education({ content, title, onPress}: EducationalCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            <ChevronRightIcon size={24} color="#D4D4D8"/>
            {/* <Icon name="chevron-right" size={24} color="#000" style={styles.icon} /> */}
        </TouchableOpacity>
    )
}