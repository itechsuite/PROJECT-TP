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

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="phonevalidation" 
        screenOptions={{
          
        }}

        
      >

        <Stack.Screen name="home" component={HomeScreen} />
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
