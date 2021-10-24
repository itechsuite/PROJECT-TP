import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {style} from 'styled-system';

const {width, height} = Dimensions.get('screen');
const Header = props => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={props.onPress}
        name={'chevron-left'}
        size={20}
        style={styles.icon}
      />
      <Text style={[styles.headerText, props.headerStyle]}>
        {props.headerName}{' '}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: width / 13,
    color: '#000',
  },
  icon: {
    padding: 10,
  },
});
