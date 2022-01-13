import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import SocialButton from '../../components/SocialButton';

//style import
import styles from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Login</Text>
      <Text style={{marginStart: 30, marginBottom: 10}}>
        Login with one of the following options
      </Text>

      <View style={styles.option}>
        <SocialButton
          title={'Continue with Facebook'}
          image={require('../../res/images/facebook.png')}
        />

        <SocialButton
          title={'Continue with Google'}
          image={require('../../res/images/google.png')}
        />
        <Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>
          {' '}
          -or-
        </Text>

        <SocialButton
          title={'Continue with Email'}
          onPress={() => navigation.navigate('loginemail')}
        />
      </View>

      {/* footer  */}
      <View style={styles.footer}>
        <View style={styles.loginAccount}>
          <Text style={styles.loginText}>Dont have an account?</Text>
          <Text
            onPress={() => navigation.navigate('signup')}
            style={styles.loginButton}>
            {' '}
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
