import { Image, Pressable, View } from "react-native";
import { darkColor, theme } from "../../style/theme";
import { Text } from "react-native-paper";
import { Bell, LogOut, Settings, User } from "lucide-react-native";
import { useAuth } from "../../hooks/useAuth";


export function Header() {
    const { signOut } = useAuth();
    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: "#27272A",
                paddingHorizontal: 16,
                paddingVertical: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#18181B"
                // backgroundColor: theme.colors.onBackground
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12
                }}
            >
                <View style={{
                    backgroundColor: "#27272A",
                    padding: 8,
                    borderRadius: 8
                }}>
                    <User size={22} color="#fff" />
                </View>

                <View>
                    <Text
                        style={{
                            color: "#D4D4D8",
                            fontWeight: "600",
                            fontSize: 18
                        }}
                    >Vinicius Costa</Text>
                    <Text
                        style={{
                            color: "#D4D4D8"
                        }}
                    >9 de Nov, 18:00</Text>
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12
                }}
            >
                <Pressable
                    onPress={signOut}
                >
                    <LogOut size={20} color="#D4D4D8"/>
                </Pressable>
            </View>
        </View>
    )
}