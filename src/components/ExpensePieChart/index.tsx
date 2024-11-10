import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';

interface Expense {
  name: string;
  value: number;
  color: string;
}

interface ExpensePieChartProps {
  month: number;
  year: number;
}

export default function ExpensePieChart({ month, year }: ExpensePieChartProps) {
  // Simulating expenses data based on month and year
  const expenses: Expense[] = [
    { name: 'Moradia', value: 1000 + (month * 10), color: '#FF6384' },
    { name: 'Alimentação', value: 500 + (month * 5), color: '#36A2EB' },
    { name: 'Transporte', value: 300 + (month * 3), color: '#FFCE56' },
    { name: 'Lazer', value: 200 + (month * 2), color: '#4BC0C0' },
    { name: 'Saúde', value: 150 + (month * 1), color: '#9966FF' },
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.value, 0);

  const pieData = expenses.map((expense) => ({
    value: expense.value,
    color: expense.color,
    text: `${((expense.value / totalExpenses) * 100).toFixed(1)}%`,
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, styles.text]}>Gastos do Usuário</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          donut
          showText
          textColor="black"
          radius={120}
          innerRadius={60}
          textSize={12}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={[styles.listTitle, styles.text]}>Gastos</Text>
        {expenses.map((expense) => (
          <View key={expense.name} style={styles.listItem}>
            <View style={[styles.colorIndicator, { backgroundColor: expense.color }]} />
            <Text style={[styles.expenseName, styles.text]}>{expense.name}</Text>
            <Text style={[styles.expenseValue, styles.text]}>R$ {expense.value.toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={[styles.totalLabel, styles.text]}>Total:</Text>
          <Text style={[styles.totalValue, styles.text]}>R$ {totalExpenses.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
}