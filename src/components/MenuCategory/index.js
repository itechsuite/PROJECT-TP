import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { borderRadius, justifyContent } from 'styled-system'
import Global from '../../constants/Global'

const MenuCategory = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}> 
                <Image source={props.image} style={styles.icon} />
            </View>
            <Text style={styles.itemName}>{props.itemName}</Text>
        </View>
    )
}

export default MenuCategory

const styles = StyleSheet.create({
    container:{
        margin:20,
        justifyContent:'center', 
        alignItems:'center', 


    }, 
    iconContainer:{
        width:50, 
        height:50, 
        // borderWidth:2, 
        backgroundColor:'#F6F6F6',
        // borderColor:Global.color.primary,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'

    },
    icon:{
        width:30, 
        height:30, 
        borderRadius:30,
        resizeMode:'contain',


    },
    itemName:{
        fontWeight:'bold', 
        
    }, 



})
