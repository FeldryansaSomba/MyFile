import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { connect } from 'react-redux'
import { getProduk } from '../../../actions/ProdukAction'
import { RFValue } from 'react-native-responsive-fontsize'



const CardFilter = ({filter, id, dispatch}) => {
  const toProdukByFilter = (id, namaProduk) => {
    //ke produk action
    console.log("get filter:",filter)
    dispatch(getProduk(filter))
  
  }

  console.log("filter:",filter)
  return (
    <>
    <TouchableOpacity style={styles.container} onPress={() => toProdukByFilter(id, filter)}>
      <Text style={styles.nama}>{filter}</Text>
    </TouchableOpacity>
    
      </>
  )
}

export default connect()(CardFilter)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pertama,
        shadowColor: "#000",
        padding: 5,
        width: responsiveWidth(80),
        height: responsiveHeight(30),
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nama: {
      color: 'white',
      textTransform:'capitalize',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: RFValue(14, heightMobileUI)
    }
})
