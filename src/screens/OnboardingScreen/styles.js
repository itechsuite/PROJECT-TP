import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { fontWeight, margin } from 'styled-system'
import Global from '../../constants/Global'

const {width, height} = Dimensions.get('screen')
const GLOBAL = require('../../constants/Global')


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width, 
        height:height,

    }, 

    logoSize:{
        width:150, 
        height:100,
                    
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
    },
    PagerView:{

    }, 
    signUp:{
        resizeMode:'contain', 

        
    },
    signUpText:{
        textTransform:'uppercase',
        color: GLOBAL.color.white,
        fontWeight:'bold',
        fontSize:20,

    }, 
    newAccount:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    loginBtn:{  
        marginStart:10,
        fontWeight:'bold',
        color:GLOBAL.color.primary

    },

    footer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,

    },

    tc:{
        flexDirection:'row',
    },

    footerHighlight:{
        color:Global.color.primary, 
        fontWeight:'500',

    },
    expandingDot:{
        flex:0.4, 
        marginTop:100,
        color:'red',
    },






})



export default styles

