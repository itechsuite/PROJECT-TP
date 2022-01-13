import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailText = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default DetailText;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#333e3e',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    fontWeight: '500',
    fontSize: 20,
  },
});
