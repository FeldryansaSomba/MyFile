import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanan } from '../../data'
import { colors, getData, responsiveHeight } from '../../utils'
import { ListPesananCS } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { IconChat } from '../../assets'
import { connect } from 'react-redux'
import { getListPesanan } from '../../actions/PesananAction'

class PesananCS extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     pesanans: dummyPesanan
  //   }
  // }

  componentDidMount() {
    getData('user').then((res) => {
      if(res) {
        //sudah login
        this.props.dispatch(getListPesanan(res.uid))
      }else {
        //belum login
        this.props.navigation.replace('PilihUser')
      }
    })
}

  render() {
    // const { pesanans } = this.state
    const { getListPesananResult } = this.props
    console.log("Pesanans :", this.props.getListPesananResult)
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.text}>Pesanan Saya</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <ListPesananCS pesanans={pesanans}/> */}
        <ListPesananCS {...this.props}/>
      </View>
      </ScrollView>

      <TouchableOpacity style={styles.chat}>
      <IconChat/>
      </TouchableOpacity>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  getListPesananLoading: state.PesananReducer.getListPesananLoading,
  getListPesananResult: state.PesananReducer.getListPesananResult,
  getListPesananError: state.PesananReducer.getListPesananError,
})

export default connect(mapStateToProps, null)(PesananCS)

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(65),
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(19, heightMobileUI),
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: colors.keempat,
    paddingHorizontal: 48
  },
  chat: {
    backgroundColor: colors.kedua,
    width: responsiveHeight(52),
    height: responsiveHeight(52),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})