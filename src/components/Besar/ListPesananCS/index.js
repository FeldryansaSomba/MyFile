import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { CardPesananCS } from '../../Kecil'

const ListPesananCS = ({pesanans}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
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
        marginHorizontal: 48,
        marginTop: 33
    }
})