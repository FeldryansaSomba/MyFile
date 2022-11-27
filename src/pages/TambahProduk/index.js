import { Image, Text, Alert, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth, getData } from '../../utils'
import { GambarAdd, IconKembali, TambahFoto } from '../../assets'
import { Button, Gap, Input, JenisProduk } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils'
import { connect } from 'react-redux'
import { addProduk } from '../../actions/AddProdukAction'
import {launchImageLibrary} from 'react-native-image-picker';
import {DefaultImage} from '../../assets'


class TambahProduk extends Component {
    constructor(props) {
        // console.log("Constructor di tambah produk:",props)
      super(props)
   
      this.state = {
        uid: '',
        gambar: false,
        gambarForDB: [],
        updateGambar: false,
        gambarLama: [],
        nama: '',
        harga: '',
        namaMebel: '',
        noHp: '',
        panjang: '',
        lebar: '',
        tinggi: '',
        warna: '',
        kayu: '',
        desc: '',
        lokasi: '',
        alamat: '',
        jenisProduk: '',
        map: '',
    }
    }

    componentDidUpdate(prevProps) {
        const { addProdukResult } = this.props

        if(addProdukResult && prevProps.addProdukResult !== addProdukResult)
        {
          Alert.alert("Sukses", "Berhasil dijual!")
            this.props.navigation.replace('MebelApp')
        }
    }

    onContinue = () => {
        const { gambar, nama, harga, lebar, tinggi, warna, kayu, desc, lokasi, alamat, jenisProduk, map } = this.state
        if(gambar && nama && harga && lebar && tinggi && warna && kayu && desc && lokasi && alamat && jenisProduk && map ) {
            this.props.dispatch(addProduk(this.state))
        } else {
            Alert.alert("Error", "Semua Data Harus Diisi!!")
        }
    }

    componentDidMount() {
        this.getUserData();
      }

    getUserData = () => {
        getData('userMebel').then(res => {
          const data = res
          if(data) {
            this.setState({
             uid: data.uid,
             noHp: data.noHp,
             namaMebel: data.nama
            })
          }else {
            this.props.navigation.replace('MasukMebel')
          }
        })
      }

      getImage = () => {
        launchImageLibrary({quality: 1, maxHeight: 500, maxWidth: 500, includeBase64: true}, (response) => {
            if(response.didCancel || response.errorCode || response.errorMessage) {
                Alert.alert("Error", "Anda tidak memilih foto")
            }else {
                const source = response.assets[0].uri;
                const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

                this.setState({
                  gambar: source,
                  gambarForDB: fileString,
                  updateGambar: true
                })
            }
        })
      }

     

     

  render() {
    const { navigation, addProdukLoading} = this.props
    const { jenisProduk, gambar, nama, harga, panjang, lebar, tinggi, warna, kayu, desc, lokasi, alamat, map } = this.state
  
  
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <Gap height={5}/>
        <ScrollView>

        <View style={styles.contentWrapper}>
            <View style={styles.border}>
        <Image source={gambar ? {uri: gambar} : TambahFoto} style={styles.avatar}/>
        </View>
        <Gap height={10}/>
        <Button
            onPress={() => this.getImage()}
            title={'Tambah Foto'} 
            width={responsiveWidth(125)} 
            height={responsiveHeight(25)} 
            fontSize={RFValue(14, heightMobileUI)} 
            borderRadius={5}
            type='secondary'/>
        </View>

        {/* Input data */}
        <View style={styles.container}>

        <JenisProduk 
        label="Jenis Produk"
        height={responsiveHeight(30)}
        fontSize={RFValue(14)}
        onValueChange={(jenisProduk) => this.setState({jenisProduk})}
        selectedValue={jenisProduk}/>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Input 
        label={'Nama Produk'}
        fontSize={RFValue(14)}
        height={responsiveHeight(30)}
        width={responsiveWidth(137)}
        value={nama}
        onChangeText={(nama) => this.setState({nama})}/>
        <Input 
        label={'Harga'}
        fontSize={RFValue(14)}
        height={responsiveHeight(30)}
        width={responsiveWidth(137)}
        keyboardType='numeric'
        value={harga}
        onChangeText={(harga) => this.setState({harga})}/>
        </View>

        <Gap height={5}/>
        {/* Kustom Produk */}
        <View style={styles.contentKustom}>
        <View >
        <Input
        kustom
        label={"Panjang (cm)"}
        width={responsiveWidth(100)}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)}
        keyboardType='numeric'
        value={panjang}
        onChangeText={(panjang) => this.setState({panjang})}
        />
        <Input
        kustom
        label={"Lebar      (cm)"}
        keyboardType='numeric'
        width={responsiveWidth(100)}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)}
        value={lebar}
        onChangeText={(lebar) => this.setState({lebar})}
        />
        <Input
        kustom
        label={"Tinggi     (cm)"}
        keyboardType='numeric'
        width={responsiveWidth(100)}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)}
        value={tinggi}
        onChangeText={(tinggi) => this.setState({tinggi})}
        />
        </View>
        <View>
        <Input
        kustom
        label={"Warna"}
        width={responsiveWidth(120)}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)}
        value={warna}
        onChangeText={(warna) => this.setState({warna})}
        />
        <Input
        kustom
        label={"Jenis Kayu"}
        width={responsiveWidth(120)}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)}
        value={kayu}
        onChangeText={(kayu) => this.setState({kayu})}
        />
        </View>
        </View>

        <Input 
        textArea
        label={'Penjelasan Produk'}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)} 
        value={desc}
        onChangeText={(desc) => this.setState({desc})}/>
        <Input 
        label={'Kecamatan'}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)} 
        value={lokasi}
        onChangeText={(lokasi) => this.setState({lokasi})}/>
        <Input 
        textArea
        label={'Alamat Lengkap'}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)} 
        value={alamat}
        onChangeText={(alamat) => this.setState({alamat})}/>
        <Input 
        label={'URL Alamat Google Map'}
        height={responsiveHeight(30)}
        fontSize={RFValue(14, heightMobileUI)} 
        value={map}
        onChangeText={(map) => this.setState({map})}/>

        <Gap height={30}/>
        <View style={{alignItems: 'center'}}>
        <Button title={"Jual"}
        onPress={() => this.onContinue()}
        loading={addProdukLoading}
        type='secondary'
        width={responsiveWidth(282)}
        fontSize={RFValue(14, heightMobileUI)} 
        borderRadius={5}
        height={responsiveHeight(36)} />
        <Gap height={30}/>
        </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStatetoProps = (state) => ({
    addProdukLoading: state.ProdukReducer.addProdukLoading,
    addProdukResult: state.ProdukReducer.addProdukResult,
    addProdukError: state.ProdukReducer.addProdukError,
})

export default connect(mapStatetoProps, null) (TambahProduk)

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    avatar: {
      width: responsiveWidth(140),
      height: responsiveHeight(140),
      borderRadius: 15,

  },
    icon: {
        marginLeft: 28,
        marginTop: 30
    },
    container: {
        paddingHorizontal: 28
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: RFValue(18, heightMobileUI),
        color: colors.kedua
    },
    contentWrapper: {
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 15
    },
    border: {
        width: responsiveWidth(150),
        height: responsiveHeight(150),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: colors.kedua
    },
    contentKustom: {
      backgroundColor: colors.ketiga,
      borderRadius: 5,
      paddingHorizontal: 25,
      paddingTop: 5,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
      },
})