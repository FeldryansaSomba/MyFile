import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardProdukMbl } from '../../Kecil'
import { connect } from 'react-redux'
import { colors } from '../../../utils'

const ListProdukMbl = ({
    getProdukMblLoading, 
    getProdukMblResult, 
    getProdukMblError, 
    navigation
    }) => {

      console.log("get product result mbl:",getProdukMblResult);
  return (
    <View>
      { getProdukMblResult[0] ? ( 
            Object.keys(getProdukMblResult[0]).map((key) => {
            return <CardProdukMbl key={key} produk={getProdukMblResult[0][key]} navigation={navigation}/>
        })
        ) : getProdukMblLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getProdukMblError ? (
            
            <Text>{getProdukMblError}</Text>
            
        ) : (

            <Text>Anda tidak memiliki produk</Text>

        )}
    </View>
  )
}

const mapStatetoProps = (state) => ({
    getProdukMblLoading: state.ProdukReducer.getProdukMblLoading,
    getProdukMblResult: state.ProdukReducer.getProdukMblResult,
    getProdukMblError: state.ProdukReducer.getProdukMblError,
})

export default connect(mapStatetoProps, null)(ListProdukMbl)

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginTop: 30,
    
}
})