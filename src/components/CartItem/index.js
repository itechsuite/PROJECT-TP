import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {style} from 'styled-system';
import Global from '../../constants/Global';

const {width, height} = Dimensions.get('screen');

const imageSize = width / 6;
const iconSize = 10;

const CartItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={require('../../res/images/foodItems/spaghetti.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.cartItem}>{props.food_item}</Text>
        <View style={styles.amountsection}>
          <Text style={styles.amount}> {props.amount}</Text>
          <View style={styles.quantityholder}>
            <FontAwesome5 name="minus" style={styles.minus} size={iconSize} />
            <Text style={styles.quantityText}> 3</Text>
            <FontAwesome5 name="plus" style={styles.plus} size={iconSize} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 2,
    shadowRadius: 100,

    width: width * 0.8,
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    alignItems: 'center',
    padding: 10,
  },
  subContainer: {
    width: '80%',
  },

  imageHolder: {
    width: imageSize,
    height: imageSize,
    borderRadius: 40,
    elevation: 10,

    backgroundColor: 'green',
  },
  quantityholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Global.color.primary,
    borderRadius: 10,
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  cartItem: {
    marginStart: 10,
    fontSize: imageSize / 3,
    fontWeight: 'bold',
  },
  amountsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginEnd: 10,
    marginBottom: 10,
  },

  amount: {
    marginStart: 10,
  },
  plus: {
    color: '#fff',
  },
  minus: {
    color: '#fff',
  },
  quantityText: {
    color: '#fff',
    paddingHorizontal: 8,
  },
});
