import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const CardPesananCS = ({pesanan}) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
      <Image source={pesanan.gambar[0]} style={styles.gambar}/>
      <View style={styles.data}>
      <Text style={styles.nama}>{pesanan.nama}</Text>
      <Text style={styles.harga}>{pesanan.harga}</Text>
      <Text style={styles.mebel}>{pesanan.namaMebel}</Text>
      <Text style={styles.lokasi}>{pesanan.lokasi}</Text>
      </View>
      </View>
      <Text style={styles.tgl}>{pesanan.tanggalPemesanan}</Text>
      </View>
  )
}

export default CardPesananCS

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.pertama,
        width: responsiveWidth(275),
        height: responsiveHeight(150),
        marginBottom: 25,
        borderRadius: 25,
        shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
      },
      tgl: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: 'black'
      },
      container: {
      flexDirection: 'row',
      },
      gambar: {
        width: 102,
        height: 102,
        marginLeft: 30,
        marginTop: 18
      },
      data: {
        marginTop: 18,
      },
      nama: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.keempat,
        marginLeft: 25,
        marginBottom: 5
      },
      harga: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: colors.keempat,
        marginLeft: 25,
        marginBottom: 16
      },
      mebel: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: colors.keempat,
        marginLeft: 25,
        marginBottom: 5
      },
      lokasi: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.keempat,
        marginLeft: 25
      }
})