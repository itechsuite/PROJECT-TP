import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInputText from '../../FormInputText'

const Level1 = () => {
    return (
        <View style={styles.loginForm} collapsable={true}>

        <View style={styles.formControl}>
            <FormInputText
             title={"First Name"}
             placeholder={"Enter First Name"}
             placeholderTextColor={"#3C3C43"}
             
              />

            <FormInputText
             title={"Last Name"}
             placeholder={"Enter Last name"}
             placeholderTextColor={"#3C3C43"}
              />

            <FormInputText
             title={"Email"}
             placeholder={"Enter email address"}
             placeholderTextColor={"#3C3C43"}
              />

           

           
            
        </View>
    </View>

    )
}

export default Level1

const styles = StyleSheet.create({
    loginForm:{
        margin:20,
        flex:1

    },
    formControl:{
        margin:20,

    },

})
