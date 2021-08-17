import AnimatedLottieView from 'lottie-react-native'
import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'




const VerifiedScreen = ({navigation}) => {
    useEffect( () =>{
        setTimeout(() => {
            navigation.navigate('home')
        }, 2000 )
    })
    return (
        <View style={styles.container}>

            <AnimatedLottieView
                 source={require('../../res/assets/lottie/success.json')}
                 style={styles.lottieVerify}
                 loop
                 autoPlay 
            />
            <Text  style={styles.text}> Success</Text>

        </View>
    )
}

export default VerifiedScreen


