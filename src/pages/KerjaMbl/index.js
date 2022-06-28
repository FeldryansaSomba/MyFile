import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanan } from '../../data'
import { colors, getData, responsiveHeight } from '../../utils'
import { ListPesananCS } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { IconChat } from '../../assets'

export default class KerjaMbl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pesanans: dummyPesanan
    }
  }
  render() {
    const { pesanans } = this.props
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.text}>Pekerjaan Saya</Text>
      </View>
      <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ListPesananCS pesanans={pesanans}/>
        {/* <ListPesananCS {...this.props}/> */}
      </View>
      </ScrollView>

      <TouchableOpacity style={styles.chat}>
      <IconChat/>
      </TouchableOpacity>
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
  page: {
    flex: 1,
    backgroundColor: colors.keempat,
  },
  container: {
    // flex: 1,
    // backgroundColor: colors.keempat,
    paddingHorizontal: 48
  },
  chat: {
    backgroundColor: colors.kedua,
    width: responsiveHeight(52),
    height: responsiveHeight(52),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})