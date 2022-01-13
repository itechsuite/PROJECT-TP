import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpEmail from '../screens/SignUpEmail';
import stage2 from '../screens/SignUpEmail/stage2';
import PhoneValidationScreen from '../screens/PhoneValidationScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import LoginEmail from '../screens/LoginEmail';
import VerifiedScreen from '../screens/VerifiedScreen';
import ActivityIndicatorScreen from '../screens/ActivityIndicator';
import {UserProvider} from '../Provider/UserProvider';

const Stack = createNativeStackNavigator();

const FirstTimeStack = () => {
  return (
    <UserProvider>
      <Stack.Navigator initialRouteName={'onboarding'}>
        <Stack.Screen
          name="onboarding"
          options={{headerShown: false}}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="loginemail"
          component={LoginEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signupemail"
          component={SignUpEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signupemail2"
          component={stage2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="phonevalidation"
          component={PhoneValidationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otpverification"
          component={OtpVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verifiedscreen"
          component={VerifiedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="indicator"
          component={ActivityIndicatorScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default FirstTimeStack;
