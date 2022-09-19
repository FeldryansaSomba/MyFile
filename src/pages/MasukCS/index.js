import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input, Linking, } from '../../components';
import { loginUser } from '../../actions/AuthAction'
import { connect } from 'react-redux';

class MasukCS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    const {email, password} = this.state

    if(email && password) {
      //action
      this.props.dispatch(loginUser(email, password))
    }else {
      Alert.alert("Error", "Email & Kata Sandi harus diisi")
    }
  }

  componentDidUpdate(prevProps) {
    const { loginResult } = this.props

    if(loginResult && prevProps.loginResult !== loginResult)
    {
        this.props.navigation.replace('MainApp')
    }
}

  render() {
    const {email, password} = this.state
    const { navigation, loginLoading } = this.props
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Selamat Datang</Text>

        <View style={styles.container}>
            <Input 
            label={"Email (Pelanggan)"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(15, heightMobileUI)}
            value={email}
            onChangeText={(email) => this.setState({email})}/>

            <Input 
            label={"Kata Sandi"}
            width={responsiveWidth(285)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(15, heightMobileUI)}
            secureTextEntry
            value={password}
            onChangeText={(password) => this.setState({password})}/>
            
            <Gap height={55}/>
            <Button 
            onPress={() => this.login()}
            loading={loginLoading}
            title={"Masuk"}
            width={responsiveWidth(282)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(15, heightMobileUI)} 
            borderRadius={5}/>
            <Gap height={30}/>

            <Linking onPress={() => navigation.navigate("BuatAkunCS")}
            title="Buat Akun Pelanggan" 
            size={RFValue(15, heightMobileUI)} />
            <Gap height={40}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    loginLoading: state.AuthReducer.loginLoading,
    loginResult: state.AuthReducer.loginResult,
    loginError: state.AuthReducer.loginError,
})

export default connect(mapStateToProps, null) (MasukCS)

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