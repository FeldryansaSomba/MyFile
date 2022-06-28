import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali } from '../../assets'
import { Button, Input } from '../../components'

export default class GantiPassMbl extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           password: '',
           newPassword: '',
           newPasswordKonfirmasi: ''
        }
      }
  render() {
    const { navigation, changePassLoading } = this.props
    const { password, newPassword, newPasswordKonfirmasi } = this.state
    return (
        <View style={styles.pages}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>
        <View style={styles.input}>
        <Input 
        label={"Kata Sandi Lama"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry
        value={password}
        onChangeText={(password) => this.setState({password})}/>
        <Input 
        label={"Kata Sandi Baru"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry
        value={newPassword}
        onChangeText={(newPassword) => this.setState({newPassword})}/>
        <Input 
        label={" Konfirmasi Kata Sandi Baru"} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={16}
        secureTextEntry
        value={newPasswordKonfirmasi}
        onChangeText={(newPasswordKonfirmasi) => this.setState({newPasswordKonfirmasi})}/>
        </View>

        <View style={styles.button}>
        <Button 
        title={'Simpan'} 
        width={responsiveWidth(282)} 
        height={responsiveHeight(36)} 
        fontSize={16} 
        borderRadius={5}
        type='secondary'
        onPress={() => this.onSubmit()}
        loading={changePassLoading}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.keempat,
    },
    icon: {
        marginLeft: 28,
        marginTop: 30
    },
    input: {
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 250,
    },
})