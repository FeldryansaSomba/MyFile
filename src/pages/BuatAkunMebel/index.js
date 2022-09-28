import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input } from '../../components';
import { connect } from 'react-redux';
import { registerMebel } from '../../actions/AuthMblAction';

class BuatAkunMebel extends Component {
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
        const { registerMebelResult } = this.props

        if(registerMebelResult && prevProps.registerMebelResult !== registerMebelResult)
        {
            Alert.alert("Sukses", "Akun berhasil di buat.")
            this.props.navigation.replace('MasukMebel')
        }
    }

    onContinue = () => {
        const { nama, noHp, email, password } = this.state

        if(nama && noHp && email && password) {
            const data = {
                nama: nama,
                noHp: noHp,
                email: email,
                status: 'userMebel'
            }
            this.props.dispatch(registerMebel(data, password))
        } else {
            Alert.alert("Error", "Nama, no. telepon, email, dan kata sandi harus diisi")
        }
    }

  render() {
    const { nama, noHp, email, password } = this.state
    const { navigation, registerMebelLoading } = this.props
    return (
        <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Buat Akun Mebel</Text>

        <View style={styles.container}>
            <Input 
            label={"Nama Mebel"}
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
            loading={registerMebelLoading}
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
    registerMebelLoading: state.AuthReducer.registerMebelLoading,
    registerMebelResult: state.AuthReducer.registerMebelResult,
    registerMebelError: state.AuthReducer.registerMebelError,
})

export default connect(mapStatetoProps, null) (BuatAkunMebel)

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