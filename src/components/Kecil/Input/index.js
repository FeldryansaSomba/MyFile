import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Input = ({textArea, label, width, height, fontSize, placeholder, value, secureTextEntry,
                onChangeText, disabled, keyboardType }) => {
    if(textArea) {
        return (
            <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput 
            style={styles.inputTextArea(fontSize, width)} 
            multiline={true} 
            numberOfLines={3} 
            onChangeText={onChangeText}
            editable={disabled ? false : true}/>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput 
      style={styles.input(width, height, fontSize)} 
      value={value} 
      secureTextEntry={secureTextEntry} 
      onChangeText={onChangeText}
      editable={disabled ? false : true}
      keyboarType={keyboardType}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 14,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 5
    }),
    input: (width, height,fontSize) => ({
        fontSize: fontSize ? fontSize : 14,
        fontFamily: 'Montserrat-Bold',
        width: width,
        height: height,
        borderWidth: 1,
        color: colors.kedua,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 5,
        marginBottom: 5
    }),
    inputTextArea: (fontSize, width) => ({
        fontSize: fontSize ? fontSize : 14,
        fontFamily: 'Montserrat-Bold',
        width: width,
        borderWidth: 1,
        color: colors.kedua,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlignVertical: 'top',
    }),
})