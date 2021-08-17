import React, {useState} from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { backgroundColor } from 'styled-system';



const CheckBoxComponent = ({disabled, value, onValueChange, title}) => {
const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

        <CheckBox
        style={styles.CheckBox}
        disabled={disabled}
        value={value}
        onValueChange={onValueChange}
        tintColors={'#000'}
        boxType={'circle'}
        lineWidth={10}
        />  
        <Text style={styles.title}> {title}</Text>
    </View>
    )
}

export default CheckBoxComponent

const styles = StyleSheet.create({
    title:{
        fontSize:Dimensions.get('screen').width /25
    },
    CheckBox:{
    },


})
