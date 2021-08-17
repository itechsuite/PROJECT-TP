// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';

// import screens 
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Page from './src/demo/Page';
import LoginScreen from './src/screens/LoginScreen';
import LoginEmail from './src/screens/LoginEmail';
import SignUpEmail from './src/screens/SignUpEmail';
import PhoneValidationScreen from './src/screens/PhoneValidationScreen';
import Demo from './src/screens/Demo';
import SplashScreen from './src/screens/SplashScreen';
import OtpVerificationScreen from './src/screens/OtpVerificationScreen';
import VerifiedScreen from './src/screens/VerifiedScreen';
import HomeScreen from './src/screens/HomeScreen';
import TabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';



const Stack = createNativeStackNavigator();


const FirstTimeStack = () => {
  return (
    <Stack.Navigator initialRouteName={"splash"}> 
      <Stack.Screen  name={"splash"} component ={SplashScreen} options= {{
        headerShown:false, 
        
      }} />
      <Stack.Screen  name={"onboarding"} component ={OnboardingScreen} />


    </Stack.Navigator>
  )
}

function App() {

  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <TabNavigator /> */}
        {/* <StackNavigator /> */}
        {/* <MainStack /> */}
        {/* <FirstTimeStack /> */}
    </NavigationContainer>
  );
}

export default App;
