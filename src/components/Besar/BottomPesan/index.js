import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
import { Gap } from '../../Kecil'
import ButtonLoading from '../../Kecil/Button/ButtonLoading'

const BottomPesan = ({onPress, 
                      onPressTolak, 
                      onPressTerima, 
                      loading, 
                      title, 
                      pesanan, 
                      selesai, 
                      onPressSelesai,
                      props 
                      }) => {
 
  if (pesanan) {
    return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.button2} onPress={onPressTerima} >
        <Text style={styles.text}>Terima</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={onPressTolak}>
        <Text style={styles.text}>Tolak</Text>
      </TouchableOpacity>
    </View>
    )
  }
  if (selesai) {
    return (
    <View style={styles.container3}>
      <TouchableOpacity style={styles.button3} onPress={onPressSelesai} >
        <Text style={styles.text}>Selesai</Text>
      </TouchableOpacity>
    </View>
    )
  }

  if(loading) {
    return (
      <View style={styles.container}>
      <ButtonLoading {...props}/>
      </View>
      )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomPesan

const styles = StyleSheet.create({
    container: {
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
    container3: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: colors.keempat,
      paddingVertical: 8,
      Width: '100%',
      borderTopWidth: 2,
      borderTopColor: colors.ketiga,
      alignItems: 'center'
    },
    button4: (width, height) => ({
      width: width,
      height: height,
      backgroundColor: colors.pertama,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    }),
    text1: (fontSize) => ({
      fontSize: fontSize,
      fontFamily: 'Montserrat-SemiBold',
      color: colors.keempat
    }),
    button: {
        backgroundColor: colors.pertama,
        width: responsiveWidth(282),
        height: responsiveHeight(36),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    button2: {
      backgroundColor: colors.pertama,
      width: responsiveWidth(140),
      height: responsiveHeight(35),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row'
    },
    button3: {
      backgroundColor: colors.pertama,
      width: responsiveWidth(255),
      height: responsiveHeight(35),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row'
    },
    text: {
        color: colors.keempat,
        fontFamily: 'Montserrat-SemiBold',
        paddingVertical: 10,
        fontSize: RFValue(15, heightMobileUI)
    },
    icon: {
        
    }
})