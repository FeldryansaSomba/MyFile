import { Image, Text, Alert, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth, getData } from '../../utils'
import { IconKembali, TambahFoto } from '../../assets'
import { Button, Gap, Input } from '../../components'
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
    }
    }

    componentDidUpdate(prevProps) {
        const { addProdukResult } = this.props

        if(addProdukResult && prevProps.addProdukResult !== addProdukResult)
        {
            this.props.navigation.replace('MebelApp')
        }
    }

    onContinue = () => {
        const { uid, gambarForDB, nama, harga, namaMebel, noHp, panjang, lebar, tinggi, warna, kayu, desc, lokasi, alamat } = this.state
        if(gambarForDB && nama && harga && namaMebel && noHp && panjang && lebar && tinggi && warna && kayu && desc && lokasi && alamat ) {
        // if(nama && harga && namaMebel && noHp && panjang && lebar && tinggi && warna && kayu && desc && lokasi && alamat) {
            // const data = {
            //     uid:uid,
            //     gambar: gambarForDB,
            //     nama: nama,
            //     harga: harga,
            //     namaMebel: namaMebel,
            //     noHp: noHp,
            //     panjang: panjang,
            //     lebar: lebar,
            //     tinggi: tinggi,
            //     warna: warna,
            //     kayu: kayu,
            //     desc: desc,
            //     lokasi: lokasi,
            //     alamat: alamat,
            //     // status: 'produk'
            // }
            // console.log("Params: ", data)
            this.props.dispatch(addProduk(this.state))
        } else {
            Alert.alert("Error", "Semua Data Harus Diisi")
        }
    }

    componentDidMount() {
        // this._unsubscribe = this.props.navigation.addListener('focus', () => {
        //   do something
          this.getUserData();
        // });
      }

    getUserData = () => {
        getData('userMebel').then(res => {
          const data = res
            console.log('data tambah produk:',data)
          if(data) {
            this.setState({
             uid: data.uid
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
                // const arrayFoto = []
                // arrayFoto.push(fileString)
                // console.log("array foto:", arrayFoto)
                this.setState({
                  gambar: source,
                  gambarForDB: fileString,
                  updateGambar: true
                })
            }
        })
      }

  render() {
    const { navigation} = this.props
    // console.log("uid di tambah produk: ", route.params.uid)
    const { gambar, nama, harga, namaMebel, noHp, panjang, lebar, tinggi, warna, kayu, desc, lokasi, alamat } = this.state
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <ScrollView>
        {/* <Image source={TambahFoto} style={styles.foto}/> */}

        <View style={styles.contentWrapper}>
            <View style={styles.border}>
        <View style={styles.foto}>
        <Image source={gambar ? {uri: gambar} : DefaultImage} style={styles.avatar}/>
            {/* <Text style={styles.text}>Tambahkan Foto</Text> */}
        </View>
        </View>
        <Gap height={10}/>
        <Button
            onPress={() => this.getImage()}
            title={'Tambah Foto'} 
            width={responsiveWidth(100)} 
            height={responsiveHeight(25)} 
            fontSize={RFValue(14, heightMobileUI)} 
            borderRadius={5}
            type='secondary'/>
        </View>

        {/* Input data */}
        <View style={styles.container}>
        <Input 
        label={'Nama Produk'}
        height={responsiveHeight(35)}
        value={nama}
        onChangeText={(nama) => this.setState({nama})}/>
        <Input 
        label={'Harga'}
        height={responsiveHeight(35)}
        value={harga}
        onChangeText={(harga) => this.setState({harga})}/>
        <Input 
        label={'Nama Mebel'}
        height={responsiveHeight(35)}
        value={namaMebel}
        onChangeText={(namaMebel) => this.setState({namaMebel})}/>
        <Input 
        label={'No Telepon'}
        height={responsiveHeight(35)}
        value={noHp}
        onChangeText={(noHp) => this.setState({noHp})}/>

        
        {/* Kustom Produk */}
        <View style={styles.contentKustom}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Input
        kustom
        label={"Panjang"}
        width={responsiveWidth(100)}
        fontSize={RFValue(14, heightMobileUI)}
        value={panjang}
        onChangeText={(panjang) => this.setState({panjang})}
        />

        <Input
        kustom
        label={"Lebar"}
        width={responsiveWidth(95)}
        fontSize={RFValue(14, heightMobileUI)}
        value={lebar}
        onChangeText={(lebar) => this.setState({lebar})}
        />
        
        <Input
        kustom
        label={"Tinggi"}
        width={responsiveWidth(99)}
        fontSize={RFValue(14, heightMobileUI)}
        value={tinggi}
        onChangeText={(tinggi) => this.setState({tinggi})}
        />

        <Input
        kustom
        label={"Warna"}
        width={responsiveWidth(95)}
        fontSize={RFValue(14, heightMobileUI)}
        value={warna}
        onChangeText={(warna) => this.setState({warna})}
        />
        </View>
        <View >
        <Input
        kustom
        label={"Jenis Kayu"}
        width={responsiveWidth(125)}
        fontSize={RFValue(14, heightMobileUI)}
        value={kayu}
        onChangeText={(kayu) => this.setState({kayu})}
        />
        </View>
        </View>

        <Input 
        textArea
        label={'Penjelasan Produk'}
        height={responsiveHeight(35)}
        value={desc}
        onChangeText={(desc) => this.setState({desc})}/>
        <Input 
        label={'Kecamatan'}
        height={responsiveHeight(35)}
        value={lokasi}
        onChangeText={(lokasi) => this.setState({lokasi})}/>
        <Input 
        textArea
        label={'Alamat Lengkap'}
        height={responsiveHeight(35)}
        value={alamat}
        onChangeText={(alamat) => this.setState({alamat})}/>

        <Gap height={30}/>
        <Button title={"Jual"}
        onPress={() => this.onContinue()}
        type='secondary'
        fontSize={RFValue(16, heightMobileUI)} 
        borderRadius={5}
        height={responsiveHeight(36)} />
        <Gap height={30}/>
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
      width: responsiveWidth(150),
      height: responsiveHeight(150),
      borderRadius: 15,

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
    },
    contentKustom: {
        backgroundColor: colors.ketiga,
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingTop: 5,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 5
      },
})