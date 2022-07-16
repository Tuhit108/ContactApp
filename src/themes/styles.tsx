import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';
import { NativeModules, Platform, StatusBar } from "react-native";

export const bottomSpaceHeight = Platform.OS === 'ios' ? getBottomSpace() : 16;


