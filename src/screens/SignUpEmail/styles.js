import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'

const dimen = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: dimen.width,
        
    }, 
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginStart:20,
        marginTop:20,
        

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
