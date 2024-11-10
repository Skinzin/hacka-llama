import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#09090B',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      // backgroundColor: '#ffffff',
      // borderBottomWidth: 1,
      // borderBottomColor: '#e0e0e0',
    },
    pickerContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    picker: {
      flex: 1,
      height: 50,
    },
    text: {
      color: "#D4D4D8"
    }
  });