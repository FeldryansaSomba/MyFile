import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconChat, IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {BottomPesan, Gap, Input, ProdukSlider} from '../../components';

class DetailPesananCS extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pesanan: this.props.route.params.pesanan,
      images: this.props.route.params.pesanan.product.gambar,
    }
  }

  sendOnWa = () => {
    let mobile = this.props.route.params.pesanan.product.noHp;
    if(mobile){
      // Kode negara 62 = Indonesia
        let url = 'whatsapp://send?text=' + '&phone=62' + this.props.route.params.pesanan.product.noHp;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
    } else {
      alert('Nomor telepon ini tidak terdaftar di Whatsapp.')
    }
  }

  render () {
    const { navigation } = this.props
    const {pesanan, images} = this.state
    return (
      <View style={styles.page}>
          <TouchableOpacity style={styles.icon} onPress={()=> navigation.goBack()}>
          <IconKembali />
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
          <ProdukSlider images={images}/>
          <View style={styles.scrol}>

          <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
          
          <View style={{flex: 1}}>
          <Text style={styles.nama}>{pesanan.product.nama}</Text>
          <Text style={styles.mebel}>{pesanan.product.namaMebel}</Text>
          </View>
  
          <TouchableOpacity style={styles.chat} 
          onPress={() => this.sendOnWa()}
          >
          <IconChat/>
          </TouchableOpacity>
          </View>
  
  
          <View style={styles.garis}>
          <Text style={styles.harga}>Rp. {pesanan.product.harga}</Text>
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
          <Text style={styles.desc}>Alamat             : {pesanan.product.alamat}</Text>
          </View>
  
          <Text style={styles.textKustom}>Keterangan Pesanan  :</Text>
          <View style={styles.container}>
          <View style={{borderWidth : 2, borderColor: colors.pertama,  borderRadius: 10, padding: 5}}>
          <Gap height={5}/>
          
          <View >
          <Text style={styles.dataKustom}>Panjang (cm) : {pesanan.panjang}</Text>
          <Text style={styles.dataKustom}>Lebar      (cm) : {pesanan.lebar}</Text>
          <Text style={styles.dataKustom}>Tinggi     (cm) : {pesanan.tinggi}</Text>
          </View>

          <Text style={styles.dataKustom}>Warna              : {pesanan.warna}</Text>
          <Text style={styles.dataKustom}>Kayu                 : {pesanan.kayu}</Text>

          <Gap height={10}/>
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
          marginTop: 25
      },
        nama: {
            fontFamily: 'Montserrat-SemiBold',
            color: colors.kedua,
            fontSize: RFValue(18, heightMobileUI),
            marginBottom: 5,
            marginTop: 17
        },
        mebel: {
            fontFamily: 'Montserrat-SemiBold',
            color: colors.kedua,
            fontSize: RFValue(15, heightMobileUI),
            marginBottom: 16
        },
        harga: {
            fontFamily: 'Montserrat-Bold',
            color: colors.kedua,
            fontSize: RFValue(18, heightMobileUI),
        },
        lokasi: {
            fontFamily: 'Montserrat-SemiBold',
            color: colors.kedua,
            fontSize: RFValue(14, heightMobileUI),
        },
        garis: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        container: {
            paddingHorizontal: 25,
        },
        text: {
            paddingHorizontal: 30,
            marginTop: 13,
            fontFamily: 'Montserrat-Medium',
            color: colors.kedua,
            fontSize: RFValue(14, heightMobileUI),
            marginBottom: 4
        },
        desc: {
            paddingHorizontal: 30,
            fontFamily: 'Montserrat-Medium',
            color: colors.kedua,
            fontSize: RFValue(14, heightMobileUI),
        },
        scrol: {
            marginBottom: 17
        },
        dataKustom: {
          paddingHorizontal: 10,
          fontFamily: 'Montserrat-Bold',
          color: colors.kedua,
          fontSize: RFValue(14, heightMobileUI),
          marginTop: 2
        },
        textKustom: {
          fontFamily: 'Montserrat-SemiBold',
          color: colors.kedua,
          fontSize: RFValue(14, heightMobileUI),
          paddingLeft: 30,
          marginBottom: 3
        }
})