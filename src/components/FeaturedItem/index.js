import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { borderRadius } from 'styled-system'
import Global from '../../constants/Global'

const {width, height} = Dimensions.get('screen')
const COMPONENT_WIDTH = width /1.5
const FeaturedItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image source={props.image} style={styles.image} />

            </View>
            <Text style={styles.itemName}>{props.itemName}</Text>

            <View style={{flexDirection:'row', alignItems:'center' }}>

                <Text style={styles.itemPrice}> {props.itemPrice} </Text>
                <View style={styles.roundDot}></View>
              <Text style={styles.deliveryFee}> {props.deliveryFee}</Text>

            </View>

        </View>
    )
}

export default FeaturedItem

const styles = StyleSheet.create({

    container:{
        width: COMPONENT_WIDTH, 
        height:200,
        marginEnd:20,
    }, 
    imageContainer:{
        width:COMPONENT_WIDTH,
        height:150,
        backgroundColor:Global.color.grey,
        borderRadius:10,       
    }, 
    
    image:{
        padding:70,
        width:COMPONENT_WIDTH,
        height:150,
        resizeMode:'cover',
    }, 
    itemName:{
        marginTop:15, 
        fontWeight:'bold', 

    }, 
    itemPrice:{
        color: '#3C3C43'

    } , 
    roundDot:{
        height:5,
        width:5, 
        marginStart:5,
        marginEnd:5,
        borderRadius:100, 
        backgroundColor:'red', 

    }, 
    deliveryFee:{
        color:'#000', 
    }, 


})
