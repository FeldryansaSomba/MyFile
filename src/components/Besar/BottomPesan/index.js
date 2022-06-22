import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
import { IconChat, IconKustom } from '../../../assets'

const BottomPesan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Beli</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Kustom</Text>
        <IconKustom/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chat}>
        <IconChat/>
      </TouchableOpacity>
    </View>
  )
}

export default BottomPesan

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.keempat,
        paddingHorizontal: 29,
        paddingVertical: 8,
        Width: '100%',
        borderTopWidth: 2,
        borderTopColor: colors.ketiga,
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.pertama,
        width: responsiveWidth(123),
        height: responsiveHeight(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    chat: {
        backgroundColor: colors.kedua,
        width: responsiveWidth(45),
        height: responsiveHeight(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderRadius: 10
    },
    text: {
        color: colors.keempat,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        // paddingHorizontal: 125,
        paddingVertical: 10,
        fontSize: RFValue(16, heightMobileUI)
    },
    icon: {
        
    }
})