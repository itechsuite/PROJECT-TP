// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
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
      <Stack.Navigator initialRouteName="onboarding">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="onboarding" component ={OnboardingScreen} />
        <Stack.Screen name="pages" component={Page} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
