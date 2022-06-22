import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanan } from '../../data'
import { colors, responsiveHeight } from '../../utils'
import { ListPesananCS } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';

export default class PesananCS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pesanans: dummyPesanan
    }
  }
  render() {
    const { pesanans } = this.state
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.text}>Pesanan Saya</Text>
      </View>
      <View style={styles.container}>
        <ListPesananCS pesanans={pesanans}/>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(65),
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(19, heightMobileUI),
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: colors.keempat,
  }
})