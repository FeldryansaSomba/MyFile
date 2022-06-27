import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData } from '../../utils'
import { IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {BottomPesan, Gap, Input, ProdukSlider} from '../../components';
import { connect } from 'react-redux';
import { getDetailProduk } from '../../actions/DetailProdukAction'
import { masukKePesanan } from '../../actions/PesananAction'


class MebelDetailCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produk: this.props.route.params.produk,
            images: this.props.route.params.produk.gambar,
            kustom: "",
            noHp: "",
            alamat: "",
            uid: ""
        }
    }

    componentDidMount() {
        const { produk } = this.state
        this.props.dispatch(getDetailProduk(produk.produk))
    }
    
    componentDidUpdate(prevProps) {
        const { savePesananResult } = this.props
    
        if(savePesananResult && prevProps.savePesananResult !== savePesananResult)
        {
          this.props.navigation.navigate('PesananCS');
        }
    }

    beliProduk = () => {
        const {kustom, noHp, alamat} = this.state

        getData('user').then((res) => {
      
            if(res) {
                //Simpan uid local storage ke state
              this.setState({
                uid: res.uid
              })

              //validasi form
              if(kustom && noHp && alamat){
                //hubungkan ke action Pesanan
                this.props.dispatch(masukKePesanan(this.state))
              }else {
                Alert.alert('Error', 'Nomor Handphone dan alamat harus diisi')
              }
            }else {
              Alert.alert('Error', 'Silahkan Login Terlebih Dahulu')
              this.props.navigation.replace("PilihUser")
            }
          })
    }


  render() {
    const { navigation, savePesananLoading } = this.props
    const {produk, images, kustom, noHp, alamat} = this.state
    // console.log("paramater : ", this.props.route.params);
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ProdukSlider images={images}/>
        <View style={styles.scrol}>
        <View style={styles.container}>
        <Text style={styles.nama}>{produk.nama}</Text>
        <Text style={styles.mebel}>{produk.namaMebel}</Text>
        <View style={styles.garis}>
        <Text style={styles.harga}>{produk.harga}</Text>
        <Text style={styles.lokasi}>{produk.lokasi}</Text>
        </View>
        <Gap height={10}/>
        <Text style={styles.lokasi}>No Telepon : {produk.noHp}</Text>
        </View>
        <Text style={styles.text}>Deskripsi :</Text>
        <Text style={styles.desc}>{produk.desc}</Text>
        <Text style={styles.desc}>Panjang : {produk.panjang}</Text>
        <Text style={styles.desc}>Lebar : {produk.lebar}</Text>
        <Text style={styles.desc}>Tinggi : {produk.tinggi}</Text>
        <Text style={styles.desc}>Warana : {produk.warna}</Text>
        <Text style={styles.desc}>Kayu : {produk.kayu}</Text>
        </View>
        <View style={styles.container}>
        <Input
        placeholder={'Masukan ukuran yang anda inginkan...'}
        label={"Kustom produk anda (opsional)"}
        textArea
        fontSize={RFValue(14, heightMobileUI)}
        value={kustom}
        onChangeText={(kustom) => this.setState({kustom})}/>
        <Input 
        label={"No Hp Anda"}
        fontSize={RFValue(14, heightMobileUI)}
        value={noHp}
        onChangeText={(noHp) => this.setState({noHp})}/>
        <Input 
        label={"Masukan Alamat Anda"}
        textArea
        fontSize={RFValue(14, heightMobileUI)}
        value={alamat}
        onChangeText={(alamat) => this.setState({alamat})}/>
        <Gap height={15}/>
        </View>
        </ScrollView>
        <BottomPesan onPress={() => this.beliProduk()} loading={savePesananLoading}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    getDetailProdukResult: state.ProdukReducer.getDetailProdukResult,
    savePesananLoading: state.PesananReducer.savePesananLoading,
    savePesananResult: state.PesananReducer.savePesananResult,
    savePesananError: state.PesananReducer.savePesananError,
})

export default connect(mapStateToProps, null)(MebelDetailCS)

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