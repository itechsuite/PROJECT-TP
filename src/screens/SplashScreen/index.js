import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'
import { SvgUri } from 'react-native-svg';

const {width, height} = Dimensions.get('screen')
const SplashScreen = () => {
    return (
        <View style= {styles.container}>

            <View style={styles.subContainer}> 
                <Image source = {require('../../res/images/logo.png')} style={styles.logo} />
                <Text style={styles.motto}> we do nothing but good food </Text>

                <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: Global.color.white,

    },
    subContainer:{
        alignItems:'center', 
        justifyContent:'center',
        flex:0.5, 

        
    },


    logo:{
        width:width * 0.7,
        height:100, 
        resizeMode:'contain', 

        
    }, 
    motto:{
        fontSize: width / 20
    },


})
