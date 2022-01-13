import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('screen');

const Category = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <FastImage
          style={styles.Image}
          source={{
            uri: 'http://thepromisenig.com/assets/pizza.jpg',
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.itemName}>Category</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  Image: {
    width: width / 3,
    height: width / 3,
    backgroundColor: '#000',
  },
  container: {
    marginStart: 10,
    marginTop: 10,
  },
  itemName: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    color: '#fff',
  },
});
