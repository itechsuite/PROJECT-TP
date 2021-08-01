import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { fontWeight, margin } from 'styled-system'


const win = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
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
    PagerView:{
        height:win.height /2.5,
        
    }, 
    signUp:{
        resizeMode:'contain', 

        
    },
    signUpText:{
        textTransform:'uppercase',
        color:'#fff',
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
        color:'#DA4440'

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
        color:'#DA4440', 
        fontWeight:'500',

    },






})



export default styles

