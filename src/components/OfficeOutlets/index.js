import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('screen')
const COMPONENT_WIDTH = width /2
const OfficeOutlets = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image source={props.image} style={styles.image} />
            </View>

            <Text style={styles.outletName}>{props.outletName}</Text>
            <Text style={styles.outletAddress}> {props.outletAddress}</Text>

            <View style={styles.distance}>
                <Text style={styles.outletDistance}> {props.outletDistance}</Text>
                <FontAwesome5 name={'comment'}  />
            </View>


           

        </View>
    )
}

export default OfficeOutlets

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
        height:300,
        resizeMode:'cover',
    }, 
    outletName:{
        marginTop:15, 
        fontWeight:'bold', 

        

    }, 
    distance:{
        flexDirection:'row', 

    }, 

    roundDot:{
        height:5,
        width:5, 
        marginStart:5,
        marginEnd:5,
        borderRadius:100, 
        backgroundColor:'red', 

    }, 
     


})
