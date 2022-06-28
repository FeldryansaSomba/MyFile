import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProduk,  Filter, ButtonJual } from '../../components'

export default class BerandaMbl extends Component {
  render() {
    const { navigation, namaProduk, keyword } = this.props
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Selamat Berbelanja</Text>
        <Gap height={22}/>
        <ButtonJual navigation={navigation}/>
        <Gap height={10}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listProduk}>
        <ListProduk  navigation={navigation}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.keempat,
    flex: 1,
},
containerAtas: {
  paddingTop: 50,
  marginHorizontal: 35
},
text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.kedua
},
listProduk: {
  paddingTop: 17,
  marginHorizontal: 48
},
filter: {
  fontFamily: 'Montserrat-SemiBold',
  color: colors.kedua,
  fontSize: 15,
  marginTop: 16,
  marginBottom: 7
}
})