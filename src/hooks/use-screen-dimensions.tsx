import { Dimensions } from 'react-native';

export const useScreenDimensions = () => {
  const { width, height } = Dimensions.get('window');
  return { width, height };
};
