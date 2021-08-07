import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { alignContent, alignItems } from 'styled-system';
import Global from '../../constants/Global';


const dimen = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: dimen.width,
        
    }, 
    subContainer:{
        marginTop:20,
        alignItems:'center',
    },

    header:{
        flexDirection:'row',
        alignItems:'center',
        marginStart:20,
        marginTop:20,
        

    }, 
    headerText:{
        fontSize:dimen.width /20,
        color:Global.color.black,
        fontWeight:'bold',
        marginStart:20,
  
    },

    backBtn:{
        color:Global.color.black,
    },

    phoneIcon:{
        width:200, 
        height:200, 
    },
    description:{
        margin:20, 
        fontSize:dimen.width /20, 
        textAlign:'center', 
    },
    

    
   

})

export default styles
