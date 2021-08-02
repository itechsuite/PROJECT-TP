import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//component import 
import SocialButton from '../../components/SocialButton'

const SignUpScreen = () => {
    return (
        <View>
            <Text>Sign Up Screen</Text>
            <SocialButton
                title={"google"}
                image={require('../../res/images/svg/facebook.svg')}
                            />
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
