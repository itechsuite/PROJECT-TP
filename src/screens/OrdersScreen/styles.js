import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: width,
  },
  nodata: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodataImage: {
    width: width * 0.4,
    height: width * 0.4,
  },
  button: {
    flex: 0.1,
    width: width * 0.8,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
    bottom: 20,
    padding: 20,
    backgroundColor: Global.color.primary,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },

  details: {
    marginHorizontal: 20,
    textAlign: 'center',
  },
});

export default styles;
