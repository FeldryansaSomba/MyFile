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

      // console.log("get product result:",getProdukResult);
  return (
    <View>
      {/* <Text>tes</Text> */}
      { getProdukMblResult ? ( 
            Object.keys(getProdukMblResult).map((key) => {
            return <CardProdukMbl key={key} produk={getProdukMblResult[key]} navigation={navigation}/>
        })
        ) : getProdukMblLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getProdukMblError ? (
            
            <Text>{getProdukMblError}</Text>
            
        ) : (

            <Text>Produk Kosong</Text>

        )}
    </View>

    // <View>
    //   {/* <Text>tes</Text> */}
    //   { getProdukResult ? ( 
    //         Object.keys(getProdukResult).map((key) => {
    //             Object.keys(getProdukResult[key]).map((key2) => {
    //                 return (
    //                     <View></View>
    //                 )

    //             })
    //     })
    //     ) : getProdukLoading ? (

    //         <View style={styles.loading}>
    //             <ActivityIndicator color={colors.pertama}/>
    //         </View>

    //     ) : getProdukError ? (
            
    //         <Text>{getProdukError}</Text>
            
    //     ) : (

    //         <Text>Produk Kosong</Text>

    //     )}
    // </View>
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