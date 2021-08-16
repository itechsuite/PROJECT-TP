// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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



const Stack = createStackNavigator();

const MainStack = () => {

  return (
  <Stack.Navigator initialRouteName="home" 
        screenOptions={{
          
        }}

        
      >

        <Stack.Screen name="onboarding" 
         options={{
           headerShown:false
         }}
         component ={OnboardingScreen} />
         <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}} />
         <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
         <Stack.Screen name="loginemail" component={LoginEmail} options={{headerShown:false}} />
         <Stack.Screen name="signupemail" component={SignUpEmail} options={{headerShown:false}} />
         <Stack.Screen name="phonevalidation" component={PhoneValidationScreen} options={{headerShown:false}} />
         <Stack.Screen name="demo" component={Demo} options={{headerShown:false}} />
         <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}} />
         <Stack.Screen name="otpverification" component={OtpVerificationScreen} options={{headerShown:false}} />
         <Stack.Screen name="verifiedscreen" component={VerifiedScreen} options={{headerShown:false}} />
         <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />

      </Stack.Navigator>

  )
}
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
        <MainStack />
        {/* <FirstTimeStack /> */}
    </NavigationContainer>
  );
}

export default App;
