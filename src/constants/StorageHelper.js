import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const getMyStringValue = async key => {
  try {
    let data = await AsyncStorage.getItem(key);
    console.log(data);
    return data;
  } catch (e) {
    // read error
  }

  console.log('Done.');
};

const saveData = async (title, value) => {
  try {
    await AsyncStorage.setItem(title, value);
  } catch (error) {
    console.log(error);
  }
};

const validate = (value, type) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  switch (type) {
    case 'firstname':
      if (value.length >= 3) {
        console.log('first name field is okay');
        saveData('firstName', value);
        // setFirstnameValid(true);
        return true;
      } else if (!value) {
        // setLastNameValid(false);
        console.log('validation is null');
        return false;
      } else {
        console.log('validation is false');
        return false;
      }
      break;
    case 'lastname':
      if (value.length >= 3) {
        console.log('validation is okay');
        saveData('lastName', value);
        // setLastNameValid(true);
        return true;
      } else if (!value) {
        // setLastNameValid(false);
        console.log('validation is null');
        return false;
      } else {
        // setLastNameValid(false);
        console.log('validation is false');
        return false;
      }

      break;
    case 'email':
      if (reg.test(value) === true) {
        console.log('email is valid');
        // setEmailValid(true);
        saveData('email', value);

        return true;
      } else {
        console.log('email validation have failed');
        // setEmailValid(false);
        return false;
      }
  }
};

export {getMyStringValue, saveData, validate};
