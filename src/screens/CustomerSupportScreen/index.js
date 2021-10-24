import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Title, Searchbar, Card} from 'react-native-paper';
import Svg, {SvgUri} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SvgComponent from '../../components/SvgComponent';
import Global from '../../constants/Global';
// import styles from './styles';

const {width, height} = Dimensions.get('screen');

const CustomerSupportScreen = ({navigation}) => {
  // dummy data
  const issues = [
    {
      key: '1',
      title: 'Billing and Payment',
      image: 'https://svgshare.com/i/aD4.svg',
    },
    {
      key: '2',
      title: 'Delivery issues',
      image: 'https://svgshare.com/i/aD4.svg',
    },
    {
      key: '3',
      title: 'Login issues',
      image: 'https://svgshare.com/i/aD4.svg',
    },
  ];
  // end of dummy content
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5
          name="angle-left"
          size={20}
          onPress={() => navigation.goBack()}
        />

        <Title style={styles.headerTitle}> What can we help you with?</Title>
        <Searchbar placeholder={'search topic'} style={styles.Searchbar} />
      </View>

      <View style={styles.body}>
        <View style={styles.cardHolder}>
          <FlatList
            data={issues}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Card style={styles.card}>
                  <Text style={[styles.cardTitle, {}]}> {item.title}</Text>
                </Card>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomerSupportScreen;
const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 20,
  },
  headerTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: Dimensions.get('screen').width / 15,
  },
  Searchbar: {
    marginTop: 20,
  },
  card: {
    width: width / 3 - 10,
    height: 100,
    marginHorizontal: 5,
    backgroundColor: Global.color.navyBlue,
    position: 'relative',
  },
  body: {
    margin: 18,
  },
  cardHolder: {
    flexDirection: 'row',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 1,
    left: 1,
    right: 1,
    alignSelf: 'center',
  },
});
