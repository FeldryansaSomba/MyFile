import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import ButtonLoading from './ButtonLoading'

const Button = ({title, width, height, fontSize, onPress, type, borderRadius, loading, props}) => {

  //Loading
if(loading) {
  return <ButtonLoading {...props}/>
}

  return (
    <TouchableOpacity style={styles.button(width,height, type, borderRadius)} onPress={onPress}>
      <Text style={styles.text(fontSize)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: (width, height, type, borderRadius) => ({
        width: width,
        height: height,
        backgroundColor: type === 'secondary' ? colors.pertama : colors.kedua,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius,
    }),
    text: (fontSize) => ({
        fontSize: fontSize,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.keempat
    })
})