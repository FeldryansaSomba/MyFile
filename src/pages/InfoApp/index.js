import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight,responsiveWidth } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils/constant';
import { Gap } from '../../components';
import { IconKembali } from '../../assets';

export default class InfoApp extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <View style={{flex: 1}}>
        <Gap height={20}/>
        <Text style={styles.nama}>HC-Furniture</Text>
        </View>
        <View style={styles.container}>
        <Gap height={35}/>
        <View style={{maxWidth: responsiveWidth(296)}}>
        <Text style={styles.text}>Aplikasi ini merupakan tempat jual beli yang bergerak di bidang furniture yang dapat memudahkan dalam memasarkan produk serta membeli produk mebel secara online.</Text>
        <Gap height={10}/>
        <Text style={styles.text}>Aplikasi ini dapat mempermudah pelanggan dalam mencari barang yang sesuai dengan kriteria yang diinginkan tanpa membuang banyak waktu untuk mencari barang. Dan juga mempromosikan produk-produk mebel sehingga masyarakat dapat mengaksesnya kapan saja.</Text>
        {/* <Gap height={'30%'}/> */}
        </View>
        <View style={{position: 'absolute', bottom: 30}}>
        <Text style={styles.text}>HC-Furniture,</Text>
        <Text style={styles.text}>Look good with us</Text>
        </View>
        </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
page: {
  flex: 1,
  backgroundColor: colors.pertama,
},
icon: {
    marginLeft: 28,
    marginTop: 30
},
container: {
  backgroundColor: colors.keempat,
  bottom: 0,
//   position: 'absolute',
  height: responsiveHeight(514),
  width: '100%',
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  alignItems: 'center'
},
nama: {
  fontFamily: 'Montserrat-Bold',
  fontSize: RFValue(18, heightMobileUI),
  color: colors.keempat,
  alignSelf: 'center',
},
text: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: RFValue(14, heightMobileUI),
  color: colors.kedua,
  textAlign: 'center'
}
})