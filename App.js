// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens 
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Page from './src/demo/Page';

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
      <Stack.Navigator initialRouteName="onboarding" 
        screenOptions={{
          
        }}

        
      >

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="onboarding" 
         options={{
           headerShown:false
         }}
         component ={OnboardingScreen} />
         <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
