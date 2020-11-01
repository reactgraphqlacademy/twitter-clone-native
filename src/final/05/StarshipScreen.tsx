import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { useQuery } from 'react-query';
import fetchAsync from '../../fetch';
import AppShell from './AppShell';
import StarShipCard from '../../components/StarShipCard';

const StarshipScreen = () => {
  const { status, error, data } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (status === 'loading') return <AppShell title="Loading..." />;
  if (status === 'error') return <AppShell title="Error 😕" />;

  return (
    <AppShell title="Starships">
      <ScrollView>
        {data.results.map((ship) => {
          console.log('StarshipScreen -> ship', ship);
          return (
            <StarShipCard
              key={ship.name}
              title={ship.name}
              subtitle={ship.model}
              manufacturer={ship.manufacturer}
              price={ship.cost_in_credits}
            />
          );
        })}
      </ScrollView>
    </AppShell>
  );
};

export default StarshipScreen;
