import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { alignContent, alignItems, borderColor } from 'styled-system';
import Global from '../../constants/Global';


const {width, height} = Dimensions.get('screen');
const component_width =   width * 0.8
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: width,
        
    }, 
    subContainer:{
        marginTop:20,
        alignItems:'center',
        flex:1,
    },

    header:{
        flexDirection:'row',
        alignItems:'center',
        marginStart:20,
        marginTop:20,
        

    }, 
    headerText:{
        fontSize:width /20,
        color:Global.color.black,
        fontWeight:'bold',
        marginStart:20,
  
    },
    boldText:{
        fontWeight:'bold', 
        color:'#000',
        fontSize:width /15,
    },  

    backBtn:{
        color:Global.color.black,
    },

    phoneIcon:{
        flex:0.5,
        width:200, 
        height:200, 
    },
    description:{
        margin:20, 
        fontSize:width /20, 
        textAlign:'center', 
        color:Global.color.black, 

    },
    containerStyle:{
        width: component_width, 
        height:50,
        backgroundColor:'#F6F6F6',
        borderRadius:8,
        marginTop:10,
         

    },
    textInputStyle:{
        height:50,

    }, 
    textContainerStyle:{
        backgroundColor:'#F6F6F6',
        borderRadius:8,

        

    },
    button:{
        width:component_width,
        height:70,
    }, 
    phoneNumber:{
        fontWeight:'bold', 
        fontSize:width /20,
        marginBottom:10,
        color:'#000',

    }, 
    changeNumber:{
        color:Global.color.primary
    }, 
    underlineStyleBase:{
        borderColor:'#000',
        color:'#000', 
        
    },
    underlineStyleHighLighted:{
        borderColor:Global.color.primary,

    }

    

    
   

})

export default styles
