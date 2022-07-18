import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardPesananMbl } from '../../Kecil'
import { colors } from '../../../utils'

const ListPesananMbl = ({getProdukPesananMblLoading, getProdukPesananMblResult, getProdukPesananMblError, navigation }) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      
      { getProdukPesananMblResult ? ( 
            Object.keys(getProdukPesananMblResult.produk).map((key) => 
            {
            return <CardPesananMbl 
                    key={key} 
                    pesanan={getProdukPesananMblResult.produk[key]} 
                    // navigation={navigation}
                    id={key}
                    />
        })
        ) : getProdukPesananMblLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getProdukPesananMblError ? (
            
            <Text>{getProdukPesananMblError}</Text>
            
        ) : (

            <Text>Tidak Ada Pesanan Masuk</Text>

        )}
    </View>
    </ScrollView>
  )
}

export default ListPesananMbl

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
  loading: {
    flex: 1,
    marginTop: 30,
    
}
})