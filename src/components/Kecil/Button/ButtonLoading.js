import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors,responsiveWidth, responsiveHeight } from '../../../utils'
import Gap from '../Gap'

const ButtonLoading = ({width, height, fontSize, borderRadius}) => {

  return (
    <TouchableOpacity style={styles.button(width,height, borderRadius)}>
    <Text style={styles.text(fontSize)}>Tunggu Sebentar . . .</Text>
    <Gap width={5}/>
    <ActivityIndicator size={'small'} color="white"/>
    </TouchableOpacity>
  )
}

export default ButtonLoading

const styles = StyleSheet.create({
    button: (width, height, borderRadius) => ({
        width: width,
        height: height,
        backgroundColor: colors.kedua,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius,
        width: responsiveWidth(282),
        height: responsiveHeight(36),
        flexDirection: 'row',
        borderRadius: 5
    }),
    text: (fontSize) => ({
        fontSize: fontSize,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.keempat
    })
})