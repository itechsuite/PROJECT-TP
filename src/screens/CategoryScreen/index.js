import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Category from '../../components/Category';
import DummyDescription from '../../constants/Dummy/DummyDescription';

const dummyCategory = [
  {
    key: '1',
    name: 'Pastries',
    image: 'http://thepromisenig.com/assets/pizza.jpg',
  },
  {
    key: '2',
    name: 'Soup',
    image: 'http://thepromisenig.com/assets/pizza.jpg',
  },
  {
    key: '3',
    name: 'Stew',
    image: 'http://thepromisenig.com/assets/pizza.jpg',
  },
  {
    key: '4',
    name: 'Rice',
    image: 'http://thepromisenig.com/assets/pizza.jpg',
  },
];
const CategoryScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>Top Categories </Text>
      <FlatList
        data={DummyDescription}
        style={[styles.flatlist, {marginTop: 1}]}
        bounces={false}
        horizontal
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Category
              onPress={() => {}}
              itemName={item.menuItem}
              image={item.menuIcon}
            />
          );
        }}
      />
      {/* <Category /> */}
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
