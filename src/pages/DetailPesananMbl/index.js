import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DetailPesananMbl = (props) => {

    const data = props.route.params.data.dataPesanan
    console.log('Data Pesanan: ', props.route.params)
  return (
    <View>
      <Image source={{uri: data.product.gambar[0]}} style={styles.gambar}/>
      <Text>{data.product.nama}</Text>
    </View>
  )
}

export default DetailPesananMbl

const styles = StyleSheet.create({
    gambar: {
        width: 102,
        height: 102,
        marginLeft: 30,
        marginTop: 3
      },
})