import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'


const {width, height} =Dimensions.get('screen')
const PAGE_WIDTH = width * 0.8
const styles = StyleSheet.create({

    container:{
        flex:1, 
        width:width,
        height:height, 

        
        
        
    },
    header:{
        flex:0.1,
        padding:20, 
        flexDirection:'row', 
        width:width,
        justifyContent:'space-between', 
        alignItems:'center'



    }, 
    profileInfo:{
        flex:0.3,
        alignItems:'center', 
        
    },
    headerText:{
        fontSize:width /20, 
        fontWeight:'bold',
        
    },

    cancel:{

    },
    submit:{

    },


    imageHolder:{
        justifyContent:'center', 
        alignItems:'center',
        width:width /3 , 
        backgroundColor:'#000', 
        height:width /3,
        borderRadius:100,



    }, 

    imageIcon:{
        backgroundColor:'green', 
        padding:10,

    }, 
    selectImage:{
        
    },
    emailholder:{

    },

    firstName:{

    }, 
    lastName:{

    },
    mobileNumber:{

    }, 
    changePassword:{

    },

})
export default styles
