import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'

const CardKerjaMbl = ({pesanan, navigation}) => {
//   console.log("navigation di card:",navigation);

  // console.log("data di card kerja:",pesanan);
  
  return (
    // <TouchableOpacity style={styles.card} 
    // onPress={() => navigation.navigate('DetailPesananMbl', {data:pesanan})}>


    <TouchableOpacity style={styles.card} >
    {/* <Text style={styles.tgl}>{pesanan.dataPesanan.tanggalPemesanan}</Text>  */}
    {/* <Text style={styles.status}>{pesanan.dataPesanan.tanggalPemesanan}</Text> */}
    {/* <Text style={styles.status}>Nama pembeli : { pesanan.dataPesanan.namaUser? pesanan.dataPesanan.namaUser: null }</Text>
    <View style={styles.container}>
    <Image source={{uri: pesanan.dataPesanan.product.gambar[0]}} style={styles.gambar}/>
    <View style={styles.data}>
    <Text style={styles.nama}>{pesanan.dataPesanan.product.nama}</Text>
    <Text style={styles.harga}>{pesanan.dataPesanan.product.harga}</Text>
    <Text style={styles.mebel}>{pesanan.dataPesanan.product.namaMebel}</Text>
    <Text style={styles.lokasi}>{pesanan.dataPesanan.product.lokasi}</Text>
    </View>
    </View>
    <View style={styles.wrapper}>
    <Text style={styles.noHp}>No Hp Pelanggan : {pesanan.dataPesanan.noHp}</Text> */}
    
    {/* </View>  */}
    </TouchableOpacity>
  )
}

// const mapStatetoProps = (state) => ({
//   dataUser: state.UserReducer.dataUser
// })

export default CardKerjaMbl

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pertama,
    // width: responsiveWidth(275),
    height: responsiveHeight(170),
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
    fontSize: RFValue(15, heightMobileUI),
    color: colors.keempat,
    textTransform: 'capitalize',
    marginTop: 8,
    marginBottom: 5
  },
  tgl: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(14, heightMobileUI),
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
    fontSize: RFValue(15, heightMobileUI),
    color: colors.keempat,
    textTransform: 'capitalize',
    marginLeft: 25,
    marginBottom: 5
  },
  harga: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(14, heightMobileUI),
    color: colors.keempat,
    marginLeft: 25,
    marginBottom: 16
  },
  mebel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
    marginLeft: 25,
    marginBottom: 5
  },
  lokasi: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(13, heightMobileUI),
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
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  },
  kustoM: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  },
  noHp: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  }
})