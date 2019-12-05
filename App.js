/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.app}>
      <Text>
        Hello world
      </Text>
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
