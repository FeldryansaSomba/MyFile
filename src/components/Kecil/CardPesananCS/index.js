import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import Gap from '../Gap'

const CardPesananCS = ({pesanan, navigation}) => {

  return (
    <TouchableOpacity style={styles.card} 
    onPress={() => navigation.navigate('DetailPesananCS', {pesanan})}>
    
    <View style={styles.container}>
    <View style={styles.content}>
    <Text style={styles.dataMebel}>{pesanan.product.nama}</Text>
    <Gap height={3}/>
    <Text style={styles.dataMebel}>Rp. {pesanan.product.harga}</Text>
    <Gap height={10}/>
    <Text style={styles.dataPembeli}>{ pesanan.product.namaMebel }</Text>
    <Gap height={3}/>
    <Text style={styles.dataPembeli}>No Hp : {pesanan.product.noHp}</Text>
    </View>
    <View>
    <View style={styles.contentGambar}>
    <Image source={{uri: pesanan.product.gambar[0]}} style={styles.gambar}/>
    </View>
    <Gap height={10}/>
    <View style={styles.containerStatus}>
    <Text style={styles.status}>{pesanan.product.status}</Text>
    </View>
    </View>
    </View>
    
    </TouchableOpacity>
  )
}

export default CardPesananCS

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.pertama,
    paddingHorizontal: 25,
    justifyContent: 'center',
    height: responsiveHeight(135),
    marginBottom: 25,
    borderRadius: 20,

  },
  containerStatus: {
    backgroundColor: colors.kedua,
    borderRadius: 5,
    height: responsiveHeight(25),
    width: responsiveWidth(70),
    justifyContent: 'center',
  },
  status: {
    color: colors.keempat,
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataMebel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(13, heightMobileUI),
    textTransform: 'capitalize',
    color: colors.keempat,
    
  },
  dataPembeli: {
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'capitalize',
    fontSize: RFValue(13, heightMobileUI),
    color: colors.keempat,
    
  },
  gambar: {
    width: responsiveWidth(65),
    height: responsiveHeight(65),
    marginLeft: 2,
    marginTop: 5
  },
  content: {
    width: '70%',
  },
  contentGambar: {
  },
})