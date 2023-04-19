import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Pembuka = () => {
  const styles = StyleSheet.create({
    slogan: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    content: {
      fontSize: 13,
      color: 'gray',
      marginTop: 18,
    },
    div: {
      padding: 30,
      marginTop: 0,
    },
  });
  return (
    <View style={styles.div}>
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

export default Pembuka;
