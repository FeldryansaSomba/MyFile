import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight } from '../../utils'
import { ListPesananMbl } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { connect } from 'react-redux'
import { getListPesananMbl} from '../../actions/PesananMblAction'


class PesananMbl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    loading: false   
    }
  }

  updateHalaman = () => {
    getData('userMebel').then((res) => {
      if(res) {
        //sudah login
        this.props.dispatch(getListPesananMbl(res.uid))
      }else {
        //belum login
        this.props.navigation.replace('PilihUser')
      }
    })
  }

  componentDidMount() {

    getData('userMebel').then((res) => {
      if(res) {
        //sudah login
        this.props.dispatch(getListPesananMbl(res.uid))
      }else {
        //belum login
        this.props.navigation.replace('PilihUser')
      }
    })
}

  render() {

    return (
      <>
      <View style={styles.header}>
        <Text style={styles.text}>Pesanan Masuk</Text>
      </View>
      <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false} 
      refreshControl={
        <RefreshControl
        refreshing={this.state.loading}
        onRefresh={() => this.updateHalaman()}
        />}
      >
      <View style={styles.container}>
        <ListPesananMbl allData={this.props}/>
      </View>
      </ScrollView>
      </View>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  getProdukPesananMblLoading: state.PesananMblReducer.getProdukPesananMblLoading,
  getProdukPesananMblResult: state.PesananMblReducer.getProdukPesananMblResult,
  getProdukPesananMblError: state.PesananMblReducer.getProdukPesananMblError,
})

export default connect(mapStateToProps, null) (PesananMbl)

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.pertama,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(65),
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(17, heightMobileUI),
    color: 'white'
  },
  page: {
    flex: 1,
    backgroundColor: colors.keempat,
  },
  container: {
    // flex: 1,
    // backgroundColor: colors.keempat,
    paddingHorizontal: 28
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
