import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
//screens

import BottomTabNavigation from './navigation/BottomTabNavigation'
import { useCallback } from 'react';
import { ProductDetails, Cart } from './screens';

const Stack = createNativeStackNavigator()
export default function App() {
  // Load the fonts
  let [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    // Add more font families here if needed
  });
const onLayoutRootView = useCallback(async()=>{
  if(fontsLoaded) {
    await SplashScreen.hideAsync()
  }
},[fontsLoaded])
    // Show the AppLoading component until the fonts are loaded
    if (!fontsLoaded) {
      return null;
    }

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name='Bottom Navigation'
      component={BottomTabNavigation}
      options={{headerShown: false}}
      />
        <Stack.Screen
      name='Cart'
      component={Cart}
      options={{headerShown: false}}
      />
          <Stack.Screen
      name='ProductDetails'
      component={ProductDetails}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
