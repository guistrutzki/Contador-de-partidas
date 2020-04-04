import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Linha from './Linha';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#c1c1c1',
  },
};

const App = () => {
  const [nota, setNota] = useState({qtd: 0, total: 0});

  const handleTextInput = text => {
    const qtd = parseInt(text);

    if (Number.isInteger(qtd)) {
      const total = qtd * 50;
      setNota({qtd, total});
    } else {
      setNota({qtd: 0, total: 0});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Linha qtd={nota.qtd} total={nota.total} textInputFN={handleTextInput} />
      <Linha qtd={nota.qtd} total={nota.total} textInputFN={handleTextInput} />
      <Linha qtd={nota.qtd} total={nota.total} textInputFN={handleTextInput} />
      <Linha qtd={nota.qtd} total={nota.total} textInputFN={handleTextInput} />
      <Linha qtd={nota.qtd} total={nota.total} textInputFN={handleTextInput} />
    </SafeAreaView>
  );
};

export default App;
