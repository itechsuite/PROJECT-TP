import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  {createNativeStackNavigator}  from '@react-navigation/native-stack'

// screens import 
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'
import LoginEmail from '../screens/LoginEmail'
import SignUpEmail from '../screens/SignUpEmail'
import PhoneValidationScreen from '../screens/PhoneValidationScreen'
import Demo from '../screens/Demo'
import SplashScreen from '../screens/SplashScreen'
import VerifiedScreen from '../screens/VerifiedScreen'
import HomeScreen from '../screens/HomeScreen'
import OtpVerificationScreen from '../screens/OtpVerificationScreen'
import OnboardingScreen from '../screens/OnboardingScreen'


const Stack = createNativeStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="onboarding" 
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

export default StackNavigator

