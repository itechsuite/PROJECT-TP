import { NativeBaseProvider, Button} from 'native-base'
import React from 'react'
import {  FlatList, Image, StyleSheet, Text, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import Onboard from '../../components/Onboard'
import Page from '../../demo/Page'
import styles from './styles'

const OnboardingScreen = () => {
    return (
        <View style ={styles.container}>
            <View style={styles.header}> 
                {/* the promise logo */} 
                <Image 
                source={require('../../res/images/logo.png')}
                style ={styles.logoSize}
                resizeMode={'contain'}
                />
            </View>

                <PagerView 
                style={styles.PagerView}
                initialPage={0}
                >
                   

                    <View key="1">
                        <Onboard 
                            image={require('../../res/images/burger.png')}
                            title="Tasty Meals"
                            description="Our Delivery system has been optimized to
                             service multiple orders in a very short time"
                        />

                    </View>

                    <View key="2">
                        <Onboard 
                            image={require('../../res/images/payment.png')}
                            title="Fast Payment"
                            description="Get Done with Payment with few easy steps"
                        />

                    </View>

                    <View key="3">
                        <Onboard 
                            image={require('../../res/images/favorite.png')}
                            title="Order Your Favorites"
                            description="Our Delivery System  has been optimized to service 
                            multiple orders in a very short time"
                        />

                    </View>
                   
                </PagerView>

                {/* indicator */}

                <NativeBaseProvider >
                    <Button 
                    
                    style={styles.signUp}
                    margin={7}
                    bg="#da4440"
                    _text={styles.signUpText}
                    >
                        Sign Up
                    </Button>

                    <View style={styles.newAccount}>
                        <Text> Have an account?</Text>
                        <Text style={styles.loginBtn}>Log in</Text>
                    </View>
                    
                    {/* Policy and Terms and condition */}

                    <View style={styles.footer}> 
                        <Text> Creating a account means you accept our </Text>
                        <View style={styles.tc}>
                            <Text 
                            style={styles.footerHighlight}>
                                Terms and Condition
                            </Text> 

                            <Text> and </Text>

                            <Text 
                            style={styles.footerHighlight}
                            >
                                privacy policy
                            </Text>
                        </View>
                        
                    </View>

                </NativeBaseProvider>

                
        </View>
    )
}

export default OnboardingScreen


