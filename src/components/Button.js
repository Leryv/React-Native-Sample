import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import AppTheme from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

const RoundedButton = ({
  title,
  color,
  isShadow,
  onPress,
  colorIcon,
  nameIcon,
  sizeIcon,
}) => {
  const styles = StyleSheet.create({
    roundedButton: {
      backgroundColor: color ? color : AppTheme.color.second,
      borderRadius: 10,
      padding: 10,
      elevation: isShadow ? 10 : 0,
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundedText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      marginRight: nameIcon ? 12 : 0,
    },
  });

  return (
    <View>
      <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
        <Text style={styles.roundedText}>{title}</Text>
        <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default RoundedButton;
