import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import TabBottom from "../TabBottom";

const { Navigator, Screen, Group } = createStackNavigator();
export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Screen name="homestack" component={TabBottom} />
    </Navigator>
  );
}
