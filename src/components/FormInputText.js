import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import { width } from 'styled-system'
import Global from '../constants/Global'

const FormInputText = ({ title, isSecureText, value,  placeholder, onChangeText, placeholderTextColor, width }) => {
    return (
        <View style={{marginTop:30,}}>
            <Text style={[styles.title, {width:width}] }> {title}</Text>
             <TextInput onChangeText={onChangeText} value={value}  style={styles.formControlInputText} placeholder={placeholder} placeholderTextColor={placeholderTextColor}  secureTextEntry={isSecureText}/>
        </View>
    )
}

export default FormInputText

const styles = StyleSheet.create({
    formControlInputText:{
        marginTop:10,
    
        padding:16,
        backgroundColor:Global.color.textInput,
        borderRadius:9,
        color:"#000", 

    },
    title:{
        fontWeight:'500',
        fontSize:Dimensions.get('window').width /23

    },
})
