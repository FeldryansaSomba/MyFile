import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors, heightMobileUI } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'

const Input = ({kustom, textArea, label, width, height, fontSize, placeholder, value, secureTextEntry,
                onChangeText, disabled, keyboardType }) => {
    if(textArea) {
        return (
            <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput placeholder={placeholder}
            style={styles.inputTextArea(fontSize, width)} 
            multiline={true} 
            numberOfLines={3} 
            onChangeText={onChangeText}
            editable={disabled ? false : true}/>
            </View>
        )
    }

    if(kustom) {
        return (
            <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput placeholder={placeholder}
            style={styles.kustom(fontSize, width, height)}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
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
      keyboardType={keyboardType}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : RFValue(14, heightMobileUI),
        fontFamily: 'Montserrat-Medium',
        marginBottom: 5,
        color: colors.kedua
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
        borderRadius: 5,
        paddingVertical: 5,
        textAlignVertical: 'top',
    }),
    kustom: (fontSize, width, height) => ({
        fontSize: fontSize ? fontSize : 14,
        fontFamily: 'Montserrat-Bold',
        width: width,
        height: height,
        backgroundColor: colors.keempat,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    }),
})