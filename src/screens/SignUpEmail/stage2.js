import React, {useState, useRef} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CommandBtn from '../../components/CommandBtn';
import HaveAnAccount from '../../components/HaveAnAccount';
import styles from './styles';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import Animated, {stopClock} from 'react-native-reanimated';
import DemoPager from '../../components/DemoPager';
import PagerView from 'react-native-pager-view';
import Level1 from '../../components/form/SignUpForm/Level1';
import Level2 from '../../components/form/SignUpForm/Level2';
import {NativeBaseProvider, Button, Breadcrumb} from 'native-base';
import Global from '../../constants/Global';
import NormalButton from '../../components/NormalButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMyStringValue, saveData} from '../../constants/StorageHelper';
import Header from '../../components/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SignUpEmail = ({navigation}) => {
  const icon = <FontAwesome5 name={'comments'} />;
  const [isChecked, setIsChecked] = React.useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let [currentPosition, setCurrentPosition] = React.useState(0); // zero is the default value

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerName={'Sign up '} onPress={() => navigation.goBack()} />
      </View>

      <Level2 />
      {/* continue button  */}
      <View style={styles.button}>
        <NormalButton
          style={styles.buttonStyle}
          title={'Continue'}
          _titleStyle={{color: 'white'}}
          onPress={() => {
            navigation.navigate('phonevalidation');
          }}
        />
      </View>

      <HaveAnAccount
        title={'Have an Account?'}
        command={'Log in'}
        onPress={() => navigation.navigate('loginemail')}
      />
    </View>
  );
};

export default SignUpEmail;

// VIEW PAGER TO POPULATE DIFFERENT PAGES ON PRESSING NEXT BUTTON
//       <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//         <PagerView
//           initialPage={0}
//           style={{flex: 1}}
//           // scrollEnabled={false}
//           orientation="vertical"
//           showPageIndicator={true}
//           // scrollEnabled={false}
//           // onPageScrollStateChanged = {(e) => {
//           //     console.log(e.currentTarget);
//           // }}
//           onPageScroll={({nativeEvent}) => {
//             setCurrentPosition(nativeEvent.position);
//           }}
//           ref={pagerRef}>
//           <View key="1">
//             <Level1 />
//           </View>
//           <View key="2">
//             <Level2 />
//           </View>
//         </PagerView>
//       </KeyboardAvoidingView> */}
