import Stack from "./Stack";
import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import Auth from "./Auth";
import { Navigation } from "lucide-react-native";


export default () => {
    const { isAuth } = useAuth();
    // const { name } = useRoute();

    // console.log(name)
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {true ? <Stack /> : <Auth />}
        </View>
    )
}