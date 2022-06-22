import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input, Linking, } from '../../components';

export default class MasukCS extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Selamat Datang</Text>

        <View style={styles.container}>
            <Input 
            label={"Email"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}/>

            <Input 
            label={"Kata Sandi"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)}/>
            <Gap height={55}/>
            <Button onPress={() => navigation.replace("MainApp")}
            title={"Masuk"}
            width={responsiveWidth(282)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(16, heightMobileUI)} 
            borderRadius={5}/>
            <Gap height={30}/>

            <Linking onPress={() => navigation.navigate("BuatAkunCS")}
            title="Buat Akun" 
            size={RFValue(15, heightMobileUI)} />
            <Gap height={40}/>
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
        marginTop: 37,
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
        marginTop: 35
    }
})