import React from 'react';
import { Text, View } from 'react-native';
import AppShell from './AppShell';

const StarshipScreen = () => {
  // 🥑 Query data with fetchAsync
  // const { status, error, data } = useQuery('starships', () =>
  //   fetchAsync(`https://swapi.dev/api/starships/`)
  // );

  return (
    <AppShell title="Starships">
      <Text></Text>
    </AppShell>
  );
};

export default StarshipScreen;
