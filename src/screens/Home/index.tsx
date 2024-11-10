
import { Eye, EyeClosed, Pencil } from "lucide-react-native";
import { Header } from "../../components/header";
import { FlatList, Pressable, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import ExpensePieChart from "../../components/ExpensePieChart";
import { Card } from "../../components/Cards";
import { RendaMensal } from "./_components/modal/RendaMensal";


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

const mockArticles = [
    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => 1},
    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => 1},
    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => 1},
    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => 1},
]

export function Home() {
    const [showRenda, setShowRenda] = useState(false);
    const [bills, setBills] = useState(mockBills);
    const [pendencies, setPendencies] = useState(mockPendencies);
    const [modalRendaVisible, setModalRendaVisible] = useState(false);
    // const {} = useGlobal();

    const handleSaveRenda = (value: string) => {
        setModalRendaVisible(false);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#09090B"
            }}
        >
            <ScrollView>
                <Header />
                
                <View
                    style={{
                        marginHorizontal: 18
                    }}
                >
                    <Text style={[styles.text, styles.title]}>Renda</Text>
                    <View style={[styles.cardRenda]}>
                        <Text style={[styles.text, {
                            fontSize: 18
                        }]}>Sua renda mensal é:</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={[styles.text, styles.title]}>{!showRenda ? "R$ 44.500,00" : "****"}</Text>

                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 8
                                }}
                            >
                                <Pressable
                                    onPress={() => setShowRenda(!showRenda)}
                                >
                                    {!showRenda ? <Eye color="#D4D4D8" size={20}/> : <EyeClosed color="#D4D4D8" size={20}/>}
                                </Pressable>
                                <Pressable
                                    onPress={() => setModalRendaVisible(true)}
                                >
                                    <Pencil color="#D4D4D8" size={20} />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <Card.Finance pendencies={pendencies} bills={bills} />

                    <Text style={[styles.text, styles.title]}>Score</Text>
                    <View style={[styles.cardRenda]}>
                        <Text style={[styles.text, {
                            textAlign: "center",
                            marginVertical: 12,
                            fontSize: 20
                        }]}>Seu Score</Text>
                        <Text
                            style={[styles.text, {
                                fontSize: 24,
                                textAlign: "center"
                            }]}
                        >523</Text>
                    </View>

                    <Text style={[styles.text, styles.title]}>Artigos</Text>
                    {
                        mockArticles.map((article, i) => (
                            <Card.Education 
                                key={i}
                                title={article.title}
                                content={article.content}
                                onPress={article.onPress}
                            />
                        ))
                    }
                </View>

                <RendaMensal 
                    closeModal={() => setModalRendaVisible(false)}
                    modalVisible={modalRendaVisible}
                    saveValue={handleSaveRenda}
                    defaultValue="44500.00"
                />
            </ScrollView>
        </View>
    )
}