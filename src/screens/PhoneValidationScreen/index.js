import React, {useState, useRef} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';
import styles from './styles'

//phone number text input import 
import PhoneInput from 'react-native-phone-number-input';
import CommandBtn from '../../components/CommandBtn';

const PhoneValidationScreen = ({navigation}) => {
const icon = <FontAwesome5 name={'comments'} />
const [isChecked, setIsChecked] = React.useState(false)
const scrollX = React.useRef(new Animated.Value(0)).current;

//used for the phoneinput
const [value, setValue] = useState("");
const [formattedValue, setFormattedValue] = useState("");
const [valid, setValid] = useState(false);
const [showMessage, setShowMessage] = useState(false);
const phoneInput = useRef(null);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5 onPress={() => navigation.goBack()} name={'chevron-left'} size={20} style={styles.backBtn} />
                <Text style={styles.headerText}>Phone verification</Text>

            </View>

              

            <View style={[styles.subContainer,  ]} >

                <Image
                        style={styles.phoneIcon}
                        source={require('../../res/images/phone.png')}
                    />



                <View style={{flex:0.5, alignItems:'center', justifyContent:'center',}}>

                        <Text style={[styles.headerText, {fontSize:20,}]}> 
                            Phone Number Verification
                        </Text>

                        <Text style={styles.description}> we will send you confirmation code on this number</Text>

                </View>


                <View style={{flex:1, alignItems:'center', }}>
                    <PhoneInput 
                        defaultCode={'NG'}
                        defaultValue={value}
                        
                        layout="first"
                        ref={phoneInput}
                        onChangeText= {(text) => setValue(text)}
                        onChangeFormattedText = {(text) => setFormattedValue(text)}
                        withShadow={true}
                        placeholder={"081XXXXXX"}
                        value={value}

                        // STYLES 
                        containerStyle={styles.containerStyle}
                        textContainerStyle={styles.textContainerStyle}
                        textInputStyle= {styles.textInputStyle}



                    />

                    <CommandBtn

                        title={"Get Otp"}
                        style={styles.button}
                        onPress={() => {
                            const checkValid = phoneInput.current?.isValidNumber(value)
                            setShowMessage(true)
                            setValid(checkValid ? checkValid :false)
                            if (checkValid ){
                                // alert('Phone number validated correctly')
                                navigation.navigate('otpverification', {
                                    phoneNo: formattedValue, 

                                })
                            }else {
                                // navigation.navigate('otpverification')

                            }
                        }}
                        
                    />
                </View>
                    






            </View>
            

        </View>
    )
}

export default PhoneValidationScreen


