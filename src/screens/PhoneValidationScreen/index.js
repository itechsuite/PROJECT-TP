import React, {useState, useRef} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';
import styles from './styles'
import FormInputText from '../../components/FormInputText';

const PhoneValidationScreen = () => {
const icon = <FontAwesome5 name={'comments'} />
const [isChecked, setIsChecked] = React.useState(false)
const scrollX = React.useRef(new Animated.Value(0)).current;

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
                <FontAwesome5 onPress={() => navigation.goBack()} name={'chevron-left'} size={20} style={styles.backBtn} />
                <Text style={styles.headerText}>Phone verification</Text>

            </View>

              

            <View style={[styles.subContainer, ]} >

            <Image
                    style={styles.phoneIcon}
                    source={require('../../res/images/phone.png')}
                />


                <Text style={[styles.headerText, {fontSize:20,}]}> 
                    Phone Number Verification
                </Text>

                <Text style={styles.description}> we will send you confirmation code on this number</Text>


                <FormInputText
                    title={"First Name"}
                    placeholder={"Enter First Name"}
                    placeholderTextColor={"#3C3C43"}
                    width={Dimensions.get('window').width}
             
              />


            </View>
            

        </View>
    )
}

export default PhoneValidationScreen


