import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';
import styles from './styles';
import FormInputText from '../../components/FormInputText';

//phone number text input import
import PhoneInput from 'react-native-phone-number-input';
import NormalButton from '../../components/NormalButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Header from '../../components/Header';

const PhoneValidationScreen = ({route, navigation}) => {
  //used for the phoneinput
  const {phoneNo, otherParam} = route.params;
  const phoneNumber = JSON.stringify(phoneNo);
  const OTP_TIME_LIMIT = 30;

  //setup variables for the timer
  const [resendButtonDisabledTime, setResetButtunDisabledTime] =
    useState(OTP_TIME_LIMIT);

  useEffect(() => {
    if (resendButtonDisabledTime > 0) {
      setTimeout(
        () => setResetButtunDisabledTime(resendButtonDisabledTime - 1),
        1000,
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          headerName="Otp Verification"
          headerStyle={styles.hea1derText} 
          onPress ={() => navigation.goBack()}
        />
      </View>

      <View style={[styles.subContainer]}>
        <Image
          style={styles.phoneIcon}
          source={require('../../res/images/phone.png')}
        />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.description}> Enter the code sent to </Text>
          <Text style={styles.phoneNumber}> {phoneNumber} </Text>
          <Text onPress={() => navigation.goBack()} style={styles.changeNumber}>
            {' '}
            change number
          </Text>
          <OTPInputView
            pinCount={4}
            style={{width: 200, height: 100}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />

          {resendButtonDisabledTime > 0 ? (
            <Text style={styles.otpTimer}>
              {' '}
              Resend OTP in {resendButtonDisabledTime}
            </Text>
          ) : (
            <View style={styles.nocode}>
              <Text>Didnt see the code? </Text>
              <Text style={styles.resend} onPress ={ () => setResetButtunDisabledTime(OTP_TIME_LIMIT)} > Resend</Text>
            </View>
          )}
        </View>

        <View style={{position: 'absolute', bottom: 10, alignItems: 'center'}}>
          <NormalButton
            title={'Verify'}
            style={styles.button}
            _titleStyle={{color: '#fff'}}
            onPress={() => {
              navigation.navigate('verifiedscreen');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PhoneValidationScreen;
