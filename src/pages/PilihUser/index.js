import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Gambar1, Gambar2 } from '../../assets'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Button, Gap } from '../../components'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";

export default class PilihUser extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.pages}>
        <Gambar1 style={styles.gambar1}/>
        <Text style={styles.text}>HC-Furniture</Text>
        <Gambar2/>
        <Text style={styles.text1}>Masuk sebagai</Text>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate('MasukCS')}
          title={"Pelanggan"}
          width={responsiveWidth(282)} 
          height={responsiveHeight(36)} 
          fontSize={RFValue(16, heightMobileUI)} 
          borderRadius={5}
          type='secondary'/>
          <Gap height={15}/>
          <Button onPress={() => navigation.navigate('MasukMebel')}
          title={"Mebel"}
          width={responsiveWidth(282)} 
          height={responsiveHeight(36)} 
          fontSize={RFValue(16, heightMobileUI)} 
          borderRadius={5}
          type='secondary'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#402D1B',
    flex: 1
  },
  text: {
    color: colors.keempat,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 14,
    marginBottom: 14
  },
  gambar1: {
    alignSelf: 'flex-end',
    marginTop: 64
  },
  button: {
    marginTop: 13,
    alignItems: 'center'
  },
  text1: {
    fontSize: 18,
    color: colors.keempat,
    textAlign: 'center',
    marginTop: 74,
    fontFamily: 'Montserrat-SemiBold',
},
})