import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { IconKembali } from '../../assets'
import { Button, Input } from '../../components'
import { connect } from 'react-redux'
import { changePassMbl } from '../../actions/ProfileMblAction'

class GantiPassMbl extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           password: '',
           newPassword: '',
           newPasswordKonfirmasi: ''
        }
      }

      onSubmit = () => {
        const { password, newPassword, newPasswordKonfirmasi } = this.state
        
        if(newPassword !== newPasswordKonfirmasi) {
          Alert.alert('Error', 'Kata Sandi Baru dan Konfirmasi Kata Sandi Baru Harus Sama')
        } else if (password && newPassword && newPasswordKonfirmasi) {
  
          //ambil data email dari local storage
          getData('userMebel').then((res) => {
            const parameter = {
              email: res.email,
              password: password,
              newPassword: newPassword,
            }
            this.props.dispatch(changePassMbl(parameter));
          })
  
        } else {
          Alert.alert('Error', 'Kata Sandi Lama, Kata Sandi Baru, dan Konfirmasi Kata Sandi Baru Harus Diisi')
        }
      }
  
      componentDidUpdate(prevProps) {
        const { changePassMblResult } = this.props
  
        if(changePassMblResult && prevProps.changePassMblResult !== changePassMblResult)
        {
          Alert.alert('Sukses', "Berhasil Ganti Kata Sandi Baru")
            this.props.navigation.replace('MebelApp')
        }
    }

  render() {
    const { navigation, changePassMblLoading } = this.props
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
        loading={changePassMblLoading}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    changePassMblLoading: state.ProfileReducer.changePassMblLoading,
    changePassMblResult: state.ProfileReducer.changePassMblResult,
    changePassMblError: state.ProfileReducer.changePassMblError,
})

export default connect(mapStateToProps, null) (GantiPassMbl)

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