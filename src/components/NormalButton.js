import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Global from '../constants/Global';

const {width, height} = Dimensions.get('screen');

const NormalButton = props => {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}>
        <Text style={[styles.title, props._titleStyle]}> {props.title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default NormalButton;

const styles = StyleSheet.create({
  button: {
    width: width * 0.6,
    backgroundColor: Global.color.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: width / 20,
  },
});
