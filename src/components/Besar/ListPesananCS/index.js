import { ActivityIndicator, StyleSheet, View, ScrollView, Text } from 'react-native'
import React from 'react'
import { CardPesananCS } from '../../Kecil'
import { colors } from '../../../utils'

const ListPesananCS = ({pesanans, getListProdukResult, getListPesananLoading, getListPesananError}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>

    {/* { getListProdukResult ? ( 
            Object.keys(getListProdukResult).map((key) => {
            return <CardPesananCS key={key} produk={getListProdukResult[key]} />
        })
        ) : getListPesananLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getListPesananError ? (
            
            <Text>{getListPesananError}</Text>
            
        ) : (

            <Text>Tidak Ada Pesanan</Text>

        )} */}

    {pesanans.map((pesanan) => {
        return <CardPesananCS pesanan={pesanan} key={pesanan.id}/>
    })}
    </View>
    </ScrollView>
  )
}

export default ListPesananCS

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    loading: {
      flex: 1,
      marginTop: 30,
      
  }
})