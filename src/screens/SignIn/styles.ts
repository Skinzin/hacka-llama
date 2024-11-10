import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#19181B"
    },
    content: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#D4D4D8",
        textAlign: 'center',
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 24,
    },
    signUpContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    signUpText: {
        fontSize: 14,
        color: '#D4D4D8',
        marginBottom: 8,
    },
})