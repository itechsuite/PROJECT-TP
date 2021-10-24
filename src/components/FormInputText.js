import React, {Component, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import Global from '../constants/Global';

const FormInputText = React.forwardRef((props, ref) => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={[styles.title, {width: props.width}]}> {props.title}</Text>
      {props.isPassword ? (
        <PasswordInputText
          //   getRef={input => (this.input = input)}
          label={''}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[styles.formControlInputText, props.styles]}
        />
      ) : (
        <TextInput
          onChangeText={props.onChangeText}
          ref={ref}
          onBlur={props.onBlur}
          value={props.value}
          keyboardType={props.keyboardType}
          autoCompleteType={props.autoCompleteType}
          style={[styles.formControlInputText, props.styles]}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.isSecureText}
        />
      )}
      <Text style={{color: 'red'}}> {props.error}</Text>
    </View>
  );
});

export default FormInputText;

const styles = StyleSheet.create({
  formControlInputText: {
    marginTop: 10,

    padding: 16,
    backgroundColor: Global.color.textInput,
    borderRadius: 4,
    color: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('screen').width / 23,
  },
});
