import React, {useState} from 'react';
import {View} from 'react-native';

import styles from '../styles';
import Placar from '../components/Placar';
import Button from '../components/Button';

const Home = () => {
  const [jogo, setJogo] = useState(0);
  const [partida, setPartida] = useState(0);

  const somarUm = () => {
    partida + 1 > 11
      ? [setJogo(jogo + 1), setPartida(0)]
      : setPartida(partida + 1);
  };

  const somarTres = () => {
    partida + 3 > 11
      ? [setJogo(jogo + 1), setPartida(0)]
      : setPartida(partida + 3);
  };

  return (
    <View style={styles.container}>
      <Placar numero={jogo} titulo="Jogo" />
      <Placar numero={partida} titulo="Partida" />
      <Button titulo="+1" color="#00ff00" funcao={somarUm} />
      <Button titulo="+3" funcao={somarTres} />
    </View>
  );
};

export default Home;
