import { ActivityIndicator, StyleSheet, View, ScrollView, Text } from 'react-native'
import React from 'react'
import { CardPesananCS } from '../../Kecil'
import { colors } from '../../../utils'

const ListPesananCS = ({pesanans, getListPesananResult, getListPesananLoading, getListPesananError, navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>

    { getListPesananResult ? ( 
            Object.keys(getListPesananResult.produk).map((key) => 
            {
            return <CardPesananCS 
                    key={key} 
                    pesanan={getListPesananResult.produk[key]} 
                    navigation={navigation}
                    id={key}/>
        })
        ) : getListPesananLoading ? (

            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>

        ) : getListPesananError ? (
            
            <Text>{getListPesananError}</Text>
            
        ) : (

            <Text>Tidak Ada Pesanan</Text>

        )}

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