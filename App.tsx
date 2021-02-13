import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoBox from './src/VideoBox';

export default function App() {

  return (
    <View style={styles.container}>
      <VideoBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
