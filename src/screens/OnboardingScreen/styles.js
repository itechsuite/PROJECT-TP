import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { fontWeight, margin } from 'styled-system'
import Global from '../../constants/Global'

const win = Dimensions.get('window')
const GLOBAL = require('../../constants/Global')


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:win.width, 
        height:win.height,

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
        height:win.height /1,
        
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
        marginTop:100,
        color:'red',
    },






})



export default styles

