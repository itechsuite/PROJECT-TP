import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Avatar, Title, Paragraph, Card} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import NormalButton from '../components/NormalButton';
import CustomDrawerItem from '../components/CustomDrawerItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Global from '../constants/Global';

const {width, height} = Dimensions.get('screen');
const navigator_width = width - 100;

export function DrawerContent({navigation}, props) {
  return (
    <DrawerContentScrollView>
      <View>
        <View style={styles.heading}>
          <Ionicons
            name="arrow-back"
            size={20}
            onPress={() => navigation.toggleDrawer()}
            style={{marginHorizontal: 10}}
          />
          <Image
            source={require('../res/images/logo.png')}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.profile}>
          <Image
            source={require('../res/images/avatar.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}> Michael Jackson</Text>
          <Text style={styles.profileEmail}> email@email.com</Text>
        </View>

        <CustomDrawerItem
          title="Track Order"
          onPress={() => navigation.navigate('trackOrder')}
        />
        <CustomDrawerItem
          title="History"
          onPress={() => navigation.navigate('home')}
        />
        <CustomDrawerItem
          title="Promotions"
          onPress={() => navigation.navigate('home')}
        />
        <CustomDrawerItem
          title="Featured"
          onPress={() => navigation.navigate('about')}
        />
        <CustomDrawerItem
          title="Settings"
          onPress={() => navigation.navigate('about')}
        />

        <View
          style={{
            justifyContent: 'center',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <NormalButton
            style={styles.logout}
            title="Logout"
            _titleStyle={styles.logoutText}
            onPress={() => navigation.navigate('auth')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    margin: 10,
    height: height / 4,
    width: navigator_width,
    borderRadius: 10,
  },
  avatar: {width: 10, height: 10},
  card_row: {
    flexDirection: 'column',
  },
  cardItemsBio: {
    flexDirection: 'row',
    padding: 10,
  },
  otherlink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logout: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  profile: {
    alignItems: 'center',
  },
  profileImage: {
    width: navigator_width / 2,
    height: height / 6,
    alignSelf: 'center',
    borderRadius: 100,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileEmail: {
    backgroundColor: Global.color.primary,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'flex-start',
  },
});
