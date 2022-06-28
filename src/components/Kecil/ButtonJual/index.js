import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { IconTambah } from '../../../assets'

const ButtonJual = ({onPress}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
        <Text style={styles.text}>Jual Produk Anda</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <IconTambah/>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonJual

const styles = StyleSheet.create({
        container2: {
            justifyContent: 'center'
        },
        container: {
            backgroundColor: colors.pertama,
            height: responsiveHeight(30),
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        text: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 14,
            color: 'white',
            marginLeft: 49,
            borderRadius: 5,
            
        },
        button: {
            backgroundColor: colors.kedua,
            width: responsiveWidth(95),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
        }
})