import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';

const CardProdukMbl = ({produk, navigation, dataUser}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MebelDetailCS', {produk})}>
      <Image source={{uri: produk.gambar[0]}} style={styles.gambar}/>
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

// const mapStatetoProps = (state) => ({
//   dataUser: state.UserReducer.dataUser
// })

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
    fontSize: 14,
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 5
  },
  harga: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 16
  },
  mebel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: colors.keempat,
    marginLeft: 17,
    marginBottom: 5
  },
  lokasi: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.keempat,
    marginLeft: 17
  }
})