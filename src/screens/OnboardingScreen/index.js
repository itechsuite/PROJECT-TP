import { NativeBaseProvider, Button} from 'native-base'
import React, {useRef, useState} from 'react'
import {  FlatList, Image, StyleSheet, Text, View , Animated} from 'react-native'
import Onboard from '../../components/Onboard'
import styles from './styles'
import {ExpandingDot} from "react-native-animated-pagination-dots"
import Global from '../../constants/Global'
import Svg from 'react-native-svg'


const OnboardingScreen = ({navigation}) => {
    const global = require('../../constants/Global')
    const data =[
        {
            key:'1',
            title:'Tasty Meals',
            description:'Our Delivery system has been optimized to service multiple orders in a very short time',
            image:require('../../res/images/favorite.png')
        },
        {
            key:'2',
            title:'Fast Payment',
            description:'Get Done with Payment with few easy steps',
            image:require('../../res/images/payment.png')
        },
        {
            key:'3',
            title:'Order Your Favorites',
            description:'Our Delivery system has been optimized to service multiple orders in a very short time',
            image:require('../../res/images/favorite.png')
        },
        {
            key:'4',
            title:'Fast Delivery',
            description:'Our Delivery system has been optimized to service multiple orders in a very short time',
            image:require('../../res/images/svg/facebook.svg')
        },
    ]
    const [activeIndex, setActiveIndex] = React.useState(0);

    let ref = React.useRef(null)

    const scrollX = React.useRef(new Animated.Value(0)).current;


    const onViewRef = React.useRef(({ viewableItems }) => {
        setActiveIndex(viewableItems[0].index);
      });
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

            <View style={{flex:2, }}  >

            {/* f;atlist to display onboarding information */}
            <View style={styles.PagerView}>

                <Animated.FlatList 
                    data={data}
                    contentContainerStyle ={{  justifyContent:'center', alignItems:'center'}}
                    
                    renderItem={({item, index}) =>(
                        <Onboard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}

                        />
                    )}
                    keyExtractor={item => item.key}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                
                    horizontal
                    bounces={false}
                    onScroll = {Animated.event( [
                        { nativeEvent: {contentOffset: {x :scrollX}}}], 
                         {useNativeDriver: false}
                        )}
                    
                    
                />
            </View>

                 <ExpandingDot 
                    data={data}
                    
                    style={[styles.expandingDot , ]}
                    activeDotColor={Global.color.primary}
                    
                    expandingDotWidth={30}
                    scrollX={scrollX}
                    inActiveDotOpacity={0.6}
           
                    dotStyle={{ 
                        width:10,
                        height:10,

                        marginHorizontal:4,
                    }}
                    containerStyle={{
                        flex:1,
                    }}
                
                />
            </View>
            

               
                

                {/* indicator */}
            <View style={{flex:1}} >
                   
                <NativeBaseProvider >
                    
                    <Button 
                    
                    style={styles.signUp}
                    margin={7}
                    bg={global.color.primary}
                    _text={styles.signUpText}
                    onPress={ () => navigation.navigate('signup')}
                    >
                        Sign Up
                    </Button>
                    <View style={styles.newAccount}>
                        <Text> Have an account?</Text>
                        <Text onPress={() => navigation.navigate('login')} style={styles.loginBtn}>Log in</Text>
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

                
        </View>
    )
}

export default OnboardingScreen


