import { Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight } from '../../utils'
import { ListKerjaMbl } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { getTerimaPesananMbl } from '../../actions/PesananMblAction';
import { connect } from 'react-redux'

class KerjaMbl extends Component {

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
        this.props.dispatch(getTerimaPesananMbl(res.uid))
      }else {
        //belum login
        this.props.navigation.replace('PilihUser')
      }
    })
  }
 
  componentDidMount(){
    getData('userMebel').then((res) => {
      if(res) {
        //sudah login
        this.props.dispatch(getTerimaPesananMbl(res.uid))
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
        <Text style={styles.text}>Pekerjaan Saya</Text>
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
        <ListKerjaMbl allData={this.props}/>
      </View>
      </ScrollView>

      </View>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  getTerimaPesananMblLoading: state.PesananMblReducer.getTerimPesananMblLoading,
  getTerimaPesananMblResult: state.PesananMblReducer.getTerimaPesananMblResult,
  getTerimaPesananMblError: state.PesananMblReducer.getTerimaPesananMblError,
})

export default connect(mapStateToProps, null) (KerjaMbl)

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