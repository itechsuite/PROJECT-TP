import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInputText from '../../FormInputText';
import {UserContext} from '../../../Provider/UserProvider';
import {saveData, validate} from '../../../constants/StorageHelper';

const Level2 = () => {
  return (
    <UserContext.Consumer>
      {User => (
        <View style={styles.loginForm}>
          <View style={styles.formControl}>
            <FormInputText
              title={'Password'}
              placeholder={'Enter Passowrd'}
              placeholderTextColor={'#3C3C43'}
              isSecureText={true}
              value={User.password}
              onChangeText={value => {
                User.setpassword(value);
              }}
            />

            <FormInputText
              title={'Confirm Password'}
              placeholder={'password'}
              placeholderTextColor={'#3C3C43'}
              isSecureText={true}
              value={User.confirmpassword}
              onChangeText={value => {
                User.setconfirmpassword(value);
              }}
            />
          </View>
        </View>
      )}
    </UserContext.Consumer>
  );
};

export default Level2;

const styles = StyleSheet.create({
  loginForm: {
    margin: 20,
    flex: 1,
  },
  formControl: {
    margin: 20,
  },
});
