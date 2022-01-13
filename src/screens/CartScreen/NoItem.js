import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {padding} from 'styled-system';

const {height, width} = Dimensions.get('screen');

const NoItem = props => {
  return (
    <View style={props.style}>
      <Image
        source={require('../../res/images/cart_empty.png')}
        style={styles.image}
      />
      <Text style={styles.notice}>No item in the cart</Text>
      <Text style={styles.detail}>
        Any item you add from the store will show here
      </Text>

      <View>
        <TouchableOpacity>
          <Text style={styles.continue}> Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoItem;

const styles = StyleSheet.create({
  notice: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
  detail: {
    alignSelf: 'center',
    marginTop: 10,
  },
  image: {width: width / 3, height: 100, alignSelf: 'center'},
  continue: {
    backgroundColor: '#000',
    borderRadius: 100,
    color: '#fff',
    width: width / 2,
    textAlign: 'center',
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});
