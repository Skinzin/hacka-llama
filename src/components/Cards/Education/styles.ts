import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#27272A',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "#D4D4D8"
    },
    content: {
        fontSize: 14,
        color: '#A1A1AA',
    },
    icon: {
        marginLeft: 16,
    },
});