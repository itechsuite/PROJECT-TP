import React from 'react'
import { View, Text,StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('screen')
const styles = StyleSheet.create({ 
    subContainer:{
        flex:1, 
        width:width, 

    }, 
    nodata:{
        flex:0.8,
        alignItems:'center',
        justifyContent:'center',


    }, 
    nodataImage:{
        width: width * 0.4, 
        height: width * 0.4, 

    }, 
    button:{
        flex:0.2,

    }, 
    buttonText:{
        color:'#fff',
        
    }, 


})

export default styles
