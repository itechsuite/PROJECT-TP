import React, {useState, useRef, createRef} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import FormInputText from '../../FormInputText';
import NormalButton from '../../NormalButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Global from '../../../constants/Global';
import {
  getMyStringValue,
  saveData,
  validate,
} from '../../../constants/StorageHelper';
import {UserContext} from '../../../Provider/UserProvider';

const Level1 = props => {
  return (
    <UserContext.Consumer>
      {User => (
        <View>
          <View style={styles.formControl}>
            <FormInputText
              // ref={demoref}
              title={'First Name'}
              placeholder={'Enter First Name'}
              placeholderTextColor={'#3C3C43'}
              value={User.firstName}
              onChangeText={value => {
                User.setfirstname(value);
              }}
              // forwardedRef={firstNameRef}
              isSecureText={false}
            />

            <FormInputText
              // ref={demoref}
              title={'Last Name'}
              placeholder={'Enter Last Name'}
              placeholderTextColor={'#3C3C43'}
              value={User.lastName}
              onChangeText={value => {
                User.setlastname(value);
              }}
              isSecureText={false}
            />

            <FormInputText
              title={'Email'}
              placeholder={'Enter email address'}
              placeholderTextColor={'#3C3C43'}
              value={User.email}
              onChangeText={value => {
                User.setemail(value);
              }}
              keyboardType={'email-address'}
            />
          </View>
        </View>
      )}
    </UserContext.Consumer>
  );
};

export default Level1;

const styles = StyleSheet.create({
  loginForm: {
    margin: 20,
    flex: 1,
  },
  formControl: {
    margin: 20,
  },
  validname: {
    borderBottomColor: Global.color.success,
    borderBottomWidth: 1,
  },
  invalidName: {
    borderBottomColor: Global.color.primary,
    borderBottomWidth: 1,
  },
});
