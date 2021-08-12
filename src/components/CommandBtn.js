import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NativeBaseProvider,Center, Button} from 'native-base'
import Global from '../constants/Global'


const CommandBtn = ({title, style , onPress}) => {
    return (
                <View  style={{flex:1}} >
                   <NativeBaseProvider>
                        <Button
                            margin={10}
                            bg={Global.color.primary}
                            style={[styles.commandBtn, style]}
                            _text={styles.CommandText}
                            onPress={onPress}

                        >

                            {title}                            
                        </Button>
                    </NativeBaseProvider> 
                </View>

    )
}

export default CommandBtn

const styles = StyleSheet.create({
    commandBtn:{
        resizeMode:'contain', 
    }, 
    CommandText:{
        textTransform:'uppercase',
        color: Global.color.white, 
        fontWeight:'bold',

    }, 
})
