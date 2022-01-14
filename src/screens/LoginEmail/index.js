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
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../../navigation/DrawerNavigator';
import NormalButton from '../../components/NormalButton';
import axios from '../../api/Authentication';

const LoginEmail = ({navigation}) => {
  const icon = <FontAwesome5 name={'comments'} brand />;
  const [isChecked, setIsChecked] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const doLogin = async () => {
    const payload = {email, password};
    console.log(payload);

    const onSuccess = ({data}) => {
      setToken(data.token);
    };

    const onFailure = error => {
      console.log(error && error.response);
    };

    await axios
      .post('customers/login', payload)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
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

      <NormalButton
        title="Login"
        _titleStyle={styles.loginBtnText}
        style={styles.loginBtn}
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
