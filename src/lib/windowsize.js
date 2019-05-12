import {
  Platform,
  Dimensions,
} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const EIGHT_PLUS_WIDTH = 414;
const EIGHT_PLUS_HEIGHT = 736;
const EIGHT_WIDTH = 375;
const EIGHT_HEIGHT = 667;
const SE_WIDTH = 320;
const SE_HEIGHT = 568;

// iPhone X
export const isiPhoneX = () => {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
    && (width === X_WIDTH && height === X_HEIGHT)
  );
};
// iPhone 8 plus
export const isiPhoneEightPlus = () => {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
    && (width === EIGHT_PLUS_WIDTH && height === EIGHT_PLUS_HEIGHT)
  );
};
// iPhoen8 （iPhone 6s Plus、iPhone 6 Plus、iPhone 7、
//          iPhone 6s、iPhone 6）
export const isiPhoneEight = () => {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
    && (width === EIGHT_WIDTH && height === EIGHT_HEIGHT)
  );
};
// iPhone SE
export const isiPhoneSE = () => {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
    && (width === SE_WIDTH && height === SE_HEIGHT)
  );
};
