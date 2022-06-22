import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { RFValue } from "react-native-responsive-fontsize";
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { dummeProfile, dummyMenu } from '../../data'
import { heightMobileUI } from '../../utils/constant';
import { ListMenu } from '../../components';

export default class ProfileCS extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: dummeProfile,
      menus: dummyMenu
    }
  }
  render() {
    const {profile, menus} = this.state
    return (
      <View style={styles.page}>
        <Image source={profile.avatar} style={styles.foto}/>
        <View style={styles.profile}>
        <Text style={styles.nama}>{profile.nama} </Text>
        <Text style={styles.nohp}>No HP : {profile.noHP} </Text>
        </View>
        <View style={styles.container}>
          <ListMenu menus={menus} navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.pertama
  },
  container: {
    backgroundColor: colors.keempat,
    bottom: 0,
    position: 'absolute',
    height: responsiveHeight(350),
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  foto: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 40
  },
  profile: {
    alignItems: 'center',
    marginTop: 10
  },
  nama: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(19, heightMobileUI),
    color: colors.keempat,
    marginBottom: 5
  },
  nohp: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(14, heightMobileUI),
    color: colors.keempat,
  }
})