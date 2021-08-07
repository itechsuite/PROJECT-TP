import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInputText from '../../FormInputText'

const Level2 = () => {
    return (
        <View style={styles.loginForm}>

        <View style={styles.formControl}>
            <FormInputText
             title={"Password"}
             placeholder={"Enter Passowrd"}
             placeholderTextColor={"#3C3C43"}
             isSecureText={true}
             
              />

            <FormInputText
             title={"Confirm Password"}
             placeholder={"password"}
             placeholderTextColor={"#3C3C43"}
             isSecureText={true}
             
              />

            

           

           
            
        </View>
    </View>

    )
}

export default Level2

const styles = StyleSheet.create({
    loginForm:{
        margin:20,
        flex:1

    },
    formControl:{
        margin:20,

    },

})
