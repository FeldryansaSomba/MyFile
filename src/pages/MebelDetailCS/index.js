import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils'
import { IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {BottomPesan, ProdukSlider} from '../../components';


export default class MebelDetailCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produk: this.props.route.params.produk,
            images: this.props.route.params.produk.gambar
        }
    }
  render() {
    const { navigation } = this.props
    const {produk, images} = this.state
    // console.log("paramater : ", this.props.route.params);
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <ProdukSlider images={images}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrol}>
        <View style={styles.container}>
        <Text style={styles.nama}>{produk.nama}</Text>
        <Text style={styles.mebel}>{produk.namaMebel}</Text>
        <View style={styles.garis}>
        <Text style={styles.harga}>{produk.harga}</Text>
        <Text style={styles.lokasi}>{produk.lokasi}</Text>
        </View>
        </View>
        <Text style={styles.text}>Deskripsi :</Text>
        <Text style={styles.desc}>{produk.desc}</Text>
        <Text style={styles.desc}>Panjang : {produk.panjang}</Text>
        <Text style={styles.desc}>Lebar : {produk.lebar}</Text>
        <Text style={styles.desc}>Tinggi : {produk.tinggi}</Text>
        <Text style={styles.desc}>Warana : {produk.warna}</Text>
        <Text style={styles.desc}>Kayu : {produk.kayu}</Text>
        </View>
        </ScrollView>
        <BottomPesan/>
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
    nama: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.kedua,
        fontSize: RFValue(20, heightMobileUI),
        marginBottom: 4,
        marginTop: 17
    },
    mebel: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.kedua,
        fontSize: RFValue(16, heightMobileUI),
        marginBottom: 16
    },
    harga: {
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua,
        fontSize: RFValue(22, heightMobileUI),
    },
    lokasi: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.kedua,
        fontSize: RFValue(15, heightMobileUI),
    },
    garis: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: 34,
    },
    text: {
        paddingHorizontal: 50,
        marginTop: 13,
        fontFamily: 'Montserrat-Medium',
        color: colors.kedua,
        fontSize: RFValue(15, heightMobileUI),
        marginBottom: 4
    },
    desc: {
        paddingHorizontal: 50,
        fontFamily: 'Montserrat-Medium',
        color: colors.kedua,
        fontSize: RFValue(15, heightMobileUI),
    },
    scrol: {
        marginBottom: 17
    }
}
)