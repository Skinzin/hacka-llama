import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Input } from "../../../../components/input";
import Button from "../../../../components/Button";

interface NewFinanceModalProps {
    modalVisible: boolean;
    closeModal: () => void;
    saveEntry: (entry: FinanceEntry) => void;
}

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

export function NewFinanceModal({ modalVisible, closeModal, saveEntry }: NewFinanceModalProps) {
    const [type, setType] = useState<'RECEITA' | 'DESPESA'>('DESPESA');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState<EntryCategory>(EntryCategory.OUTROS);

    const handleSave = () => {
        const entry: FinanceEntry = {
            type,
            title,
            amount: parseFloat(amount),
            category
        };
        saveEntry(entry);
        closeModal();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <Pressable 
                    style={styles.overlay}
                    onPress={closeModal} 
                />
                <View style={styles.modalContent}>
                    <Text style={styles.label}>Tipo</Text>
                    <Picker
                        selectedValue={type}
                        style={styles.picker}
                        onValueChange={(itemValue) => setType(itemValue)}
                    >
                        <Picker.Item label="Despesa" value="DESPESA" />
                        <Picker.Item label="Receita" value="RECEITA" />
                    </Picker>

                    <Input
                        label="Título"
                        placeholder="Digite o título"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />

                    <Input
                        label="Valor"
                        placeholder="Digite o valor"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Categoria</Text>
                    <Picker
                        selectedValue={category}
                        style={styles.picker}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                    >
                        {Object.values(EntryCategory).map((cat) => (
                            <Picker.Item key={cat} label={cat} value={cat} />
                        ))}
                    </Picker>

                    <Button 
                        onPress={handleSave}
                        title="Salvar"
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#09090B",
        borderRadius: 8,
        borderWidth: 0.78,
        borderColor: "#27272A",
        padding: 16,
        zIndex: 1
    },
    label: {
        color: "#D4D4D8",
        fontSize: 16,
        marginBottom: 4,
    },
    picker: {
        backgroundColor: "#27272A",
        color: "#D4D4D8",
        marginBottom: 16,
    },
    input: {
        marginBottom: 16,
    }
});