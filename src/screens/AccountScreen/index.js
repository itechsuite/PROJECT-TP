import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import FormInputText from '../../components/FormInputText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AccountScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        {/* <FontAwesome5  size={30} color={"#333"} name={"times"} /> */}

        {/* <Icon name="home" /> */}
        <Text style={styles.headerText}> Account</Text>
        <FontAwesome5 size={30} name={'check'} color={'#32BEA6'} />
      </View>

      <KeyboardAwareScrollView
        style={styles.subContainer}
        contentContainerStyle={{padding: 20}}>
        <View style={styles.profileInfo}>
          <View style={styles.imageHolder} />

          <Text style={styles.headerText}> John Doe</Text>
          <Text style={styles.emailholder}> johndoe@example.com</Text>
        </View>

        <View style={styles.formControl}>
          <FormInputText
            title={'First Name'}
            placeholder={'Enter First Name'}
            placeholderTextColor={'#3C3C43'}
          />
          <FormInputText
            title={'Last Name'}
            placeholder={'Enter Last Name '}
            placeholderTextColor={'#3C3C43'}
          />
          <FormInputText
            title={'Mobile Number'}
            placeholder={'+2348XXXXXXX'}
            placeholderTextColor={'#3C3C43'}
          />
        </View>

        <TouchableOpacity style={styles.changePassword}>
          <Text style={styles.changePasswordText}> Change Password</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default AccountScreen;
