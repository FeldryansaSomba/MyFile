import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
import { IconChat, IconKustom } from '../../../assets'

const BottomPesan = ({onPress, onPressTolak, onPressTerima, loading, title, pesanan}) => {
  if (pesanan) {
    return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.button2} onPress={onPressTerima} loading={loading}>
        <Text style={styles.text}>Terima</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={onPressTolak}>
        <Text style={styles.text}>Tolak</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.chat}>
        <IconChat/>
      </TouchableOpacity> */}
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} loading={loading}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomPesan

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: colors.keempat,
        paddingHorizontal: 30,
        paddingVertical: 8,
        Width: '100%',
        borderTopWidth: 2,
        borderTopColor: colors.ketiga,
        alignItems: 'center'
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.keempat,
      paddingHorizontal: 30,
      paddingVertical: 8,
      Width: '100%',
      borderTopWidth: 2,
      borderTopColor: colors.ketiga,
      alignItems: 'center'
  },
    button: {
        backgroundColor: colors.pertama,
        width: responsiveWidth(250),
        height: responsiveHeight(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    button2: {
      backgroundColor: colors.pertama,
      width: responsiveWidth(150),
      height: responsiveHeight(38),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row'
  },
    // chat: {
    //     backgroundColor: colors.kedua,
    //     width: responsiveWidth(45),
    //     height: responsiveHeight(38),
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 6,
    //     borderRadius: 10
    // },
    text: {
        color: colors.keempat,
        fontFamily: 'Montserrat-SemiBold',
        // paddingHorizontal: 125,
        paddingVertical: 10,
        fontSize: RFValue(16, heightMobileUI)
    },
    icon: {
        
    }
})