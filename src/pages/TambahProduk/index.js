import { Text, Alert, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali, TambahFoto } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils'
import { connect } from 'react-redux'
import { addProduk } from '../../actions/AddProdukAction'

class TambahProduk extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        uid: '',
        gambar: '',
        namaProduk: '',
        harga: '',
        namaMbl: '',
        noHp: '',
        panjang: '',
        lebar: '',
        tinggi: '',
        warna: '',
        kayu: '',
        penjelasan: '',
        kecamatan: '',
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
        const { gambar, namaProduk, harga, namaMbl, noHp, panjang, lebar, tinggi, warna, kayu, penjelasan, kecamatan, alamat } = this.state

        if(namaProduk && harga && namaMbl && noHp && panjang && lebar && tinggi && warna && kayu && penjelasan && kecamatan && alamat) {
            const data = {
                namaProduk: namaProduk,
                harga: harga,
                namaMbl: namaMbl,
                noHp: noHp,
                panjang: panjang,
                lebar: lebar,
                tinggi: tinggi,
                warna: warna,
                kayu: kayu,
                penjelasan: penjelasan,
                kecamatan: kecamatan,
                alamat: alamat,
                status: 'produk'
            }
            console.log("Params: ", data)
            this.props.dispatch(addProduk(data))
        } else {
            Alert.alert("Error", "Semua Data Harus Diisi")
        }
    }

  render() {
    const { navigation } = this.props
    const { gambar, namaProduk, harga, namaMbl, noHp, panjang, lebar, tinggi, warna, kayu, penjelasan, kecamatan, alamat } = this.state
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
        height={responsiveHeight(35)}
        value={namaProduk}
        onChangeText={(namaProduk) => this.setState({namaProduk})}/>
        <Input 
        label={'Harga'}
        height={responsiveHeight(35)}
        value={harga}
        onChangeText={(harga) => this.setState({harga})}/>
        <Input 
        label={'Nama Mebel'}
        height={responsiveHeight(35)}
        value={namaMbl}
        onChangeText={(namaMbl) => this.setState({namaMbl})}/>
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
        value={penjelasan}
        onChangeText={(penjelasan) => this.setState({penjelasan})}/>
        <Input 
        label={'Kecamatan'}
        height={responsiveHeight(35)}
        value={kecamatan}
        onChangeText={(kecamatan) => this.setState({kecamatan})}/>
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