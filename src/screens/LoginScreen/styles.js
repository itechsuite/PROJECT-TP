import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        margin:30,
        fontSize:30,
        fontWeight:'bold', 

    },
    option:{
        alignItems:'center',
        flex:1,

    },
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
        fontWeight:'bold',
        
    },



})

export default styles


