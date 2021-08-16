import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'

const {width, height} = Dimensions.get('screen')
const PAGE_WIDTH = width -30
const styles = StyleSheet.create({
    container:{
        width:width, 
        height:height, 
        flex:1, 
        alignItems:'center',
        paddingBottom:20,


    }, 
    header:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        width:PAGE_WIDTH,
        marginTop:10,
        // backgroundColor:'blue'
    }, 
    logo:{
        resizeMode:'contain', 
        width:width /2, 
        height:50,


    },
    featured:{
        width:PAGE_WIDTH,
        marginStart:20, 

        
        
    },
    featuredHeader:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginTop:10,
        marginEnd:10, 
        
       
    }, 
    featuredHeading:{
        fontWeight:'bold', 
        fontSize: width / 18, 


    }, 
    featuredAllOffers:{
        color: Global.color.primary

    }, 

    menu:{

    },
    category:{

    },
    outlets:{

    },
    navigationMenu:{

    },
    scrollview:{
        flex:1, 
    }, 

    // main components
    flatlist:{
        marginTop:20, 
    }, 

    menuCategory:{
        marginTop:20, 
        marginStart:20,

    }, 
    menuContainer:{
        marginStart:20, 
        marginTop:20, 
        

    }, 
    officeLocation:{
        marginTop:20, 
        marginStart:20,

    }, 




})


export default styles

