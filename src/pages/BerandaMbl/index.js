import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProdukMbl, ButtonJual } from '../../components'
import { connect } from 'react-redux'
import { getProdukMbl } from '../../actions/ProdukAction'
import { getData, heightMobileUI } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'

class BerandaMbl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: false,
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFilter, keyword} = this.props
      // do something
      getData('userMebel').then((res) => {
        //sudah login
        // console.log("res:",res)
        
        this.props.dispatch(getProdukMbl(res.uid))
    }).catch((error)=>console.log("error:",error))

      this.getUserData();
    });
  }

  getUserData = () => {
    getData('userMebel').then(res => {
      const data = res
      let myData = data.nama.split(" ")
      if(data) {
        this.setState({
          profile: myData[0]
        })
      }else {
        this.props.navigation.replace('MasukMebel')
      }
    })
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

//   componentDidUpdate(prevProps) {
//     const { idFilter, keyword } = this.props

//     if(idFilter && prevProps.idFilter !== idFilter)
//     {
//       this.props.dispatch(getProduk(idFilter, keyword));
//     }

//     if(keyword && prevProps.keyword !== keyword)
//     {
//       this.props.dispatch(getProduk(idFilter, keyword));
//     }
// }

  render() {
    const { navigation, namaProduk, keyword } = this.props
    const {profile} = this.state
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Hallo, {profile}</Text>
        <Gap height={20}/>
        <ButtonJual navigation={navigation}/>
        <Gap height={10}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listProduk}>
        <ListProdukMbl  navigation={navigation}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStatetoProps = (state) => ({
  // namaProduk: state.ProdukReducer.namaProduk,
})

export default connect(mapStatetoProps, null) (BerandaMbl)

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.keempat,
    flex: 1,
},
containerAtas: {
  paddingTop: 30,
  marginHorizontal: 28
},
text: {
    fontSize: RFValue(16, heightMobileUI),
    fontFamily: 'Montserrat-Bold',
    color: colors.kedua
},
listProduk: {
  paddingTop: 10,
  paddingHorizontal: 30
},
})