import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Linking = ({title, size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Text style={styles.text(size)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Linking

const styles = StyleSheet.create({
    text: size => ({
        fontSize: size,
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua,
        textDecorationLine: 'underline',
      }),
})