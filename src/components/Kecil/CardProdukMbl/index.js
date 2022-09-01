import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

const CardProdukMbl = ({produk, navigation, dataUser}) => {
// const CardProdukMbl = (props) => {
  // console.log("produk:",props)
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MebelDetailMbl', {produk})}>
      {/* <Image source={{uri: produk.gambar[0]}} style={styles.gambar}/> */}
      
      {
        produk.gambar?
        <Image source={{uri: produk.gambar[0]}} style={styles.gambar}/>
        : null
      }
      <View style={styles.data}>
      <Text style={styles.nama}>{produk.nama}</Text>
      <Text style={styles.harga}>{produk.harga}</Text>
      <Text style={styles.mebel}>{produk.namaMebel}</Text>
      <Text style={styles.lokasi}>{produk.lokasi}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardProdukMbl

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pertama,
    width: responsiveWidth(275),
    height: responsiveHeight(140),
    flexDirection: 'row',
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
  gambar: {
    width: 102,
    height: 102,
    marginLeft: 20,
    marginTop: 22
  },
  data: {
    // marginTop:
    marginTop: 22,
  },
  nama: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(14, heightMobileUI),
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 5
  },
  harga: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 16
  },
  mebel: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 5
  },
  lokasi: {
    fontFamily: 'Montserrat-Medium',
    textTransform: 'capitalize',
    fontSize: RFValue(12, heightMobileUI),
    color: colors.keempat,
    marginLeft: 17
  }
})