import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Global from '../../constants/Global';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {set} from 'react-native-reanimated';
import {Searchbar} from 'react-native-paper';
import SearchHistory from '../../components/SearchHistory';

const SearchScreen = () => {
  const [user, setUsers] = useState({});
  const [name, setName] = useState('');

  const dummyHistory = [
    {
      key: '1',
      query: 'Oha soup',
    },
    {
      key: '2',
      query: 'Bitter leaf soup',
    },
    {
      key: '3',
      query: 'Moi moi',
    },
    {
      key: '4',
      query: 'Fried Chicken',
    },
    {
      key: '5',
      query: 'Eguisi',
    },
  ];

  useEffect(async () => {
    console.log('componentdidmount');
    // fetchData
    await fetch('http://192.168.26.109:5000/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        // setName(json.data.firstName)
        console.log(json);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={Global.styles.container}>
      {/* <Text>Search SCreen</Text> */}
      <View style={styles.header}>
        <FontAwesome5 name="chevron-left" size={20} style={{flex: 0.1}} />

        {/* <Searchbar placeholder={'search food item'} clearIcon={false} /> */}

        <TextInput
          placeholder={'search items '}
          placeholderTextColor={'#000'}
          style={[styles.searchBox, {flex: 0.9}]}
        />
      </View>

      <View>
        <View style={styles.recentSearch}>
          <Text style={{textTransform: 'uppercase', marginStart: 20}}>
            recent search
          </Text>
          <Text style={styles.clear}>Clear All </Text>
        </View>

        <FlatList
          data={dummyHistory}
          horizontal
          renderItem={({item}) => {
            return (
              <View>
                <SearchHistory query={item.query} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
