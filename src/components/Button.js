import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import AppTheme from '../styles';

const RoundedButton = ({title, color, isShadow, onPress}) => {
  const styles = StyleSheet.create({
    roundedButton: {
      backgroundColor: color ? color : AppTheme.color.second,
      borderRadius: 10,
      padding: 10,
      elevation: isShadow ? 10 : 0,
      marginVertical: 10,
    },
    roundedText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  return (
    <View>
      <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
        <Text style={styles.roundedText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundedButton;
