import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const CardPesananCS = ({pesanan}) => {
  return (
    <View style={styles.card}>
      {/* <Text style={styles.tgl}>{pesanan.tanggalPemesanan}</Text> */}
      <Text style={styles.status}>Status : Proses</Text>
      <View style={styles.container}>
      <Image source={{uri: pesanan.product.gambar[0]}} style={styles.gambar}/>
      <View style={styles.data}>
      <Text style={styles.nama}>{pesanan.product.nama}</Text>
      <Text style={styles.harga}>{pesanan.product.harga}</Text>
      <Text style={styles.mebel}>{pesanan.product.namaMebel}</Text>
      <Text style={styles.lokasi}>{pesanan.product.lokasi}</Text>
      </View>
      </View>
      <View style={styles.wrapper}>
      <Text style={styles.noHp}>No Hp Mebel : {pesanan.product.noHp}</Text>
      <Text style={styles.kustom}>Kustom Produk :</Text>
      <Text style={styles.kustoM}>
        Panjang : {pesanan.panjang}, 
        Lebar : {pesanan.lebar}, 
        Tinggi : {pesanan.tinggi}, 
        Warna : {pesanan.warna}, 
        Kayu : {pesanan.kayu}
      </Text>
      
      </View>
      </View>
  )
}

export default CardPesananCS

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.pertama,
        // width: responsiveWidth(275),
        height: responsiveHeight(220),
        marginBottom: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
      },
      status: {
        marginLeft: 30,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: colors.keempat,
        marginTop: 5
      },
      tgl: {
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: 'black',
        marginTop: 10
      },
      container: {
      flexDirection: 'row',
      },
      gambar: {
        width: 102,
        height: 102,
        marginLeft: 30,
        marginTop: 3
      },
      data: {
        marginTop: 3,
      },
      nama: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.keempat,
        marginLeft: 25,
        marginBottom: 5
      },
      harga: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
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
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: colors.keempat,
        marginLeft: 25
      },
      wrapper: {
        paddingLeft: 30,
        marginTop: 9,
        marginBottom: 10,
        paddingRight: 30
      },
      kustom: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: colors.keempat,
      },
      kustoM: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: colors.keempat,
      },
      noHp: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: colors.keempat,
        marginBottom: 5
      }
})