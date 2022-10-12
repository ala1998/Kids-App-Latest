import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    NormalSamim: require('../src/assets/fonts/Samim.ttf')
  });