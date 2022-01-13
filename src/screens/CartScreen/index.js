import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Global from '../../constants/Global';
import DummyDescription from '../../constants/Dummy/DummyDescription';
import NormalButton from '../../components/NormalButton';
import CommandBtn from '../../components/CommandBtn';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import NavigationBtn from '../../components/Buttons/NavigationBtn';
import NoItem from './NoItem';

const dummy =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

const dummyCartItem = [
  {
    key: '1',
    food_item: 'Spaghetti',
    amount: '4500',
    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    key: '2',
    food_item: 'Spaghetti',
    amount: '2000',

    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    key: '3',
    food_item: 'Spaghetti',
    amount: '100',

    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    amount: '840',
    key: '4',
    food_item: 'Spaghetti',
    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    key: '5',
    amount: '1900',
    food_item: 'Spaghetti',
    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    key: '3',
    food_item: 'Spaghetti',
    amount: '100',

    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    amount: '840',
    key: '4',
    food_item: 'Spaghetti',
    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
  {
    key: '5',
    amount: '1900',
    food_item: 'Spaghetti',
    image: require('../../res/images/foodItems/spaghetti.jpg'),
  },
];
const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerName="Cart" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.body}>
        {/* 
        View style={{flex: 0.7}}>
          <FlatList
            //   contentContainerStyle={styles.flatlist}
            data={dummyCartItem}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            //   scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CartItem
                  food_item={item.food_item}
                  amount={'#' + item.amount}
                />
              );
            }}
          />
              
        
        </View> */}
        <NoItem style={styles.NoItem} />

        {/* <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>
            {' '}
            Subtotal ({dummyCartItem.length}) items
          </Text>
          <Text style={styles.subtotal}> N{2000}</Text>
        </View> */}

        <NormalButton
          title={'Checkout'}
          style={styles.button}
          _titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default CartScreen;
