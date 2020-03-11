import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    marginTop: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Button = ({titulo, color, funcao}) => (
  <TouchableOpacity
    onPress={funcao}
    style={[styles.buttonContainer, {backgroundColor: color ? color : '#fff'}]}>
    <View>
      <Text>{titulo}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
