import { Dimensions, Platform } from 'react-native';
import isSmallDevice from './Layout';

export const Icons = {
  back: `arrow-left`,
  rt: 'refresh-cw',
  likes: 'heart',
  open: 'share',
  close: 'x',
};

export const FontSizes = {
  title: isSmallDevice ? 16 : 18,
  subtitle: isSmallDevice ? 14 : 16,
  bodyLarge: 14,
  bodyTitle: isSmallDevice ? 14 : 15,
  normalButton: isSmallDevice ? 15 : 16,
};

export const PROFILE_AVATAR_SIZE = 84;
