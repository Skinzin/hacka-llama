import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
    marginHorizontal: 16,
  },
  text: {
    color: "#D4D4D8"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginBottom: 16,
  },
  listContainer: {
    // backgroundColor: '#ffffff',
    borderRadius: 8,
    // margin: 16,
    // padding: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    borderBottomWidth: 0.78,
    borderColor: "#27272A"
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  expenseName: {
    flex: 1,
    fontSize: 16,
  },
  expenseValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#27272A',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});