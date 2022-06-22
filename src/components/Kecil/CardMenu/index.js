import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight } from '../../../utils'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../../utils/constant';

const CardMenu = ({menu, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(menu.halaman)}>
      {menu.gambar}
      <Text style={styles.text}>{menu.nama}</Text>
    </TouchableOpacity>
  )
}

export default CardMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 34,
    backgroundColor: colors.keempat,
    marginHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: colors.kedua,
    padding: responsiveHeight(5),
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(14, heightMobileUI),
    color: colors.kedua,
    marginLeft: 14
  }
})