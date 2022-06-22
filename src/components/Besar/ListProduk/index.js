import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardProduk } from '../../Kecil'

const ListProduk = ({produks, navigation}) => {
  return (
    <View>
      {produks.map((produk) => {
        return (
            <CardProduk key={produk.id} produk={produk} navigation={navigation}/>
        )
      })}
    </View>
  )
}

export default ListProduk

const styles = StyleSheet.create({})