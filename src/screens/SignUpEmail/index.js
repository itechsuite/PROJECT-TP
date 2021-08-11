import React, {useState, useRef} from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormInputText from '../../components/FormInputText';
import Global from '../../constants/Global';
import CheckBoxComponent from '../../components/CheckBoxComponent';
import { NativeBaseProvider, Button} from 'native-base'
import CommandBtn from '../../components/CommandBtn';
import HaveAnAccount from '../../components/HaveAnAccount';
import styles from './styles'
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import Animated from 'react-native-reanimated';
import DemoPager from '../../components/DemoPager';
import PagerView from 'react-native-pager-view';
import Level1 from '../../components/form/SignUpForm/Level1';
import Level2 from '../../components/form/SignUpForm/Level2';

const SignUpEmail = ({navigation}) => {
const icon = <FontAwesome5 name={'comments'} />
const [isChecked, setIsChecked] = React.useState(false)
const scrollX = React.useRef(new Animated.Value(0)).current;
const [currentPosition, setCurrentPosition] = React.useState(0) // zero is the default value 

const viewpager = PagerView;
 const pagerRef = useRef(null)


const screens = [

    {
        key:'1',
        title:'Tasty Meals',
        description:'Our Delivery system has been optimized to service multiple orders in a very short time',
        image:require('../../res/images/favorite.png')

    }
]


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5 
                    onPress={() => {
                        if( currentPosition !== 0 ){
                            pagerRef.current?.setPage(currentPosition -1)
                        }else {
                            navigation.goBack()
                        }
                    }} 
                    name={'chevron-left'} size={20} 
                    style={styles.backBtn} />
                <Text style={styles.headerText}>Sign Up</Text>

            </View>
            

            {/* VIEW PAGER TO POPULATE DIFFERENT PAGES ON PRESSING NEXT BUTTON */}
            <PagerView 
                initialPage={0} 
                style={{flex:2}}
                // scrollEnabled={false}
                orientation="vertical"
                showPageIndicator={true}
                // scrollEnabled={false}
                // onPageScrollStateChanged = {(e) => {
                //     console.log(e.currentTarget);
                // }}
                onPageScroll={({nativeEvent}) => {
                    setCurrentPosition(nativeEvent.position)
                    
                }}
                
            
                ref={pagerRef}
                
                >
                <View key="1" collapsable={false}>
                    <Level1 />
                </View>
                <View key="2">
                    <Level2 />
                </View>
            </PagerView>
               

           
            <CommandBtn 
                title={"Next"} 
                // onPress={ () => navigation.navigate('phonevalidation')}
                onPress={() => {

                    if (currentPosition === 1){
                        navigation.navigate('phonevalidation')
                    }else {
                        pagerRef.current?.setPage(1)

                    }
                    console.log("on button click- ",currentPosition)

                
                }}
             />

            
            <HaveAnAccount 
                title={"Have an Account?"}
                command={"Log in"}
                onPress={() => navigation.navigate('loginemail')} />
        </View>
    )
}

export default SignUpEmail


