import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Input } from "../../../../components/input";
import Button from "../../../../components/Button";
import { useState } from "react";

interface RendaMensalProps {
    modalVisible: boolean;
    closeModal: () => void;
    defaultValue?: string;
    saveValue: (value: string) => void;
}

export function RendaMensal({ modalVisible, closeModal, defaultValue = "00.00", saveValue }: RendaMensalProps) {
    const [value, setValue] = useState(defaultValue);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                {/* Pressable para fechar o modal ao clicar fora do conteúdo */}
                <Pressable 
                    style={styles.overlay}
                    onPress={closeModal} 
                />
                <View style={styles.modalContent}>
                    <Input
                        label="Renda Mensal"
                        placeholder="Digite sua renda mensal"
                        keyboardType="numeric"
                        style={{ marginTop: 24 }}
                        value={value}
                        onChangeText={setValue} // Atualiza o estado com o valor do input
                    />

                    <Button 
                        onPress={() => saveValue(value)} // Salva o valor ao clicar em "Salvar"
                        title="Salvar"
                    />
                </View>
            </View>
        </Modal>
    )
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
        zIndex: 1 // Garante que o conteúdo do modal esteja acima do overlay
    }
});
