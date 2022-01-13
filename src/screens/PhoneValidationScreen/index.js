import React, {useState, useRef} from 'react';
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

//phone number text input import
import PhoneInput from 'react-native-phone-number-input';
import NormalButton from '../../components/NormalButton';
import Header from '../../components/Header';

const PhoneValidationScreen = ({navigation}) => {
  const icon = <FontAwesome5 name={'comments'} />;
  const [isChecked, setIsChecked] = React.useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  //used for the phoneinput
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  const sendMessage = () => {
    let request = `https://http-api.d7networks.com/send?username=vjwm3928&password=zw2FILhO&dlr-method=POST&dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=smsinfo&content=Your verification message is 12345 &to=${formattedValue}`;
    fetch(request).then(res => {
      if (res.ok) {
        alert('otp have been sent ' + formattedValue);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          headerName="Phone Verification"
          headerStyle={styles.headerText}
        />
      </View>

      <View style={[styles.subContainer]}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.phoneIcon}
            source={require('../../res/images/phone.png')}
          />

          <View
            style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.headerText, {fontSize: 20}]}>
              Phone Number Verification
            </Text>

            <Text style={styles.description}>
              {' '}
              we will send you confirmation code on this number
            </Text>
          </View>
        </View>

        <View style={[styles.phoneNumberLayout]}>
          <PhoneInput
            defaultCode={'NG'}
            defaultValue={value}
            layout="first"
            ref={phoneInput}
            onChangeText={text => setValue(text)}
            onChangeFormattedText={text => setFormattedValue(text)}
            withShadow={true}
            placeholder={'081XXXXXX'}
            value={value}
            // STYLES
            containerStyle={styles.containerStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
          />

          <NormalButton
            style={styles.sendBtn}
            title={'verify'}
            _titleStyle={{color: 'white'}}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
              if (checkValid) {
                //send message using the d7 message api
                sendMessage();

                this;
              } else {
                // navigation.navigate('otpverification')
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PhoneValidationScreen;
