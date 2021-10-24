import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
const TrackOrderScreen = () => {
  return (
    <View style={styles.container}>
      <Header headerName="Order Tracking" />
    </View>
  );
};

export default TrackOrderScreen;
