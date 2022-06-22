import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { dummeProfile } from '../../data'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali } from '../../assets'
import { Button, Input } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant'

export default class EditProfileCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: dummeProfile
        }
    }
  render() {
    const { navigation } = this.props
    const { profile } = this.state
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
        value={profile.nama} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(16, heightMobileUI)}/>

        <Input 
        label={"No Telepon"} 
        value={profile.noHP} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(16, heightMobileUI)}/>

        <Input 
        label={"Email"} 
        value={profile.email} 
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