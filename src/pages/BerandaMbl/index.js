import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../utils/colors'
import { Gap, ListProdukMbl, ButtonJual } from '../../components'
import { connect } from 'react-redux'
import { getProduk } from '../../actions/ProdukAction'

class BerandaMbl extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const {idFilter, keyword} = this.props
      // do something
      this.props.dispatch(getProduk(idFilter, keyword));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const { idFilter, keyword } = this.props

    if(idFilter && prevProps.idFilter !== idFilter)
    {
      this.props.dispatch(getProduk(idFilter, keyword));
    }

    if(keyword && prevProps.keyword !== keyword)
    {
      this.props.dispatch(getProduk(idFilter, keyword));
    }
}

  render() {
    const { navigation, namaProduk, keyword } = this.props
    return (
      <View style={styles.pages}>
        <View style={styles.containerAtas}>
        <Text style={styles.text}>Selamat Berbelanja</Text>
        <Gap height={22}/>
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
  paddingTop: 50,
  marginHorizontal: 35
},
text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.kedua
},
listProduk: {
  paddingTop: 17,
  marginHorizontal: 48
},
filter: {
  fontFamily: 'Montserrat-SemiBold',
  color: colors.kedua,
  fontSize: 15,
  marginTop: 16,
  marginBottom: 7
}
})