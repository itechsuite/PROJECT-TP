import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  LoginButton,
  AuthenticationToken,
  LoginManager,
  AccessToken,
} from 'react-native-fbsdk-next';

//style import
import styles from './styles';

//component import
import SocialButton from '../../components/SocialButton';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Sign Up</Text>

      <View style={styles.option}>
        <Text>Sign up with one ot the following options</Text>

        <SocialButton
          title={'Continue with Facebook'}
          image={require('../../res/images/facebook.png')}
          onPress={() => {
            LoginManager.logInWithPermissions([
              'public_profile',
              'email',
              'user_friends',
            ]).then(result => {
              if (result.isCancelled) {
                console.log('Login is cancelled');
              } else {
                console.log('login is successful');
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log('token is ' + data.accessToken.toString());
                });
              }
            });
          }}
        />

        <SocialButton
          title={'Continue with Google'}
          image={require('../../res/images/google.png')}
        />
        <Text> or</Text>

        <SocialButton
          title={'Continue with Email'}
          onPress={() => navigation.navigate('signupemail')}
        />
        <SocialButton title={'Continue with Guest'} />
      </View>

      {/* footer  */}
      <View style={styles.footer}>
        <View style={styles.loginAccount}>
          <Text style={styles.loginText}>Have an account?</Text>
          <Text
            onPress={() => navigation.navigate('login')}
            style={styles.loginButton}>
            {' '}
            Log in
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
