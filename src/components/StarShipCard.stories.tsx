import React from 'react';
import { storiesOf } from '@storybook/react-native';
import StarShipCard from './StarShipCard';

storiesOf('Cards', module).add('Starship', () => (
  <StarShipCard
    title={'X-wing'}
    subtitle={'It a convinient way to travel across the galaxy'}
    manufacturer={'The Rebels Alliance'}
    price={'6800'}
  />
));
