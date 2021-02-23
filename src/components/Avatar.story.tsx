import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Avatar } from './Avatar';

storiesOf('Avatar', module).add('Avatar', () => (
  <Avatar image={'https://avatars.githubusercontent.com/u/360936?s=460&v=4'} />
));

storiesOf('Avatar', module).add('size', () => {
  return (
    <>
      <Avatar
        style={{ width: 300, height: 300 }}
        image={'https://avatars.githubusercontent.com/u/360936?s=460&v=4'}
      />

      <Avatar
        style={{ width: 100, height: 100 }}
        image={'https://avatars.githubusercontent.com/u/360936?s=460&v=4'}
      />
      <Avatar
        style={{ width: 100, height: 100 }}
        image={'https://avatars.githubusercotent.com/u/360936?s=460&v=4'}
      />
    </>
  );
});
