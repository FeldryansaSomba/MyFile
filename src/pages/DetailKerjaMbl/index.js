import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconChat, IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {BottomPesan, Gap, ProdukSlider} from '../../components';
import { getProsesPesananMbl } from '../../actions/ProsesMblAction';

const DetailKerjaMbl = (props) => {

    const data = props.route.params.data.dataPesanan
    const idPesanan = props.route.params.data.idPesanan
    const idMebel = props.route.params.data.idMebel
    const idPembeli = props.route.params.data.idPembeli
    const dispatch = props.route.params.dispatch

    const selesaiPesanan = () =>{
      props.navigation.navigate('KerjaMbl')
      dispatch(getProsesPesananMbl(idPesanan, idMebel, idPembeli, 'selesai'))
    }

    const sendOnWa = () => {
      let mobile = props.route.params.data.dataPesanan.noHp;
      if(mobile){
        // Kode negara 62 = Indonesia
          let url = 'whatsapp://send?text=' + '&phone=62' + props.route.params.data.dataPesanan.noHp;
          Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
          }).catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      } else {
        alert('Nomor telepon pembeli tidak terdaftar di Whatsapp.')
      }
    }


  return (
    <View style={styles.page}>
        <TouchableOpacity style={styles.icon} onPress={()=> props.navigation.goBack()}>
        <IconKembali />
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
        <ProdukSlider images={data.product.gambar}/>
        <View style={styles.scrol}>

        <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        
        <View style={{flex: 1}}>
        <Text style={styles.nama}>{data.product.nama}</Text>
        <Text style={styles.mebel}>{data.product.namaMebel}</Text>
        </View>

        <TouchableOpacity style={styles.chat} 
        onPress={() => sendOnWa()}
        >
        <IconChat/>
        </TouchableOpacity>
        </View>


        <View style={styles.garis}>
        <Text style={styles.harga}>Rp. {data.product.harga}</Text>
        <Text style={styles.lokasi}>{data.product.lokasi}</Text>
        </View>
        <Gap height={10}/>
        </View>
        <Text style={styles.text}>Deskripsi Produk :</Text>
        <Text style={styles.desc}>{data.product.desc}</Text>
        <Text style={styles.desc}>Panjang (cm) : {data.product.panjang}</Text>
        <Text style={styles.desc}>Lebar      (cm) : {data.product.lebar}</Text>
        <Text style={styles.desc}>Tinggi     (cm) : {data.product.tinggi}</Text>
        <Text style={styles.desc}>Warana            : {data.product.warna}</Text>
        <Text style={styles.desc}>Kayu                 : {data.product.kayu}</Text>
        <Text style={styles.desc}>Alamat             : {data.product.alamat}</Text>
        </View>

        <Text style={styles.textKustom}>Keterangan Pesanan  :</Text>
        <View style={styles.container}>
        <View style={{borderWidth : 2, borderColor: colors.pertama, borderRadius: 10, padding: 5}}>
        <Gap height={5}/>
        
        <View >
        <Text style={styles.dataKustom}>Panjang (cm) : {data.panjang}</Text>
        <Text style={styles.dataKustom}>Lebar      (cm) : {data.lebar}</Text>
        <Text style={styles.dataKustom}>Tinggi     (cm) : {data.tinggi}</Text>
        </View>
        <Text style={styles.dataKustom}>Warna              : {data.warna}</Text>
        <Text style={styles.dataKustom}>Kayu                 : {data.kayu}</Text>

        <Gap height={10}/>
        <Text style={styles.dataKustom }>No Telepon     : {data.noHp}</Text>
        <Text style={styles.dataKustom }>Alamat Lengkap : {data.alamat}</Text>
        <Text style={styles.dataKustom }>Catatan : {data.catatan}</Text>
        <Gap height={5}/>
        </View>
        
        <Gap height={25}/>
        </View>
        </ScrollView>

    {
        data.product.status == 'selesai'? null
        :
        <BottomPesan selesai  onPressSelesai={
          ()=>selesaiPesanan()
        }/>
      }
      </View>
  )
}

export default DetailKerjaMbl

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