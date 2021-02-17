import * as React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import GesturBox from './src/GesturBox';
import VideoBox from './src/VideoBox';

const TextItem = () => {
  const { height, width } = useWindowDimensions()
  const SIZE = width
  return <View style={{ borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', width: SIZE, height: SIZE, backgroundColor: '#4649ad', }} >
    <Text style={{ color: '#fff', }} >
      Hello world!
    </Text>
  </View>
}

export default function App() {

  return (
    <View style={styles.container}>
      <GesturBox>
        {/* <VideoBox /> */}
        <TextItem />
      </GesturBox>
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
