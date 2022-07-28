import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardKerjaMbl } from '../../Kecil'
import { colors } from '../../../utils'

const ListKerjaMbl = (props) => {

    console.log("props di pesanan mebel:",props)
    const {getProsesPesananLoading, getProsesPesananResult, getProsesPesananError, navigation } = props.allData;
//   console.log("props di pesanan mebel:",getProsesPesananResult)


return (
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.container}>
  
  { getProsesPesananResult ? ( 
        Object.keys(getProsesPesananResult).map((key) => 
        {
        return <CardKerjaMbl 
                key={key} 
                pesanan={getProsesPesananResult[key]} 
                navigation={navigation}
                id={key}
                
                />
    })
    ) 
    :
    getProsesPesananLoading ? (

        <View style={styles.loading}>
            <ActivityIndicator color={colors.pertama}/>
        </View>

    ) : getProsesPesananError ? (
        
        <Text>{getProsesPesananError}</Text>
        
    ) : (

        <Text>Tidak Ada Pesanan Masuk</Text>

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