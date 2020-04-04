import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';

const styles = {
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  cedula: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  input: {
    marginLeft: 20,
    width: 50,
    height: 30,
    borderColor: '#000',
    borderWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: 200,
    marginLeft: 20,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    marginLeft: 5,
    borderRadius: 15,
    backgroundColor: '#000',
  },
};

const Linha = ({qtd, total, textInputFN}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.cedula}
        source={{
          uri:
            'https://www.bcb.gov.br/novasnotas/assets/img/section/50/50_front.jpg',
        }}
      />
      <Text>{`R$ ${total},00`}</Text>
      <TextInput
        style={styles.input}
        value={String(qtd)}
        onChangeText={textInputFN}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button} />
        <View style={styles.button} />
      </View>
    </View>
  );
};

export default Linha;
