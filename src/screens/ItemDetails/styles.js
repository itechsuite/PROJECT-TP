import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
  },
  subContainer: {
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
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 0,
  },
  rating: {
    backgroundColor: '#ED8A19',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    end: 20,
    zIndex: 100,
    fontWeight: 'bold',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: width / 10,
    alignSelf: 'center',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: width / 20,
    alignSelf: 'center',
    color: Global.color.primary,
    marginVertical: 10,
  },
  description: {
    marginHorizontal: 20,
    fontSize: width / 20,
    fontWeight: 'bold',
  },
  descriptions: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  button: {
    width: width * 0.8,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
    bottom: 20,
    padding: 20,
    backgroundColor: Global.color.yellow,
  },
  buttonText: {
    fontWeight: 'bold',
  },

  backBtn: {
    padding: 10,
  },

  favorite: {
    padding: 10,
  },
});

export default styles;
