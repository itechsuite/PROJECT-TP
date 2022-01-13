import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
  },

  header: {
    width: width,
    flex: 0.1,
    backgroundColor: Global.color.primary,
    justifyContent: 'center',
  },
  flatlistContainer: {
    flex: 0.9,
    padding: 10,
  },
  flatlist: {},
  centerItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height / 3,
  },

  foodImage: {
    resizeMode: 'center',
    width: width / 2,
    height: height / 4,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default styles;
