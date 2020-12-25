import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; // 3.7.2

const SLIDER_WIDTH = Dimensions.get('window').width;
const TRANSLATE_VALUE = Math.round((SLIDER_WIDTH * 0.3) / 4);
const baseWidth = 414;
const baseHeight = 896;

/**
 * @return {number}
 */
export function PixcelWidth(pixcel) {
  const w = (pixcel * 100) / baseWidth;

  return wp(w);
}

/**
 * @return {number}
 */
export function PixcelHeight(pixcel) {
  const h = (pixcel * 100) / baseHeight;
  return wp(h);
}
