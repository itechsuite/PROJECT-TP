import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';
import FirstTimeStack from '../navigation/FirstTimeStack';

const ActivityIndicatorScreen = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    // try {
    //   AsyncStorage.getItem('token').then(res => {
    //     if (res) {
    //       setIsSignedIn(true);
    //       navigation.navigate('app');
    //     } else {
    //       setIsSignedIn(true);
    //       navigation.navigate('auth');
    //     }
    //   });
    // } catch (error) {
    //   setIsSignedIn(false);
    //   navigation.navigate('auth');
    // }

    navigation.replace('app');
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

export default ActivityIndicatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
