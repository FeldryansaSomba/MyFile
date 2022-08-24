import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardPesananMbl } from '../../Kecil'
import { colors } from '../../../utils'

const ListPesananMbl = (props) => {

    // console.log("props di pesanan mebel:",props)
    const {getProdukPesananMblLoading, getProdukPesananMblResult, getProdukPesananMblError, navigation } = props.allData;
//   console.log("props di pesanan mebel:",getProdukPesananMblResult)


return (
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.container}>
  
  { getProdukPesananMblResult ? ( 
        Object.keys(getProdukPesananMblResult).map((key) => 
        {
        return <CardPesananMbl 
                key={key} 
                pesanan={getProdukPesananMblResult[key]} 
                navigation={navigation}
                id={key}
                dispatch={props.allData.dispatch}
                
                />
    })
    ) 
    :
    getProdukPesananMblLoading ? (

        <View style={styles.loading}>
            <ActivityIndicator color={colors.pertama}/>
        </View>

    ) : getProdukPesananMblError ? (
        
        <Text>{getProdukPesananMblError}</Text>
        
    ) : (

        <Text>Tidak Ada Pesanan Masuk</Text>

    )
    }
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