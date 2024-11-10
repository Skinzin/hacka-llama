import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ExpensePieChart from '../../components/ExpensePieChart';
import { PlusCircle, X } from 'lucide-react-native';
import { Header } from '../../components/header';
import { styles } from './styles';
import { Card } from '../../components/Cards';
import { NewFinanceModal } from './_components/modal/newFinanceiro';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const mockBills = [
  { id: '1', description: 'Parcela Carro', dueDate: '15/05/2023', amount: 750.00, status: 'pending' },
  { id: '2', description: 'Parcela Carro', dueDate: '15/04/2023', amount: 750.00, status: 'paid' },
  { id: '3', description: 'Parcela Carro', dueDate: '15/03/2023', amount: 750.00, status: 'paid' },
  { id: '4', description: 'Parcela Casa', dueDate: '10/05/2023', amount: 1200.00, status: 'pending' },
  { id: '5', description: 'Parcela Casa', dueDate: '10/04/2023', amount: 1200.00, status: 'paid' },
  { id: '6', description: 'Cartão de Crédito', dueDate: '05/05/2023', amount: 2500.50, status: 'overdue' },
];

const mockPendencies = [
  { id: '1', type: 'Carro', institution: 'Banco A', totalDebt: 30000, paidInstallments: 12, totalInstallments: 48 },
  { id: '2', type: 'Casa', institution: 'Banco B', totalDebt: 200000, paidInstallments: 60, totalInstallments: 360 },
  { id: '3', type: 'Cartão de Crédito', institution: 'Banco C', totalDebt: 5000, paidInstallments: 0, totalInstallments: 1 },
];

interface FinanceEntry {
  type: 'RECEITA' | 'DESPESA';
  title: string;
  amount: number;
  category: EntryCategory;
}

enum EntryCategory {
  ALIMENTACAO = 'ALIMENTACAO',
  TRANSPORTE = 'TRANSPORTE',
  LAZER = 'LAZER',
  SAUDE = 'SAUDE',
  EDUCACAO = 'EDUCACAO',
  INVESTIMENTO = 'INVESTIMENTO',
  OUTROS = 'OUTROS'
}


export function Finance() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [bills, setBills] = useState(mockBills);
  const [pendencies, setPendencies] = useState(mockPendencies);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePayBill = (id: string) => {
    setBills(bills.map(bill => 
      bill.id === id ? { ...bill, status: 'paid' } : bill
    ));
  };

  const handleAddNewEntry = (entry: FinanceEntry) => {
    // Here you would typically send this data to your backend
    // and then update your local state with the response
    console.log('New entry:', entry);
    // For now, let's just log it
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMonth}
            style={[styles.picker, styles.text]}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            {months.map((month, index) => (
              <Picker.Item key={month} label={month} value={index} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedYear}
            style={[styles.picker, styles.text]}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {years.map((year) => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <PlusCircle size={24} color="#D4D4D8" />
        </TouchableOpacity>
      </View>
      <ExpensePieChart month={selectedMonth} year={selectedYear} />
      <View
        style={{
          marginHorizontal: 16
        }}
      >
        <Card.Finance pendencies={pendencies} bills={bills} />
      </View>
      <NewFinanceModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        saveEntry={handleAddNewEntry}
      />
    </ScrollView>
  );
}

