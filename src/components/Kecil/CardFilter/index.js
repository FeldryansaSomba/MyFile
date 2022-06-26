import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { connect } from 'react-redux'
import { getProdukByFilter } from '../../../actions/ProdukAction'

const CardFilter = ({filter, id, dispatch}) => {
  const toProdukByFilter = (id, namaProduk) => {
    //ke produk action
    dispatch(getProdukByFilter(id, namaProduk));
  }
  return (
    <>
    <TouchableOpacity style={styles.container} onPress={() => toProdukByFilter(id, filter.namaProduk)}>
      <Image source={{uri: filter.image}} style={styles.logo}/>
    </TouchableOpacity>
    {/* <View>
      <Text>{filter.nama}</Text>
      </View> */}
      </>
  )
}

export default connect()(CardFilter)

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