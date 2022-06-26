import { StyleSheet, View } from 'react-native'
import React from 'react'
import { CardFilter } from '../../Kecil'

const Filter = ({filters}) => {
  return (
    <View style={styles.container}>
        {filters.map((filter) => {
            return (
                <CardFilter filter={filter} key={filter.id}/>
            )
        })}
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})