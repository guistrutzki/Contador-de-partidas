import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerPlacar: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100,
    height: 80,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
  },
  textNumber: {
    fontSize: 16,
    color: '#001111',
  },
});

const Placar = ({numero, titulo}) => (
  <View style={styles.containerPlacar}>
    <Text style={styles.textTitle}>{titulo}</Text>
    <Text style={styles.textNumber}>{numero}</Text>
  </View>
);

export default Placar;
