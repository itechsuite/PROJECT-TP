import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'


const win = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        width:win.width, 
        height:win.height,
        backgroundColor:'#fff',

    }, 

    logoSize:{
        width:200, 
        height:100,
                    
    },
    header:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },


})



export default styles

