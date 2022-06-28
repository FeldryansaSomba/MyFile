import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardMenuMbl } from '../../Kecil'

const ListMenuMbl = ({menus, navigation}) => {
  return (
    <View>
        {menus.map((menu) => {
            return <CardMenuMbl menu={menu} key={menu.id} navigation={navigation}/>
        })}
    </View>
  )
}

export default ListMenuMbl

const styles = StyleSheet.create({})