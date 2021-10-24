import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Global from '../constants/Global';

const Menulist = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.menulist}> {props.title}</Text>
      {props.isunderline ? <View style={styles.line}></View> : null}
    </View>
  );
};

export default Menulist;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  menulist: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginEnd:5,
  },

  line: {
      width:3,
      backgroundColor:Global.color.black,
  },
});
