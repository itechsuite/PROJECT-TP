import React, {useState, useRef} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';
import styles from './styles'
import FormInputText from '../../components/FormInputText';

//phone number text input import 
import PhoneInput from 'react-native-phone-number-input';
import CommandBtn from '../../components/CommandBtn';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const PhoneValidationScreen = ({route, navigation}) => {
const icon = <FontAwesome5 name={'comments'} />
const [isChecked, setIsChecked] = React.useState(false)
const scrollX = React.useRef(new Animated.Value(0)).current;

//used for the phoneinput
const [value, setValue] = useState("");
const [formattedValue, setFormattedValue] = useState("");
const [valid, setValid] = useState(false);
const [showMessage, setShowMessage] = useState(false);
const phoneInput = useRef(null);
const {phoneNo, otherParam} = route.params
const phoneNumber = JSON.stringify(phoneNo)


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5 onPress={() => navigation.goBack()} name={'chevron-left'} size={20} style={styles.backBtn} />
                <Text style={styles.headerText}>Otp Verification</Text>

            </View>

              

            <View style={[styles.subContainer,  ]} >

                <Image
                        style={styles.phoneIcon}
                        source={require('../../res/images/phone.png')}
                    />



                <View style={{flex:0.5, alignItems:'center', justifyContent:'center',}}>

                        {/* <Text style={[styles.boldText,]}> 
                            OTP Verification
                        </Text> */}

                        <Text style={styles.description}> Enter the code sent to  </Text>
                        <Text style={styles.phoneNumber}> {phoneNumber} </Text>
                        <Text style={styles.changeNumber}> change number</Text>

                     

                </View>


                <View style={{flex:1, alignItems:'center', }}>

                   
                <OTPInputView
                            
                          pinCount={4}
                          style={{width:200, height: 200, }}
                          autoFocusOnLoad
                          codeInputFieldStyle={styles.underlineStyleBase}
                          codeInputHighlightStyle={styles.underlineStyleHighLighted}
                         onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                          />

                    <CommandBtn
                        title={"Verify"}
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('verifiedscreen')                   
                        }}
                    />

                </View>
                    






            </View>
            

        </View>
    )
}

export default PhoneValidationScreen


