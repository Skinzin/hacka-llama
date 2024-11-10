import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
      width: '100%',
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: '#D4D4D8',
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#27272A',
      borderRadius: 8,
      backgroundColor: 'transparent',
      paddingHorizontal: 12,
      height: 48,
      color: "#D4D4D8"
    },
    inputContainerFocused: {
      borderColor: '#0070f3',
    //   boxShadow: '0 0 0 3px rgba(0, 112, 243, 0.1)',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#D4D4D8',
    },
    eyeIcon: {
      padding: 4,
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 4,
    },
    inputError: {
      borderColor: 'red',
    },
    text: {
      color: "#D4D4D8"
    }
  });
  