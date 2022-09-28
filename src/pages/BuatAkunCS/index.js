import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input } from '../../components';
import { registerUser } from '../../actions/AuthAction';
import { connect } from 'react-redux';

class BuatAkunCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            noHp: '',
            email: '',
            password: ''
        }
    }

    componentDidUpdate(prevProps) {
        const { registerResult } = this.props

        if(registerResult && prevProps.registerResult !== registerResult)
        {
            Alert.alert("Sukses", "Akun berhasil di buat.")
            this.props.navigation.replace('MasukCS')
        }
    }

    onContinue = () => {
        const { nama, noHp, email, password } = this.state

        if(nama && noHp && email && password) {
            const data = {
                nama: nama,
                noHp: noHp,
                email: email,
                status: 'user'
            }
            console.log("Params: ", data)
            this.props.dispatch(registerUser(data, password))
        } else {
            Alert.alert("Error", "Nama, no. telepon, email, dan kata sandi harus diisi")
        }
    }

  render() {
    const { nama, noHp, email, password } = this.state
    const { registerLoading } = this.props
    return (
        <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Buat Akun Pelanggan</Text>

        <View style={styles.container}>
            <Input 
            label={"Nama"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(14, heightMobileUI)}
            value={nama}
            onChangeText={(nama) => this.setState({nama})}/>

            <Input 
            label={"No. Telepon"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(14, heightMobileUI)}
            value={noHp}
            onChangeText={(noHp) => this.setState({noHp})}/>

            <Input 
            label={"Email"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(14, heightMobileUI)}
            value={email}
            onChangeText={(email) => this.setState({email})}/>

            <Input 
            label={"Kata Sandi"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(14, heightMobileUI)}
            secureTextEntry
            value={password}
            onChangeText={(password) => this.setState({password})}/>

            <Gap height={55}/>
            <Button 
            onPress={() => this.onContinue()}
            loading={registerLoading}
            title={"Daftar"}
            width={responsiveWidth(282)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(14, heightMobileUI)} 
            borderRadius={5}/>
            <Gap height={30}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStatetoProps = (state) => ({
    registerLoading: state.AuthReducer.registerLoading,
    registerResult: state.AuthReducer.registerResult,
    registerError: state.AuthReducer.registerError,
})

export default connect(mapStatetoProps, null)(BuatAkunCS)

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.pertama
    },
    logo: {
        alignSelf: 'center',
        marginTop: 35,
    },
    text: {
        color: colors.kedua,
        fontFamily: 'Montserrat-Bold',
        fontSize: RFValue(20, heightMobileUI),
        marginTop: 25,
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
        marginTop: 18
    }
})