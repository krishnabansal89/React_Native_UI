/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable */
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Headers from './components/headers';
import ImageSlider from './components/imageSlider';
import FormComponent from './components/formComp';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.conatiners]}>
        <View
          style={{
            backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            // flex: 1,
          }}>
          <View style={{elevation: 10, zIndex: -1}}>
            <Headers />
          </View>
          <ScrollView nestedScrollEnabled={true} >
            <View style={{elevation: 2 , backgroundColor:'pink'}}>
              <ImageSlider />
              {/* <Text>Image Slider</Text> */}
            </View>
            <View
              style={{
                elevation: 4,
                backgroundColor: 'blue',
                // height: 00,
                zIndex: 4,
                // flex:2,
              }}>
              <FormComponent />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  conatiners: {
    // flex: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  textStyle: {
    // flex :1 ,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default App;
