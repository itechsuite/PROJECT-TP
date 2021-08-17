import React from 'react'
import { Button, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
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
                <FontAwesome5 name={'map-marker-alt'}  />
            </View>

            <Pressable style={styles.button} >
                <Text style={styles.buttonText}> Get Direction</Text>

            </Pressable>

           

        </View>
    )
}

export default OfficeOutlets

const styles = StyleSheet.create({

    container:{
        width: COMPONENT_WIDTH, 
        // height:300,
        marginEnd:20,
    }, 
    button:{
        marginTop:20,
        backgroundColor:'red', 
        padding:10,
        alignItems:'center'


    }, 
    buttonText:{
        color:'#fff',
        textTransform:'uppercase',
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
        height:100,
        resizeMode:'cover',
    }, 
    outletName:{
        marginTop:15, 
        fontWeight:'bold', 
        textTransform:'uppercase',

        

    }, outletDistance:{
        fontWeight:'bold', 
        marginEnd:10,
    },
    distance:{
        flexDirection:'row', 
        alignItems:'center', 


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
