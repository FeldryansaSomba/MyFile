import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input } from '../../components';

export default class BuatAkunMebel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            noHp: '',
            email: '',
            password: ''
        }
    }

  render() {
    const { nama, noHp, email, password } = this.state
    const { navigation, registerLoading } = this.props
    return (
        <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Buat Akun Mebel</Text>

        <View style={styles.container}>
            <Input 
            label={"Nama"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}
            value={nama}
            onChangeText={(nama) => this.setState({nama})}/>

            <Input 
            label={"No. Telepon"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}
            value={noHp}
            onChangeText={(noHp) => this.setState({noHp})}/>

            <Input 
            label={"Email"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}
            value={email}
            onChangeText={(email) => this.setState({email})}/>

            <Input 
            label={"Kata Sandi"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}
            secureTextEntry
            value={password}
            onChangeText={(password) => this.setState({password})}/>

            <Gap height={55}/>
            <Button 
            onPress={() => navigation.navigate("MebelApp")}
            loading={registerLoading}
            title={"Daftar"}
            width={responsiveWidth(282)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)} 
            borderRadius={5}/>
            <Gap height={30}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

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
        fontSize: RFValue(22, heightMobileUI),
        marginTop: 25,
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
        marginTop: 18
    }
})