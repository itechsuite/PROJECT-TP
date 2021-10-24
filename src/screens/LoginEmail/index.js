import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormInputText from '../../components/FormInputText';
import CheckBoxComponent from '../../components/CheckBoxComponent';
import CommandBtn from '../../components/CommandBtn';
import HaveAnAccount from '../../components/HaveAnAccount';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import axios
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../../navigation/DrawerNavigator';

const LoginEmail = ({navigation}) => {
  const icon = <FontAwesome5 name={'comments'} brand />;
  const [isChecked, setIsChecked] = React.useState(false);
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://192.168.82.109:5000/users/login';

  //implement the login
  const doLogin = () => {
    //validation
    if (email && password) {
      const req = {
        email: email,
        password: password,
      };
      axios.post(url, req).then(
        res => {
          let status = res.data.success;
          let token = res.data.token;
          if (status == '1') {
            // alert('user login successful');
            AsyncStorage.setItem('token', token).then(
              console.warn('token saves successfully'),
              setSuccess(1),
              navigation.navigate('indicator'),
            );
          } else {
            alert('username or password incorrect');
          }
          //   console.warn(status);
        },
        err => {
          console.warn(err);
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerName={'Login Email'} />
      </View>

      <View style={styles.loginForm}>
        <View style={styles.formControl}>
          <FormInputText
            title={'Email'}
            placeholder={'Enter email or username'}
            placeholderTextColor={'#3C3C43'}
            autoCompleteType={'email'}
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
          />

          <FormInputText
            title={'Password'}
            placeholder={'Enter password'}
            placeholderTextColor={'#3C3C43'}
            isSecureText={true}
            autoCompleteType={'password'}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
          />

          <View style={styles.footer}>
            <CheckBoxComponent
              title={'keep me signed in'}
              value={isChecked}
              onValueChange={state => {
                console.warn(isChecked);
                setIsChecked(state);
              }}
            />

            <Text
              onPress={() => alert('welcome')}
              style={styles.forgotPassword}>
              {' '}
              forgot password?
            </Text>
          </View>
        </View>
      </View>

      <CommandBtn
        title={'Next'}
        onPress={() => {
          doLogin();
        }}
      />

      <HaveAnAccount
        title="Dont have an account?"
        command={'Sign up'}
        onPress={() => navigation.navigate('signupemail')}
      />
    </View>
  );
};

export default LoginEmail;
