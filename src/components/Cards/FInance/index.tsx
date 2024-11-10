import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { styles } from './styles';
import { ChevronRight, X } from 'lucide-react-native';

interface Pendency {
  id: string;
  type: string;
  institution: string;
  totalDebt: number;
  paidInstallments: number;
  totalInstallments: number;
}

interface Bill {
  id: string;
  description: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'overdue' | 'pending';
}

interface FinancialPendenciesProps {
  pendencies: Pendency[];
  bills: Bill[];
}

export const Finance: React.FC<FinancialPendenciesProps> = ({ pendencies, bills }) => {
  const [selectedPendency, setSelectedPendency] = useState<Pendency | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (pendency: Pendency) => {
    setSelectedPendency(pendency);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPendency(null);
  };

  const renderPendencyCard = (pendency: Pendency) => (
    <TouchableOpacity
      style={styles.pendencyCard}
      onPress={() => openModal(pendency)}
      key={pendency.id}
    >
      <Text style={[styles.pendencyType, styles.text]}>{pendency.type}</Text>
      <Text style={styles.pendencyDebt}>R$ {pendency.totalDebt.toFixed(2)}</Text>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <View>
          <Text style={styles.pendencyInstallments}>
          {pendency.paidInstallments} de {pendency.totalInstallments}
          </Text>
          <Text style={styles.pendencyInstitution}>{pendency.institution}</Text>
        </View>
        <ChevronRight size={24} color="#D4D4D8" />
      </View>
    </TouchableOpacity>
  );

  const renderBillItem = ({ item }: { item: Bill }) => (
    <View style={styles.billItem}>
      <View style={styles.billInfo}>
        <Text style={[styles.billDescription, styles.text]}>{item.description}</Text>
        <Text style={[styles.billDueDate, styles.text]}>Vencimento: {item.dueDate}</Text>
      </View>
      <View style={styles.billAmount}>
        <Text style={[styles.billAmountText, styles.text]}>R$ {item.amount.toFixed(2)}</Text>
        <View style={[styles.statusTag, styles[`${item.status}Tag`]]}>
          <Text style={[styles.statusText]}>
            {item.status === 'paid' ? 'Pago' : item.status === 'overdue' ? 'Venceu' : 'Pendência'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>Pendências Financeiras</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {pendencies.map(renderPendencyCard)}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, styles.text]}>
                {selectedPendency?.type} - {selectedPendency?.institution}
              </Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <X size={24} color="#D4D4D8" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={bills.filter(bill => bill.description.includes(selectedPendency?.type || ''))}
              renderItem={renderBillItem}
              keyExtractor={(item) => item.id}
              style={styles.billList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
