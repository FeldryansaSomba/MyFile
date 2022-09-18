import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JenisProduk = ({label, data, width, heigth, fontsize}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontsize)}>{label} :</Text>
    </View>
  )
}

export default JenisProduk

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: (fontsize) => ({
       fontSize: fontsize ? fontsize : 14,
       fontFamily: "Montserrat-SemiBold"
    })
})