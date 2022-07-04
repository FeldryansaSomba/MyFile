import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, heightMobileUI, responsiveHeight, responsiveWidth } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'

const ListObrolanCS = ({profile, name, desc, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={profile} style={styles.avatar}/>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ListObrolanCS

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: colors.ketiga,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    avatar: {
        width: responsiveWidth(46),
        height: responsiveHeight(46),
        borderRadius: 46/2,
        marginRight: 12
    },
    name: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(16, heightMobileUI),
        color: colors.kedua
    },
    desc: {
        fontFamily: 'Montserrat-Medium',
        fontSize: RFValue(12, heightMobileUI),
        color: colors.kedua 
    }
})