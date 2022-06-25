import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { dummeProfile } from '../../data'
import { colors, responsiveHeight, responsiveWidth, getData } from '../../utils'
import { IconKembali } from '../../assets'
import { Button, Input } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant'

export default class EditProfileCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uid: '',
            profile: dummeProfile,
            nama: '',
            noHp: '',
            email: '',
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        getData('user').then(res => {
          const data = res
            this.setState({
                uid: data.uid,
                nama: data.nama,
                noHp: data.noHp,
                email: data.email,
            })
        })
      }

  render() {
    const { navigation } = this.props
    const { profile, nama, noHp, email } = this.state
    return (
      <View style={styles.pages}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>

        {/* Foto Profile */}
        <View style={styles.container}>
        <Image source={profile.avatar} style={styles.avatar}/>
        <View style={styles.wrapperGanti}>
            <Button
            title={'Ganti Foto'} 
            width={responsiveWidth(85)} 
            height={responsiveHeight(19)} 
            fontSize={RFValue(13, heightMobileUI)} 
            borderRadius={5}
            type='secondary'/>
        </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        {/* Data Profile */}
        <View style={styles.input}>
        <Input 
        label={"Nama"} 
        value={nama}
        onChangeText={(nama) => this.setState({nama})} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(16, heightMobileUI)}/>

        <Input 
        label={"No Telepon"} 
        value={noHp}
        onChangeText={(noHp) => this.setState({noHp})} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(16, heightMobileUI)}
        keyboardType="number-pad"/>

        <Input 
        label={"Email"} 
        value={email}
        onChangeText={(email) => this.setState({email})}
        disabled 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(16, heightMobileUI)}/>
        </View>

        <View style={styles.button}>
        <Button 
        title={'Simpan'} 
        width={responsiveWidth(282)} 
        height={responsiveHeight(36)} 
        fontSize={RFValue(16, heightMobileUI)} 
        borderRadius={10}
        type='secondary'/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.keempat
    },
    icon: {
        marginLeft: 28,
        marginTop: 30
    },
    avatar: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        borderRadius: 30,
    },
    container: {
        alignItems: 'center',
        marginTop: 25
    },
    input: {
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        marginTop: 100
    },
    wrapperGanti: {
        marginTop: 10
    }
})