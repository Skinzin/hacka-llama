import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  text: {
    color: "#D4D4D8"
  },
  pendencyCard: {
    backgroundColor: '#18181B',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    width: 200,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#27272A"
  },
  pendencyType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pendencyDebt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  pendencyInstallments: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  pendencyInstitution: {
    fontSize: 14,
    color: '#666',
  },
  pendencyIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#18181B',
    borderRadius: 8,
    padding: 16,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  closeButton: {
    // alignSelf: 'flex-end',
    padding: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  billList: {
    maxHeight: '90%',
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#27272A',
  },
  billInfo: {
    flex: 1,
  },
  billDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
  billDueDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  billAmount: {
    alignItems: 'flex-end',
  },
  billAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
  },
  paidTag: {
    backgroundColor: '#4CAF50',
  },
  overdueTag: {
    backgroundColor: '#F44336',
  },
  pendingTag: {
    backgroundColor: '#FFC107',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});