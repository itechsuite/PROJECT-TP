import React, {useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormInputText from '../../components/FormInputText';
import CheckBoxComponent from '../../components/CheckBoxComponent';
import CommandBtn from '../../components/CommandBtn';
import HaveAnAccount from '../../components/HaveAnAccount';


const LoginEmail = ({navigation}) => {
const icon = <FontAwesome5 name={'comments'}  brand/>
const [isChecked, setIsChecked] = React.useState(false)


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5 onPress={() => navigation.goBack()} name={'chevron-left'} size={20} style={styles.backBtn} />
                <Text style={styles.headerText}>Log in</Text>

            </View>

            <View style={styles.loginForm}>

                <View style={styles.formControl}>
                    <FormInputText
                     title={"Email"}
                     placeholder={"Enter email or username"}
                     placeholderTextColor={"#3C3C43"}
                      />

                    <FormInputText
                     title={"Password"}
                     placeholder={"Enter password"}
                     placeholderTextColor={"#3C3C43"}
                     isSecureText={true}
                      />

                    <View style={styles.footer}>
                        <CheckBoxComponent
                            title={"keep me signed in"}
                            value={isChecked}
                            onValueChange= {(state) => setIsChecked(state)}
                            

                        
                        />
                            
                        <Text onPress={() => alert('welcome')} style={styles.forgotPassword}> forgot password?</Text>

                    </View>

                   
                    
                </View>
            </View>

            <CommandBtn
                    title={"Next"}
                    
                   />
            
            <HaveAnAccount 
            title="Dont have an account?"
            command={"Sign up"}
                onPress={() => navigation.navigate('signupemail')} />
        </View>
    )
}

export default LoginEmail


