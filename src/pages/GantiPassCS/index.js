import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali } from '../../assets'
import { Button, Input } from '../../components'

export default class GantiPassCS extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.pages}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <View style={styles.input}>
        <Input 
        label={"Kata Sandi Lama"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry/>
        <Input 
        label={"Kata Sandi Baru"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry/>
        <Input 
        label={" Konfirmasi Kata Sandi Baru"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry/>
        </View>

        <View style={styles.button}>
        <Button 
        title={'Simpan'} 
        width={responsiveWidth(282)} 
        height={responsiveHeight(36)} 
        fontSize={16} 
        borderRadius={10}
        type='secondary'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.keempat,
    },
    icon: {
        marginLeft: 28,
        marginTop: 30
    },
    input: {
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 250,
    },
})