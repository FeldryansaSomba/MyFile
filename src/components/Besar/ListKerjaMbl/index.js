import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardKerjaMbl } from '../../Kecil'
import { colors } from '../../../utils'

const ListKerjaMbl = (props) => {
const {getTerimaPesananMblLoading, getTerimaPesananMblResult, getTerimaPesananMblError, navigation, dispatch } = props.allData;

return (
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.container}>
  
  { getTerimaPesananMblResult ? ( 
        Object.keys(getTerimaPesananMblResult).map((key) => 
        {
        return <CardKerjaMbl 
                key={key} 
                pesanan={getTerimaPesananMblResult[key]} 
                navigation={navigation}
                id={key}
                dispatch={dispatch}
                
                />
    })
    ) 
    :
    getTerimaPesananMblLoading ? (

        <View style={styles.loading}>
            <ActivityIndicator color={colors.pertama}/>
        </View>

    ) : getTerimaPesananMblError ? (
        
        <Text>{getTerimaPesananMblError}</Text>
        
    ) : (

        <Text>Tidak Ada Pekerjaan</Text>

    )
    }
</View>
</ScrollView>
)
}

export default ListKerjaMbl

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
  loading: {
    flex: 1,
    marginTop: 30,
    
}
})