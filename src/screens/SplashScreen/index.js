import React, {useCallback, useState, useRef, useReducer} from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Global from '../../constants/Global'
import { SvgUri } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../../navigation/DrawerNavigator';
import FirstTimeStack from '../../navigation/FirstTimeStack';
import AsyncStorage from '@react-native-async-storage/async-storage'


const {width, height} = Dimensions.get('screen')
const SplashScreen = ({navigation}) => {



    
    return (
        <View style= {styles.container}>

            <View style={styles.subContainer}> 

            <LottieView  
                source={require('../../res/assets/lottie/logo.json')}
                autoPlay
                loop={false}

                style={styles.logo}
            />


            {
                
            }
            <Text style={styles.motto}> ...we do nothing but good food </Text>

                              
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
        flex:1, 

        
    },


    logo:{
        width:width * 0.9,
        
    }, 
    motto:{
        fontSize: width / 30,
        padding:10, 
    },


})
