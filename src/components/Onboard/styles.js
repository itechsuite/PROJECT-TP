import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        
    },
    image:{
        width:150,
        height:160, 
        resizeMode:'contain'
    },
    title:{
        fontWeight:'bold',
        fontSize:22,
        marginTop:20, 
        marginBottom:20,
        color:'#3C3C43'
    },

    description:{
        margin:20,
        fontSize:15, 

    },




})


export default styles

