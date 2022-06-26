import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { CardFilter } from '../../Kecil'
import { connect } from 'react-redux'
import { colors } from '../../../utils'

const Filter = ({getFilterLoading, getFilterResult}) => {
  return (
    <View style={styles.container}>
        { getFilterResult ? ( 
            Object.keys(getFilterResult).map((key) => {
            return <CardFilter filter={getFilterResult[key]} key={key}/>
        })
        ) : getFilterLoading ? (
            <View style={styles.loading}>
                <ActivityIndicator color={colors.pertama}/>
            </View>
        ) : (
            <Text>Text Kosong</Text>
        )}
    </View>
  )
}

const mapStatetoProps = (state) => ({
    getFilterLoading: state.FilterReducer.getFilterLoading,
    getFilterResult: state.FilterReducer.getFilterResult,
})

export default connect(mapStatetoProps, null)(Filter)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    loading: {
        flex: 1,
        marginTop: 10,
        
    }
})