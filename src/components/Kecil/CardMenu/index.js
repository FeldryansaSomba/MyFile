import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { clearStorage, colors, responsiveHeight } from '../../../utils'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../../utils/constant';
import FIREBASE from '../../../config/FIREBASE'

const CardMenu = ({menu, navigation}) => {
  const onSubmit = () => {
    if(menu.halaman === "MasukCS") {
      FIREBASE.auth().signOut().then(function() {
        //signout successful

        clearStorage();
        navigation.replace('PilihUser')
      }).catch(function(error) {
        //an error happaned
        alert(error)
      })
    }else {
      navigation.navigate(menu.halaman)
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSubmit()}>
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