import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth, widthMobileUI, heightMobileUI } from '../../../utils'
import { IconSend } from '../../../assets'
import { RFValue } from 'react-native-responsive-fontsize'

const InputChatCS = () => {
  return (
    <View style={styles.container}>
    <TextInput style={styles.input} placeholder='Masukan Pesan Anda...'/>
    <View style={styles.button}>
    <TouchableOpacity>
    <IconSend/>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default InputChatCS

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.kedelapan,
        paddingTop: 14,
        paddingBottom: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: colors.keempat,
        borderWidth: 1,
        borderColor: '#878787',
        borderRadius: 10,
        padding: 8,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(14, heightMobileUI),
        color: colors.kedua,
        flex: 1,
        marginRight: 12,
        maxHeight: responsiveHeight(45)
    },
    button: {
        width: responsiveWidth(43),
        height: responsiveHeight(43),
        backgroundColor: colors.kedua,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})