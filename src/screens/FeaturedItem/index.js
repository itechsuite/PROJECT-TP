import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import CartButton from '../../components/Buttons/cartButton';
import cartButton from '../../components/Buttons/cartButton';
import DetailText from '../../components/DetailText';
import Header from '../../components/Header';
import styles from './styles';

const FeaturedItem = ({props}) => {
  return (
    <View style={styles.container}>
      <Header headerName="Featured Item" />
      <View style={styles.centerItem}>
        <Image
          style={styles.foodImage}
          source={require('../../res/images/foodItems/spaghetti.jpg')}
        />

        <Text> item name</Text>
      </View>

      <View>
        <DetailText
          text={
            "You'll recieve a random gift if you select this offer, just make yout's have the orders delivered to you at your doorstep in light speed."
          }
        />

        <CartButton />
      </View>
    </View>
  );
};

export default FeaturedItem;
