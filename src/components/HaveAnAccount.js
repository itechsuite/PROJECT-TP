import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../constants/Global'

const HaveAnAccount = ({ onPress , title , command}) => {
    return (
        <View style={styles.footer}>
        <View style={styles.loginAccount}>
            <Text style={styles.loginText}>{title}</Text>
            <Text onPress={onPress} style={styles.loginButton}> {command}</Text>
        </View>
    </View>
    )
}

export default HaveAnAccount

const styles = StyleSheet.create({
    footer:{
        padding:20,


        
    },
    loginAccount:{
        flexDirection:'row',
        bottom:1,
        alignItems:'center',
        justifyContent:'center',

    },
    loginText:{

    },
    loginButton:{
        color:Global.color.primary,
        fontWeight:'500',
        
    },

})
