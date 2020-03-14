import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import LifeCycle from './study/1.Lifecycle';

const App = () => {
  return (
    <View style={styles.app}>
      <LifeCycle />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
});

export default App;
