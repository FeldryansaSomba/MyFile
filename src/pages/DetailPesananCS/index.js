import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { IconChat, IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {BottomPesan, Gap, Input, ProdukSlider} from '../../components';

class DetailPesananCS extends Component {
    // console.log('data di detailpesananCS :', pesanan)
  constructor(props) {
    super(props)
  
    this.state = {
      pesanan: this.props.route.params.pesanan,
      images: this.props.route.params.pesanan.product.gambar,
    }
  }

  render () {
    const { navigation } = this.props
    const {pesanan, images} = this.state
    // console.log("paramater di detail pesanan cs : ", this.props.route.params);
    return (
      <View style={styles.page}>
          <TouchableOpacity style={styles.icon} onPress={()=> navigation.goBack()}>
          <IconKembali />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
          <ProdukSlider images={images}/>
          <View style={styles.scrol}>
          <View style={styles.container}>
          <View style={styles.contant}>
          
          <View style={{flex: 1}}>
          <Text style={styles.nama}>{pesanan.product.nama}</Text>
          </View>
  
          <TouchableOpacity style={styles.chat} >
          <IconChat/>
          </TouchableOpacity>
          </View>
  
          <Text style={styles.mebel}>{pesanan.product.namaMebel}</Text>
  
          <View style={styles.garis}>
          <Text style={styles.harga}>{pesanan.product.harga}</Text>
          <Text style={styles.lokasi}>{pesanan.product.lokasi}</Text>
          </View>
          <Gap height={10}/>
          <Text style={styles.lokasi}>No Hp : {pesanan.product.noHp}</Text>
          </View>
          <Text style={styles.text}>Deskripsi Produk:</Text>
          <Text style={styles.desc}>{pesanan.product.desc}</Text>
          <Text style={styles.desc}>Panjang (cm) : {pesanan.product.panjang}</Text>
          <Text style={styles.desc}>Lebar      (cm) : {pesanan.product.lebar}</Text>
          <Text style={styles.desc}>Tinggi     (cm) : {pesanan.product.tinggi}</Text>
          <Text style={styles.desc}>Warna              : {pesanan.product.warna}</Text>
          <Text style={styles.desc}>Kayu                 : {pesanan.product.kayu}</Text>
          </View>
  
          <Text style={styles.textKustom}>Keterangan Pesanan  :</Text>
          <View style={styles.container}>
          <View style={{borderWidth : 2, borderColor: colors.pertama, height: responsiveHeight(180), borderRadius: 10}}>
          <Gap height={5}/>
          <Text style={styles.dataKustom}>Panjang (cm) : {pesanan.panjang}</Text>
          <Text style={styles.dataKustom}>Lebar      (cm) : {pesanan.lebar}</Text>
          <Text style={styles.dataKustom}>Tinggi     (cm) : {pesanan.tinggi}</Text>
          <Text style={styles.dataKustom}>Warna              : {pesanan.warna}</Text>
          <Text style={styles.dataKustom}>Kayu                 : {pesanan.kayu}</Text>
          <Text style={styles.dataKustom }>No Telepon     : {pesanan.noHp}</Text>
          <Text style={styles.dataKustom }>Alamat Lengkap : {pesanan.alamat}</Text>
          <Text style={styles.dataKustom }>Catatan : {pesanan.catatan}</Text>
          <Gap height={5}/>
          </View>
          <Gap height={25}/>
          </View>
          </ScrollView>
          
        </View>
    )
  }
}

export default DetailPesananCS

const styles = StyleSheet.create({
      contant: {
        flexDirection: 'row',
      },
        page: {
            flex: 1,
            backgroundColor: colors.keempat
        },
        icon: {
            marginLeft: 28,
            marginTop: 30
        },
        chat: {
          backgroundColor: colors.kedua,
          width: responsiveWidth(45),
          height: responsiveHeight(38),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          borderRadius: 10,
          marginTop: 10
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
        },
        dataKustom: {
          paddingHorizontal: 10,
          fontFamily: 'Montserrat-Bold',
          color: colors.kedua,
          marginTop: 2
        },
        textKustom: {
          fontFamily: 'Montserrat-SemiBold',
          color: colors.kedua,
          fontSize: RFValue(15, heightMobileUI),
          paddingLeft: 34,
          marginBottom: 3
        }
})