import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { IconChat, IconKembali } from '../../assets'
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
            panjang: "",
            lebar: "",
            tinggi: "",
            warna: "",
            kayu: "",
            noHp: "",
            alamat: "",
            uid: "",
            namaUser: ""
        }
    }

    componentDidMount() {
        const { produk } = this.state
        this.props.dispatch(getDetailProduk(produk.produk))
        // console.log("data produk: ", produk)
    }
    
    componentDidUpdate(prevProps) {
        const { savePesananResult } = this.props
    
        if(savePesananResult && prevProps.savePesananResult !== savePesananResult)
        {
          this.props.navigation.navigate('PesananCS');
        }
    }

    beliProduk = () => {
        const {noHp, alamat} = this.state

        getData('user').then((res) => {
      
            if(res) {
                //Simpan uid local storage ke state
              this.setState({
                uid: res.uid,
                namaUser: res.nama
              })

              //validasi form
              if(noHp && alamat){
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
    const {produk, images, panjang, lebar, tinggi, warna, kayu, noHp, alamat} = this.state
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
        <View style={styles.contant}>
        
        <View style={{flex: 1}}>
        <Text style={styles.nama}>{produk.nama}</Text>
        </View>

        <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('ChattingCS')}>
        <IconChat/>
        </TouchableOpacity>
        </View>

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

        <Text style={styles.textKustom}>Kustom produk anda (
        <Text style={{
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua,
        fontSize: RFValue(14, heightMobileUI),}}>
        opsional
        </Text>)
        </Text>
        <View style={styles.container}>
        {/* Kustom Produk */}
        <View style={styles.contentKustom}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Input
        kustom
        label={"Panjang"}
        width={responsiveWidth(100)}
        fontSize={RFValue(14, heightMobileUI)}
        value={panjang}
        onChangeText={(panjang) => this.setState({panjang})}/>

        <Input
        kustom
        label={"Lebar"}
        width={responsiveWidth(95)}
        fontSize={RFValue(14, heightMobileUI)}
        value={lebar}
        onChangeText={(lebar) => this.setState({lebar})}/>
        
        <Input
        kustom
        label={"Tinggi"}
        width={responsiveWidth(99)}
        fontSize={RFValue(14, heightMobileUI)}
        value={tinggi}
        onChangeText={(tinggi) => this.setState({tinggi})}/>

        <Input
        kustom
        label={"Warna"}
        width={responsiveWidth(95)}
        fontSize={RFValue(14, heightMobileUI)}
        value={warna}
        onChangeText={(warna) => this.setState({warna})}/>
        </View>
        <View style={{paddingHorizontal: 18}}>
        <Input
        kustom
        label={"Jenis Kayu"}
        width={responsiveWidth(125)}
        fontSize={RFValue(14, heightMobileUI)}
        value={kayu}
        onChangeText={(kayu) => this.setState({kayu})}/>
        </View>
        </View>

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
    contentKustom: {
      backgroundColor: colors.ketiga,
      borderRadius: 5,
      paddingHorizontal: 27,
      paddingTop: 5,
      paddingBottom: 20
    },
    textKustom: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.kedua,
      fontSize: RFValue(14, heightMobileUI),
      paddingLeft: 34,
      marginBottom: 3
    }
}
)