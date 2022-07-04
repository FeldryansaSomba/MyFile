import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListObrolanCS } from '../../components'
import { colors, responsiveHeight, heightMobileUI } from '../../utils'
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultImage } from '../../assets';

const ObrolanCS = ({navigation}) => {
  return (
    <View style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.title}>Obrolan</Text>
    </View>
      <ListObrolanCS 
      profile={DefaultImage}
      name="Mebel Jaya"
      desc={"Test Obrolan"}
      onPress={() => navigation.navigate('ChattingCS')}/>
      <ListObrolanCS 
      profile={DefaultImage}
      name="Mebel Jaya"
      desc={"Test Obrolan"}
      />
      <ListObrolanCS 
      profile={DefaultImage}
      name="Mebel Jaya"
      desc={"Test Obrolan"}
      />
    </View>
  )
}

export default ObrolanCS

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    header: {
        backgroundColor: colors.pertama,
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(65),
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(19, heightMobileUI),
        color: 'white'
    }
})