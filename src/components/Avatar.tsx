import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { PROFILE_AVATAR_SIZE } from '../config/utils';

interface AvatarProps {
  uri: string;
}

export const Avatar = ({ style, image, profile, ...rest }: AvatarProps) => {
  const uri = image.replace('normal', 'bigger');
  return (
    <Image
      style={[styles.avatar, profile ? styles.profile : {}, style]}
      source={{ uri }}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profile: {
    width: PROFILE_AVATAR_SIZE,
    height: PROFILE_AVATAR_SIZE,
    borderRadius: PROFILE_AVATAR_SIZE / 2,
    backgroundColor: 'grey',
  },
});
