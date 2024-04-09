/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Dimensions, ScrollView, Image  } from 'react-native'
import React from 'react'

const ImageSlider = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.conatinerHeading}>Top Websites</Text>
            <View style={styles.fixedScroll}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal = {true} alwaysBounceVertical = {true}  nestedScrollEnabled={true} snapToAlignment='center'>
                    <View style={{ padding: 10 }}>
                        <Image
                            style={styles.scroolImage}
                            source={require('../images/image_1.jpg')}
                        />
                        <Text style={{ color: '#1BCA9B', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Google</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Image
                            style={styles.scroolImage}
                            source={require('../images/image_2.jpg')}
                        />
                        <Text style={{ color: '#1BCA9B', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Facebook</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Image
                            style={styles.scroolImage}
                            source={require('../images/image_3.jpg')}
                        />
                        <Text style={{ color: '#1BCA9B', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Twitter</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        flex: 1,
        // height: 400,
        display:'flex',
        justifyContent:'center',    
        alignItems:'center',
        backgroundColor: 'white',
        width: width,
        
        // paddingHorizontal: 50,
    },
    conatinerHeading: {
        fontSize: 26,
        width: width - 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#218F76',
        marginTop: 20,
    },
    webText:{
        color : '#45CE30',
        fontSize : 20,
    } , 
    fixedScroll:{
        width : 300,
        height : 300,
        paddingHorizontal : 10,
        margin:'auto',
        position : 'relative',
        // backgroundColor : 'pink',
    },
    scroolImage:{
        width : 250,
        height : 250,
        borderRadius : 10,
    }
})
export default ImageSlider