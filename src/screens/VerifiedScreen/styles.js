import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const {width, height} = Dimensions.get('screen')
const styles = StyleSheet.create({

    container:{
        flex:1, 
        width:width,
        height:height, 
        alignItems:'center', 
        justifyContent:'center', 


    }, 
    lottieVerify:{
        marginTop:-50,
        width:200,
        height:200, 

    },
    text:{
        fontSize: width /15, 
        fontWeight:'200',

    }

})

export default styles

