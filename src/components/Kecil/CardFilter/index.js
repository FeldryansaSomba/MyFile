import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const CardFilter = ({filter}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: filter.image}} style={styles.logo}/>
    </TouchableOpacity>
  )
}

export default CardFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pertama,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 5,
        width: responsiveWidth(60),
        height: responsiveHeight(60),
        borderRadius: 7,
        marginRight: 15
    },
    logo: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
    }
})