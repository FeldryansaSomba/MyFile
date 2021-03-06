import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors, getData, responsiveHeight } from '../../utils'
import { ListKerjaMbl } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { IconChat } from '../../assets'
import { getProsesPesananMbl } from '../../actions/ProsesMblAction'
import { connect } from 'react-redux'

class KerjaMbl extends Component {
  constructor(props) {
    super(props)
   
  }

 
  // componentDidMount(){
  //   if(this.props.route.params.data.idPesanan){
  //       this.props.dispatch(getProsesPesananMbl(this.props.route.params.data.idPesanan))
  //   }
  // }

//   componentDidMount() {
//     getData('idPesanan').then((res) => {
//       if(res) {
//         //sudah login
//         // console.log("res get data:", res)
//         this.props.dispatch(getProsesPesananMbl(res))
//       }else {
//         //belum login
//         // this.props.navigation.replace('PilihUser')
//       }
//     })
// }
//algoritma
// push id pesanan ke asynstorage
//


  render() {
    const { pesanans, navigation } = this.props
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.text}>Pekerjaan Saya</Text>
      </View>
      <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <ListPesananCS pesanans={pesanans}/> */}
        {/* <ListPesananCS {...this.props}/> */}
        {/* <ListKerjaMbl allData={this.props.params.data}/> */}
      </View>
      </ScrollView>

      {/* <TouchableOpacity style={styles.chat} >
      <IconChat onPress={() => navigation.navigate('EdsonApp')}/>
      </TouchableOpacity> */}
      </View>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  getProsesPesananLoading: state.prosesPesananMbl.getProsesPesananLoading,
  getProsesPesananResult: state.prosesPesananMbl.getProsesPesananResult,
  getProsesPesananError: state.prosesPesananMbl.getProsesPesananError,
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
    fontSize: RFValue(19, heightMobileUI),
    color: 'white'
  },
  page: {
    flex: 1,
    backgroundColor: colors.keempat,
  },
  container: {
    // flex: 1,
    // backgroundColor: colors.keempat,
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