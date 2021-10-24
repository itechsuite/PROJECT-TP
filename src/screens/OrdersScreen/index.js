import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationBtn from '../../components/Buttons/NavigationBtn';
import CommandBtn from '../../components/CommandBtn';
import Header from '../../components/Header';
import NormalButton from '../../components/NormalButton';
import Global from '../../constants/Global';
import styles from './styles';

const NoData = props => {
  return (
    <View style={styles.nodata}>
      <Image
        source={require('../../res/images/favorite.png')}
        style={[styles.nodataImage]}
      />
      <Text style={Global.styles.headerText}> No orders yet</Text>
      <Text style={styles.details}>
        {' '}
        Hit the orange button down below to create an order
      </Text>

      <NavigationBtn title={'check History'} />
    </View>
  );
};

const OrdersScreen = ({navigation}) => {
  return (
    <View style={Global.styles.container}>
      <Header
        headerName={'Orders'}
        headerStyle={{marginStart: 100}}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.subContainer}>
        <NoData />

        <View style={{flex: 0.3}}>
          <NormalButton
            title={'Go to Orders'}
            style={styles.button}
            _titleStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

export default OrdersScreen;
