import { Text, StyleSheet, View, Modal } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { SliderBox } from 'react-native-image-slider-box';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ProdukSlider extends Component {
    constructor(props) {
        super(props)

        this.state= {
            openImage: false,
            previewImage: false,
        }
    }

    clickPreview = (index) => {
        this.setState({
            openImage: true,
            previewImage: [
                {
                    url: '',
                        props: {
                        // Or you can set source directory.
                        source: this.props.images[index]
                     }
                }
            ]
        })
    }

  render() {
    const { images } = this.props
    const { openImage, previewImage } = this.state
    return (
        <View style={styles.containerBG}>
        <SliderBox 
        images={images} 
        sliderBoxHeight={responsiveHeight(223)}
        circleLoop
        ImageComponentStyle={styles.slider}
        dotStyle={styles.dotStyle} 
        dotColor={colors.kedua}
        imageLoadingColor={colors.pertama}
        onCurrentImagePressed={index => 
        this.clickPreview(index)}/>

        <Modal visible={openImage} transparent={true}>
            <ImageViewer imageUrls={previewImage} 
            backgroundColor={colors.pertama}
            onClick={()=> this.setState({openImage: false})}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}/>
        </Modal>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    slider: {
        width: responsiveWidth(223),
        alignSelf: 'center',
    },
    containerBG: {
        backgroundColor: colors.pertama,
        marginTop: 8,
        height: responsiveHeight(225),
        width: '100%',
        justifyContent: 'center'
    },
    dotStyle: {
        width: 10,
        height: 5,
        borderRadius: 5
    }
})