// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { darkColor, theme } from './src/style/theme';
import Router from './src/router';
import {Home} from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthProvider';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <View
            style={{
              flex: 1,
              paddingTop:  StatusBar.currentHeight || 0 + 4,
              backgroundColor: "#19181B"
            }}
          >
            <StatusBar 
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            <Router />
            {/* <SignIn /> */}
          </View>
        </AuthProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

