import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchBox: {
    color: '#000',
    backgroundColor: '#eee',
    width: width * 0.8,
    borderRadius: 20,
    padding: 10,
  },
  recentSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  clear: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default styles;
