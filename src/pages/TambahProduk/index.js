import { Text, Image, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali, TambahFoto } from '../../assets'
import { Input } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

export default class TambahProduk extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <ScrollView>
        {/* <Image source={TambahFoto} style={styles.foto}/> */}
        <View style={styles.contentWrapper}>
            <View style={styles.border}>
        <TouchableOpacity style={styles.foto}>
            <Text style={styles.text}>Tambahkan Foto</Text>
        </TouchableOpacity>
        </View>
        </View>
        {/* Input data */}
        <View style={styles.container}>
        <Input 
        label={'Nama Produk'}
        height={responsiveHeight(35)}/>
        <Input 
        label={'Harga'}
        height={responsiveHeight(35)}/>
        <Input 
        label={'Nama Mebel'}
        height={responsiveHeight(35)}/>
        <Input 
        label={'No Telepon'}
        height={responsiveHeight(35)}/>
        <Input 
        label={'Daerah'}
        height={responsiveHeight(35)}/>
        <Input 
        textArea
        label={'Alamat Lengkap'}
        height={responsiveHeight(35)}/>
        <Input 
        textArea
        label={'Deskripsi Produk'}
        height={responsiveHeight(35)}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    icon: {
        marginLeft: 28,
        marginTop: 30
    },
    container: {
        paddingHorizontal: 30
    },
    foto: {
        width: responsiveWidth(150),
        height: responsiveHeight(150),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: colors.ketiga,
        borderRadius: 15,
        borderStyle: 'dashed'
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(18),
        color: colors.kedua
    },
    contentWrapper: {
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 15
    },
    border: {
        width: responsiveWidth(170),
        height: responsiveHeight(170),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: colors.kedua
    }
})