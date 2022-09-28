import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth, getData } from '../../utils'
import { DefaultImage, IconKembali } from '../../assets'
import { Button, Input } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant'
import {launchImageLibrary} from 'react-native-image-picker';
import { updateProfile } from '../../actions/ProfileAction'
import { connect } from 'react-redux'

class EditProfileCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uid: '',
            avatar: false,
            avatarForDB: '',
            avatarLama: '',
            updateAvatar: false,
            nama: '',
            noHp: '',
            email: '',
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps) {
        const { updateProfileResult } = this.props

        if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult)
        {
            Alert.alert("Sukses", "Berhasil memperbaharui profil!")
            this.props.navigation.replace('MainApp')
        }
    }

    getUserData = () => {
        getData('user').then(res => {
          const data = res
            this.setState({
                uid: data.uid,
                nama: data.nama,
                noHp: data.noHp,
                email: data.email,
                avatar: data.avatar,
                avatarLama: data.avatar,
            })
        })
      }

      getImage = () => {
        launchImageLibrary({quality: 1, maxHeight: 500, maxWidth: 500, includeBase64: true}, (response) => {
            if(response.didCancel || response.errorCode || response.errorMessage) {
                Alert.alert("Error", "Anda tidak memilih foto")
            }else {
                const source = response.assets[0].uri;
                const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

                this.setState({
                    avatar: source,
                    avatarForDB: fileString,
                    updateAvatar: true
                })
            }
        })
      }

      onSubmit = () => {
        const { nama, noHp } = this.state
        if(nama && noHp) {
            //dispatch update profile
            this.props.dispatch(updateProfile(this.state))
        } else {
            Alert.alert("Error", "Nama dan No Telepon harus diisi")
        }
      }

  render() {
    const { navigation, updateProfileLoading } = this.props
    const { avatar, nama, noHp, email } = this.state
    return (
      <View style={styles.pages}>
        <TouchableOpacity style={styles.icon}>
        <IconKembali onPress={()=> navigation.goBack()}/>
        </TouchableOpacity>

        {/* Foto Profile */}
        <View style={styles.container}>
        <Image source={avatar ? {uri: avatar} : DefaultImage} style={styles.avatar}/>
        <View style={styles.wrapperGanti}>
            <Button
            onPress={() => this.getImage()}
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
        fontSize={RFValue(15, heightMobileUI)}/>

        <Input 
        label={"No Telepon"} 
        value={noHp}
        onChangeText={(noHp) => this.setState({noHp})} 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(15, heightMobileUI)}
        keyboardType='numeric'/>

        <Input 
        label={"Email"} 
        value={email}
        onChangeText={(email) => this.setState({email})}
        disabled 
        width={responsiveWidth(313)} 
        height={responsiveHeight(33)} 
        fontSize={RFValue(15, heightMobileUI)}/>
        </View>

        <View style={styles.button}>
        <Button
        loading={updateProfileLoading}
        onPress={() => this.onSubmit()}
        title={'Simpan'} 
        width={responsiveWidth(282)} 
        height={responsiveHeight(36)} 
        fontSize={RFValue(16, heightMobileUI)} 
        borderRadius={5}
        type='secondary'/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    updateProfileLoading: state.ProfileReducer.updateProfileLoading,
    updateProfileResult: state.ProfileReducer.updateProfileResult,
    updateProfileError: state.ProfileReducer.updateProfileError,
})

export default connect(mapStateToProps, null) (EditProfileCS) 

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
        width: responsiveWidth(110),
        height: responsiveHeight(110),
        borderRadius: 15,
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