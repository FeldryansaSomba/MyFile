import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardProduk } from '../../Kecil'
import { connect } from 'react-redux'
import { colors } from '../../../utils'


const ListProduk = ({
    getProdukLoading, 
    getProdukResult, 
    getProdukError, 
    navigation
    }) => {


  return (
    <View>
      { getProdukResult ? ( 
            Object.keys(getProdukResult).map((key) => {
                    return <CardProduk key={key} produk={getProdukResult[key]} navigation={navigation}/>
        })
        ) : getProdukLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getProdukError ? (
            
            <Text>{getProdukError}</Text>
            
        ) : (

            <Text>Produk Kosong</Text>

        )}
    </View>
  )
}

const mapStatetoProps = (state) => ({
    getProdukLoading: state.ProdukReducer.getProdukLoading,
    getProdukResult: state.ProdukReducer.getProdukResult,
    getProdukError: state.ProdukReducer.getProdukError,
})

export default connect(mapStatetoProps, null)(ListProduk)

const styles = StyleSheet.create({
  loading: {
    flex: 1,
}
})