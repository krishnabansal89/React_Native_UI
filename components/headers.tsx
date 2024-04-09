/* eslint-disable prettier/prettier */
import { View, Text  , StyleSheet , SafeAreaView , Dimensions , Image}  from 'react-native';
import React from 'react';

const Headers = () => {
  return (
    <SafeAreaView>
    <View style={styles.containerStyle}>
      <Image
      style = {styles.navBarImage}
      source={require('../images/menus.png')}
      />
      <Text style={styles.textStyle}>PassManager</Text>
      <Image
      style = {styles.imageStyle}
      source={require('../images/profile.png')}
      />
    </View>
    </SafeAreaView>
  );
};
const width = Dimensions.get('window').width;
const styles =StyleSheet.create( {
  containerStyle: {
    display: 'flex',
    width: width,
    flexDirection: 'row',
    
    elevation: 20,
    shadowColor: '#52006A',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 15,
    backgroundColor: '#10A881',

    height : 80,
    justifyContent : 'space-between',
    alignItems : 'center',

  },
  textStyle: {
    fontSize: 26,

    color: 'white',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  navBarImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    tintColor: 'white',
    // color: ',
  },
});

export default Headers;