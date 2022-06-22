import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { IconFilter, IconSearch } from '../../../assets'
import { colors, responsiveWidth } from '../../../utils'

export default class SearchFilter extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.container}>
        <IconSearch/>
        <TextInput placeholder='Cari produk. . .' style={styles.input}/>
      </View>
      <TouchableOpacity>
      <IconFilter/>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.kedua,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        width: responsiveWidth(250)
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        color: colors.kedua,
        fontFamily: 'Montserrat-SemiBold',
        flex: 1
    }
})