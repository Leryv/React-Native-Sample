import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import PeopleWalkImg from '../assets/img/4468809.jpg';

const Pembuka = () => {
  return (
    <View style={{padding: 30, marginTop: 24}}>
      <Text style={styles.slogan}>
        Dimanapun kamu, pesan kost D’paragon kini lebih mudah
      </Text>
      <Text style={styles.content}>
        Nikmati layanan maksimal dari D’paragon , pesan kamar kost lebih mudah
        lewat aplikasi terbaru dengan tampilan yang lebih menarik .{' '}
      </Text>
    </View>
  );
};

const App = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <ScrollView style={styles.container}>
      <View>
        <Pembuka />
        <View style={{height: height * 0.7}}>
          <Image
            source={PeopleWalkImg}
            style={{
              width: width,
              height: '100%',
              position: 'absolute',
            }}
          />
          <View
            style={{
              // borderColor: 'red',
              // borderWidth: 8,
              height: '100%',
              justifyContent: 'flex-end',
              padding: 12,
            }}>
            <Button title="Pesan Sekarang !" isShadow />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {},
  slogan: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    fontSize: 13,
    color: 'gray',
    marginTop: 21,
  },
});
