import { FlatList } from "react-native-gesture-handler";
import { Card } from "../../components/Cards";
import { View } from "react-native";
import { Header } from "../../components/header";


export function ContentEduca() {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header />
            
            <FlatList
                data={[
                    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => console.log("Oi")},
                    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => console.log("Oi")},
                    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => console.log("Oi")},
                    {title: "Introdução à React Native", content: "Aprenda os fundamentos do desenvolvimento mobile com React Native.", onPress: () => console.log("Oi")},
                ]}
                renderItem={({ item }) => <Card.Education 
                    title={item.title}
                    content={item.content}
                    onPress={item.onPress}
                />}
            />
        </View>
    )
}