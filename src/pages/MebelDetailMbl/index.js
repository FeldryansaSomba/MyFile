import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali } from '../../assets'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {Gap, ProdukSlider} from '../../components';
import { connect } from 'react-redux';
import { getDetailProduk } from '../../actions/DetailProdukAction'


class MebelDetailMbl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produk: this.props.route.params.produk,
            images: this.props.route.params.produk.gambar,
        }
    }

    componentDidMount() {
        const { produk } = this.state
        this.props.dispatch(getDetailProduk(produk.produk))
        // console.log("data produk: ", produk)
    }

  render() {
    const { navigation, savePesananLoading } = this.props
    const {produk, images } = this.state
    // console.log("paramater : ", this.props.route.params);
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <Gap height={10}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ProdukSlider images={images}/>
        <View style={styles.container}>
        <View style={styles.contant}>
        
        <Text style={styles.nama}>{produk.nama}</Text>
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
        <Text style={styles.desc}>Panjang (cm) : {produk.panjang}</Text>
        <Text style={styles.desc}>Lebar      (cm) : {produk.lebar}</Text>
        <Text style={styles.desc}>Tinggi     (cm) : {produk.tinggi}</Text>
        <Text style={styles.desc}>Warna              : {produk.warna}</Text>
        <Text style={styles.desc}>Kayu                 : {produk.kayu}</Text>
        <Text style={styles.desc}>Alamat             : {produk.alamat}</Text>
        </ScrollView>
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

export default connect(mapStateToProps, null)(MebelDetailMbl)

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
    nama: {
        fontFamily: 'Montserrat-SemiBold',
        textTransform: 'capitalize',
        color: colors.kedua,
        fontSize: RFValue(19, heightMobileUI),
        marginBottom: 4,
        marginTop: 17
    },
    mebel: {
        fontFamily: 'Montserrat-SemiBold',
        textTransform: 'capitalize',
        color: colors.kedua,
        fontSize: RFValue(16, heightMobileUI),
        marginBottom: 16
    },
    harga: {
        fontFamily: 'Montserrat-Bold',
        color: colors.kedua,
        fontSize: RFValue(19, heightMobileUI),
    },
    lokasi: {
        fontFamily: 'Montserrat-SemiBold',
        textTransform: 'capitalize',
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
        paddingHorizontal: 25,
    },
    text: {
        paddingHorizontal: 30,
        marginTop: 13,
        fontFamily: 'Montserrat-Medium',
        color: colors.kedua,
        fontSize: RFValue(15, heightMobileUI),
        marginBottom: 4
    },
    desc: {
        paddingHorizontal: 30,
        fontFamily: 'Montserrat-Medium',
        color: colors.kedua,
        fontSize: RFValue(15, heightMobileUI),
    },
}
)