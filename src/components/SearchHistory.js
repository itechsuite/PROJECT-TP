import React from 'react';
import {ShadowPropTypesIOS, StyleSheet, Text, View} from 'react-native';

const SearchHistory = props => {
  return (
    <View style={styles.container}>
      <Text>{props.query}</Text>
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  container: {borderColor: 'red', borderWidth: 1},
});
