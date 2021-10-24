import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { alignItems } from 'styled-system'
import Global from '../../constants/Global'

const dimen = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: dimen.width,
        
    }, 
    header:{
        

    }, 
    headerText:{
        fontSize:dimen.width /10,
        color:Global.color.black,
        fontWeight:'bold',
        marginStart:20,
  
    },
    backBtn:{
        color:Global.color.black,
    },
    loginForm:{
        margin:20,

    },
    formControl:{
        margin:20,

    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around', 
        marginTop:10, 
    }, 
    forgotPassword:{
        fontWeight:'bold', 
        color:Global.color.primary, 

        
    },

  
    

    

})
export default styles
