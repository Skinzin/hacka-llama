import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {} from "lucide-react-native";
import { DollarSign, House, Wallet } from "lucide-react-native";
import { Home } from "../../screens/Home";
import { Finance } from "../../screens/Finance";



const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes() {    
    
    return (
        <>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#18181B",
                        borderTopColor: "#27272A",
                    }
                }}
            >
                <Screen 
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
                        title: "Início",
                    }}
                />
                <Screen 
                    name="finance"
                    component={Finance}
                    options={{
                        tabBarIcon: ({ color, size }) => <Wallet color={color} size={size} />,
                        title: "Financeiro",
                    }}
                />
            </Navigator>
        </>
    )
} 