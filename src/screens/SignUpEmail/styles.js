import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: width / 10,
    color: Global.color.black,
    fontWeight: 'bold',
    marginStart: 20,
  },
  backBtn: {
    color: Global.color.black,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  forgotPassword: {
    fontWeight: 'bold',
    color: Global.color.primary,
  },
  button: {
    alignItems: 'center',
  },
  buttonStyle: {
    width: width* 0.8,

  },
});
export default styles;
