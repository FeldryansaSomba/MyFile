import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Logo } from '../../assets'
import { heightMobileUI } from '../../utils/constant';
import { RFValue } from "react-native-responsive-fontsize";
import { Button, Gap, Input, Linking, } from '../../components';
import { connect } from 'react-redux';
import { loginMebel } from '../../actions/AuthMblAction';

class MasukMebel extends Component {
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
          this.props.dispatch(loginMebel(email, password))
        }else {
          Alert.alert("Error", "Email & Kata Sandi harus diisi")
        }
      }
    
      componentDidUpdate(prevProps) {
        const { loginMebelResult } = this.props
    
        if(loginMebelResult && prevProps.loginMebelResult !== loginMebelResult)
        {
            this.props.navigation.replace('MebelApp')
        }
    }

  render() {
    const {email, password} = this.state
    const { navigation, loginMebelLoading } = this.props
    return (
        <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Logo style={styles.logo}/>
        <Text style={styles.text}>Selamat Datang</Text>

        <View style={styles.container}>
            <Input 
            label={"Email (Mebel)"}
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
            loading={loginMebelLoading}
            title={"Masuk"}
            width={responsiveWidth(282)} 
            height={responsiveHeight(36)} 
            fontSize={RFValue(15, heightMobileUI)} 
            borderRadius={5}/>
            <Gap height={30}/>

            <Linking onPress={() => navigation.navigate("BuatAkunMebel")}
            title="Buat Akun Mebel" 
            size={RFValue(15, heightMobileUI)} />
            <Gap height={40}/>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loginMebelLoading: state.AuthReducer.loginMebelLoading,
  loginMebelResult: state.AuthReducer.loginMebelResult,
  loginMebelError: state.AuthReducer.loginMebelError,
})

export default connect(mapStateToProps, null) (MasukMebel)

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