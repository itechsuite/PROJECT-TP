import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeaturedItem from '../../components/FeaturedItem';
import FoodItem from '../../components/FoodItem';
import MenuCategory from '../../components/MenuCategory';
import OfficeOutlets from '../../components/OfficeOutlets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './styles';
import NavigationBtn from '../../components/Buttons/NavigationBtn';

const HomeScreen = ({navigation}) => {
  // dummy data

  const BottomTab = createBottomTabNavigator();

  const DummyData = [
    {
      key: '1',
      itemName: 'Rice and Chicken',
      amount: 'N500',
      image: require('../../res/images/favorite.png'),
      delivery: 'Free Delivery',
    },
    {
      key: '2',
      itemName: 'Spaghetti',
      amount: 'N500',
      image: require('../../res/images/favorite.png'),
      delivery: 400,
    },
    {
      key: '3',
      itemName: 'Sausage roll',
      amount: 'N500',
      image: require('../../res/images/favorite.png'),
      delivery: 'Free Delivery',
    },
    {
      key: '4',
      itemName: 'Beans',
      amount: 'N500',
      image: require('../../res/images/favorite.png'),
      delivery: 'Free Delivery',
    },
    {
      key: '5',
      itemName: 'Jollof Rica and Coke',
      amount: 'N500',
      image: require('../../res/images/favorite.png'),
      delivery: 'Free Delivery',
    },
  ];

  const DummyFoodItem = [
    {
      key: '1',
      itemName: 'Spaghetti',
      amount: 'N500',
      image: require('../../res/images/foodItems/spaghetti.jpg'),
      delivery: 'Free Delivery',
    },
    {
      key: '2',
      itemName: 'Coconut Rice',
      amount: 'N500',
      image: require('../../res/images/foodItems/coconutRice.jpg'),
      delivery: 400,
    },
    {
      key: '3',
      itemName: 'Sausage roll',
      amount: 'N500',
      image: require('../../res/images/foodItems/coconutRice.jpg'),
      delivery: 'Free Delivery',
    },
    {
      key: '4',
      itemName: 'Beans',
      amount: 'N500',
      image: require('../../res/images/foodItems/coconutRice.jpg'),

      delivery: 'Free Delivery',
    },
    {
      key: '5',
      itemName: 'Jollof Rica and Coke',
      amount: 'N500',
      image: require('../../res/images/foodItems/jollof.jpg'),
      delivery: 'Free Delivery',
    },
  ];

  const DummyMenuItem = [
    {
      key: '1',
      menuItem: 'Rice',
      menuIcon: require('../../res/images/menuIcons/Bread.png'),
    },
    {
      key: '2',
      menuItem: 'Desserts',
      menuIcon: require('../../res/images/menuIcons/Desserts.png'),
    },
    {
      key: '3',
      menuItem: 'Drinks',
      menuIcon: require('../../res/images/menuIcons/Drinks.png'),
    },
    {
      key: '4',
      menuItem: 'Fries',
      menuIcon: require('../../res/images/menuIcons/Fries.png'),
    },

    {
      key: '5',
      menuItem: 'Pastries',
      menuIcon: require('../../res/images/menuIcons/Proteins.png'),
    },
    {
      key: '6',
      menuItem: 'Rice',
      menuIcon: require('../../res/images/menuIcons/Rice.png'),
    },
    {
      key: '7',
      menuItem: 'Soups',
      menuIcon: require('../../res/images/menuIcons/Soups.png'),
    },
    {
      key: '8',
      menuItem: 'Stew',
      menuIcon: require('../../res/images/menuIcons/Stews.png'),
    },
  ];

  const DummyOfficeOutlet = [
    {
      key: '1',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '2',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '3',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '4',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '5',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '6',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
    {
      key: '7',
      office: 'Trans Amadi',
      officeAddress:
        '#18, Trans-Amadi Road, Rumuobiakani Port Harcourt Rivers State, Nigeria.',
      distance: '3.4km',
      officeImage: require('../../res/images/OfficeImages/office.jpg'),
    },
  ];

  // end of dummy content
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5
          name={'bars'}
          size={20}
          onPress={() => navigation.toggleDrawer()}
        />

        <Image
          source={require('../../res/images/logo.png')}
          style={styles.logo}
        />
        <FontAwesome5
          name={'shopping-cart'}
          size={20}
          onPress={() => navigation.navigate('cart')}
        />
      </View>

      <ScrollView style={styles.scrollview}>
        {/* featured component */}
        <View style={styles.featured}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredHeading}> Featured</Text>
            <Text style={styles.featuredAllOffers}>All offers</Text>
          </View>

          <FlatList
            data={DummyData}
            style={styles.flatlist}
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <FeaturedItem
                  itemName={item.itemName}
                  itemPrice={item.amount}
                  image={item.image}
                  deliveryFee={item.delivery}
                />
              );
            }}
          />
        </View>

        {/* Menu component */}

        <View style={styles.menuCategory}>
          <Text style={styles.featuredHeading}> Menu</Text>
          <FlatList
            data={DummyMenuItem}
            style={[styles.flatlist, {marginTop: 1}]}
            bounces={false}
            horizontal
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MenuCategory itemName={item.menuItem} image={item.menuIcon} />
              );
            }}
          />
        </View>

        {/* food items  */}

        <View style={styles.menuContainer}>
          <FlatList
            data={DummyFoodItem}
            style={styles.flatlist}
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <FoodItem
                  itemName={item.itemName}
                  itemPrice={item.amount}
                  image={item.image}
                  deliveryFee={item.delivery}
                />
              );
            }}
          />
        </View>

        {/* NEAREST LOCATION */}
        <View style={styles.officeLocation}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredHeading}> Our Outlets Near You</Text>
            <Text style={styles.featuredAllOffers}>Show all </Text>
          </View>
          <FlatList
            data={DummyOfficeOutlet}
            style={styles.flatlist}
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return (
                <OfficeOutlets
                  image={item.officeImage}
                  outletNa
                  me={item.office}
                  outletAddress={item.officeAddress}
                  outletDistance={item.distance}
                />
              );
            }}
          />
        </View>
      </ScrollView>
      {/* add bottom navigation here  */}
    </View>
  );
};

export default HomeScreen;
