import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import Button from '../components/Button';
import PeopleWalkImg from '../assets/img/4468809.jpg';
import Pembuka from '../components/Home/KalimatPembuka';
import AppTheme from '../styles';

const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    images: {
      width: AppTheme.screen.width,
      height: '100%',
      position: 'absolute',
    },
    div: {
      height: '100%',
      justifyContent: 'flex-end',
      padding: 12,
    },
  });

  return (
    <ScrollView>
      <View>
        <Pembuka />
        <View style={{height: AppTheme.screen.height * 0.7}}>
          <Image source={PeopleWalkImg} style={styles.images} />
          <View style={styles.div}>
            <Button
              title="Pesan Sekarang !"
              isShadow
              color={'blue'}
              // eslint-disable-next-line no-alert
              onPress={() => alert('Fitur Belum Tersedia')}
              nameIcon={'github'}
              sizeIcon={30}
              colorIcon={'white'}
            />
            <View>
              <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
