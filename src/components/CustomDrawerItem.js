import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Title, TouchableRipple} from 'react-native-paper';
import Global from '../constants/Global';

const {width, height} = Dimensions.get('screen');

const CustomDrawerItem = (props, {atem}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Title style={styles.title}>{props.title}</Title>
      <FontAwesome size={20} style={styles.icon} name={'chevron-right'} />
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Global.color.light_grey,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 20,
  },

  title: {fontSize: width / 20},
  icon: {
    marginEnd: 20,
  },
});
