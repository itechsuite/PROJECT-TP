import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'


const {width, height} =Dimensions.get('screen')
const PAGE_WIDTH = width * 0.8
const styles = StyleSheet.create({

    container:{
        flex:1, 
        width:width,
        height:height, 

    },

    subContainer:{
        flex:1,
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
    formControl:{
        marginStart:10,
        marginEnd:10, 

     
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
        marginTop:10, 
        padding:10, 
        paddingStart:20,
        paddingEnd:20,
        backgroundColor: Global.color.primary, 
        borderRadius:20,
        color:'#fff',

    },

    firstName:{

    }, 
    lastName:{

    },
    mobileNumber:{

    }, 
    changePassword:{
        width:width / 1.5, 
        marginTop:20, 
        alignSelf:'center', 
        padding:20,
        borderColor:Global.color.primary, 
        borderWidth:1,
        alignItems:'center', 
        borderRadius:4, 
        

    },
    changePasswordText:{
        color: Global.color.primary,

    }, 

})
export default styles
