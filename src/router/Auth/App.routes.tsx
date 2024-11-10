import { CardStyleInterpolators, TransitionPresets, createStackNavigator } from "@react-navigation/stack"
import { SignIn } from "../../screens/SignIn";
import { SignUp } from "../../screens/SignUp";


const { Navigator, Screen, Group } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
        }}>
            <Group screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS, gestureDirection: "vertical", transitionSpec: {
                    close: {animation: "timing", config: {delay: 0, duration: 300}},
                    open: {animation: "spring", config: {delay: 0}}
                }}}>
                <Screen name="SignIn" component={SignIn} />
                <Screen name="SignUp" component={SignUp} />
            </Group>
        </Navigator>
    )
}