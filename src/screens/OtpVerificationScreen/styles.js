import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {alignContent, alignItems, borderColor} from 'styled-system';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');
const component_width = width * 0.8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  subContainer: {
    alignItems: 'center',
    flex: 1,
  },

  header: {flex: 0.2},
  headerText: {
    fontSize: width / 20,
    color: Global.color.black,
    fontWeight: 'bold',
    marginStart: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: width / 15,
  },

  backBtn: {
    color: Global.color.black,
  },

  phoneIcon: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
  description: {
    fontSize: width / 20,
    textAlign: 'center',
    color: Global.color.black,
  },
  containerStyle: {
    width: component_width,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  textInputStyle: {
    height: 50,
  },
  textContainerStyle: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  button: {
    width: component_width,
    height: 70,
  },
  phoneNumber: {
    fontWeight: 'bold',
    fontSize: width / 20,
    color: '#000',
  },
  changeNumber: {
    color: Global.color.primary,
    padding: 10,
  },
  underlineStyleBase: {
    borderColor: '#000',
    color: '#000',
  },
  underlineStyleHighLighted: {
    borderColor: Global.color.primary,
  },
  nocode: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resend: {
    textTransform: 'uppercase',
    color: Global.color.primary,
    fontWeight: 'bold',
  },
});

export default styles;
