import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { IconTambah } from '../../../assets'
import { RFValue } from 'react-native-responsive-fontsize'

const ButtonJual = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
        <Text style={styles.text}>Jual Produk Anda</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TambahProduk')}>
        <IconTambah/>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonJual

const styles = StyleSheet.create({
        container2: {
            justifyContent: 'center',
        },
        container: {
            backgroundColor: colors.pertama,
            height: responsiveHeight(30),
            borderRadius: 5,
            flexDirection: 'row',
            // justifyContent: 'space-evenly'
        },
        text: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: RFValue(14, heightMobileUI),
            color: 'white',
            marginLeft: 40,
            borderRadius: 5,
            
        },
        button: {
            backgroundColor: colors.kedua,
            width: responsiveWidth(100),
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            position: 'absolute',
            right: 0
        }
})