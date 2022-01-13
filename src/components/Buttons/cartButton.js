import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Global from '../../constants/Global';
import styled from 'styled-components';

const CartButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}> CartButton</Text>

        <View>
          <Text style={styles.text}> Add to cart</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global.color.primary,
    margin: 10,
    paddingHorizontal: 15,
    padding: 10,
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: '#eee',
    fontWeight: 'bold',
  },
});
