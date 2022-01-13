// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import SplashScreen from './src/screens/SplashScreen';

import StackRoute from './src/routes/StackRoute';
import {UserProvider} from './src/Provider/UserProvider';
const Stack = createNativeStackNavigator();

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log('App is loading  ', isloading);
    }, 5000);
  }, []);

  if (!isloading) {
    return <StackRoute />;
  }

  return <SplashScreen />;
};

export default App;
