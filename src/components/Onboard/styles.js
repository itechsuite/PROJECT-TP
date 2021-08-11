import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
const {width , height} = Dimensions.get('screen')


const styles = StyleSheet.create({
    container:{
        padding:20, 
        alignItems:'center',
        width:width,
        height: height * 0.6, 
        
        
    },
    image:{
        width:150,
        height:160, 
        resizeMode:'cover'
    },
    title:{
        fontWeight:'bold',
        fontSize:width * 0.1,
        marginTop:20, 
        marginBottom:10,
        color:'#3C3C43'
    },

    description:{
        margin:20,
        fontSize:15, 

    },




})


export default styles

