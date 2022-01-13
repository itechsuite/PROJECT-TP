import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {justifyContent} from 'styled-system';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
    flex: 0.1,
  },
  body: {
    flex: 1,
  },
  imageHolder: {
    alignItems: 'center',
    marginVertical: 20,
    width: width / 2,
    height: width / 2,
    alignSelf: 'center',
    padding: 10,
  },
  flatlist: {marginBottom: 1000},

  button: {
    flex: 0.2,
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

  backBtn: {
    padding: 10,
  },
  subtotal: {fontWeight: 'bold'},
  subtotalText: {},
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  NoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
});

export default styles;
