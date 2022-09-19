import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils';
import { RFValue } from 'react-native-responsive-fontsize';
import Gap from '../Gap';

const CardProdukMbl = ({produk, navigation, dataUser}) => {
// const CardProdukMbl = (props) => {
  // console.log("produk:",props)
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MebelDetailMbl', {produk})}>
      {
        produk.gambar?
        <Image source={{uri: produk.gambar[0]}} style={styles.gambar}/>
        : null
      }
      <View style={styles.data}>
      <View style={{flex: 1, paddingVertical: 19}}>
      <Text style={styles.nama}>{produk.nama}</Text>
      <Gap height={2}/>
      <Text style={styles.harga}>Rp. {produk.harga}</Text>
      <Gap height={15}/>
      <Text style={styles.mebel}>{produk.namaMebel}</Text>
      <Text style={styles.lokasi}>{produk.lokasi}</Text>
      </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardProdukMbl

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pertama,
    height: responsiveHeight(127),
    flexDirection: 'row',
    marginBottom: 25,
    borderRadius: 25,
    paddingHorizontal: 20,
    alignItems: 'center'
//     shadowColor: "#000",
//   shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,

// elevation: 5,
  },
  gambar: {
    width: responsiveWidth(90),
    height: responsiveHeight(90),
  },
  data: {
    flex: 1,
    marginLeft: 10
  },
  nama: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  },
  harga: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  },
  mebel: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
  },
  lokasi: {
    fontFamily: 'Montserrat-Medium',
    textTransform: 'capitalize',
    fontSize: RFValue(12, heightMobileUI),
    color: colors.keempat,
  }
})