import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('황승현');
  const [darkmode, setDarkmode] = useState(false);
  return (
    <View style={{
      ...styles.container,
      backgroundColor: (darkmode? '#000' : '#fff'),
    }}>
      <Text style={{color: darkmode? '#fff' : '#000' }}>
        {text}
      </Text>
      <Button title="누구세요?"
              onPress={() => setText("개발자")} />
      <Button title={`다크모드 ${darkmode? 'off' : 'on'}`}
              onPress={() => setDarkmode(!darkmode)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f00',
  },
});
