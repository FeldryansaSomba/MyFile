import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Alert, Linking } from 'react-native'
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
            namaUser: "",
            catatan: ""
        }
    }

    // componentDidMount() {
    //     const { produk } = this.state
    //     this.props.dispatch(getDetailProduk(produk.produk))
    //     // console.log("data produk: ", produk)
    // }
    
    componentDidUpdate(prevProps) {
        const { savePesananResult } = this.props
    
        if(savePesananResult && prevProps.savePesananResult !== savePesananResult)
        {
          Alert.alert("Sukses", "Pesanan Anda Berhasil!")
          this.props.navigation.navigate('PesananCS');
        }
    }

    beliProduk = () => {
        const {alamat} = this.state

        getData('user').then((res) => {
      
            if(res) {
                //Simpan uid local storage ke state
              this.setState({
                uid: res.uid,
                namaUser: res.nama,
                noHp: res.noHp
              })

              //validasi form
              if(alamat){
                //hubungkan ke action Pesanan
                this.props.dispatch(masukKePesanan(this.state))
              }else {
                Alert.alert('Error', 'Alamat anda harus diisi')
              }
            }else {
              Alert.alert('Error', 'Silahkan Login Terlebih Dahulu')
              this.props.navigation.replace("PilihUser")
            }
          })
    }

    // LinkingPage = () => {
    //   const openUrl = async (url) => {
    //     const isSupported = await Linking.canOpenURL(url);
    //     if (isSupported) {
    //       await Linking.openURL(url);
    //     }else {
    //       Alert.alert(`Don't know how to open this url: ${url}` );
    //     }
    //   }
    // }

    sendOnWa = () => {
      let mobile = this.props.route.params.produk.noHp;
      if(mobile){
        // Kode negara 62 = Indonesia
          let url = 'whatsapp://send?text=' + '&phone=62' + this.props.route.params.produk.noHp;
          Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
          }).catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      } else {
        alert('Nomor telepon ini tidak terdaftar di Whatsapp.')
      }
    }

  render() {
    const { navigation, savePesananLoading } = this.props
    const {produk, images, panjang, lebar, tinggi, warna, kayu, alamat, catatan} = this.state
    // console.log("paramater : ", this.props.route.params);
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <Gap height={10}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ProdukSlider images={images}/>
        <View style={styles.scrol}>
          
        <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        
        <View style={{flex: 1,}}>
        <Text style={styles.nama}>{produk.nama}</Text>
        <Text style={styles.mebel}>{produk.namaMebel}</Text>
        </View>

        <TouchableOpacity style={styles.chat} 
        onPress={() => this.sendOnWa()}
        >
        <IconChat/>
        </TouchableOpacity>
        </View>


        <View style={styles.garis}>
        <Text style={styles.harga}>{produk.harga}</Text>
        <Text style={styles.lokasi}>{produk.lokasi}</Text>
        </View>
        <Gap height={10}/>
        <Text style={styles.lokasi}>No Hp : {produk.noHp}</Text>
        </View>
        <Text style={styles.text}>Deskripsi :</Text>
        <Text style={styles.desc}>{produk.desc}</Text>
        <Text style={styles.desc}>Panjang (cm) : {produk.panjang}</Text>
        <Text style={styles.desc}>Lebar      (cm) : {produk.lebar}</Text>
        <Text style={styles.desc}>Tinggi     (cm) : {produk.tinggi}</Text>
        <Text style={styles.desc}>Warna              : {produk.warna}</Text>
        <Text style={styles.desc}>Kayu                 : {produk.kayu}</Text>
        <Text style={styles.desc}>Alamat             : {produk.alamat}</Text>
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
        <View >
        <Input
        kustom
        label={"Panjang (cm)"}
        keyboardType='numeric'
        width={responsiveWidth(100)}
        fontSize={RFValue(13, heightMobileUI)}
        value={panjang}
        onChangeText={(panjang) => this.setState({panjang})}/>
        <Input
        kustom
        label={"Lebar      (cm)"}
        keyboardType='numeric'
        width={responsiveWidth(100)}
        fontSize={RFValue(13, heightMobileUI)}
        value={lebar}
        onChangeText={(lebar) => this.setState({lebar})}/>       
        <Input
        kustom
        label={"Tinggi     (cm)"}
        keyboardType='numeric'
        width={responsiveWidth(100)}
        fontSize={RFValue(13, heightMobileUI)}
        value={tinggi}
        onChangeText={(tinggi) => this.setState({tinggi})}/>
        </View>
        {/* <Gap width={50}/> */}
        <View >
        <Input
        kustom
        label={"Warna"}
        width={responsiveWidth(120)}
        fontSize={RFValue(13, heightMobileUI)}
        value={warna}
        onChangeText={(warna) => this.setState({warna})}/>
        <Input
        kustom
        label={"Jenis Kayu"}
        width={responsiveWidth(120)}
        fontSize={RFValue(13, heightMobileUI)}
        value={kayu}
        onChangeText={(kayu) => this.setState({kayu})}/>
        </View>
        </View>
        <Input 
        label={"Alamat Lengkap Anda"}
        textArea
        fontSize={RFValue(13, heightMobileUI)}
        value={alamat}
        onChangeText={(alamat) => this.setState({alamat})}/>
        <Input 
        label={"Catatan"}
        textArea
        fontSize={RFValue(13, heightMobileUI)}
        value={catatan}
        onChangeText={(catatan) => this.setState({catatan})}/>
        <Gap height={15}/>
        </View>
        </ScrollView>
        <BottomPesan title={"Beli"} onPress={() => this.beliProduk()} loading={savePesananLoading}/>
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
  // contant: {
  //   flexDirection: 'row',
  // },
    page: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    icon: {
        marginLeft: 28,
        marginTop: 25
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
        textTransform: 'capitalize',
        color: colors.kedua,
        fontSize: RFValue(18, heightMobileUI),
        marginBottom: 5,
        marginTop: 17
    },
    mebel: {
        fontFamily: 'Montserrat-SemiBold',
        textTransform: 'capitalize',
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
        textTransform: 'capitalize',
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
    contentKustom: {
      backgroundColor: colors.ketiga,
      borderRadius: 5,
      paddingHorizontal: 25,
      paddingTop: 5,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textKustom: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.kedua,
      fontSize: RFValue(14, heightMobileUI),
      paddingLeft: 30,
      marginBottom: 3
    }
}
)