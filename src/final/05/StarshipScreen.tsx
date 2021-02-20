import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { useQuery } from 'react-query';
import fetchAsync from '../../fetch';
import AppShell from './AppShell';
import StarShipCard from '../../components/StarShipCard';

interface shipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const StarshipScreen = () => {
  const { isLoading, error, data } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (isLoading) return <AppShell title="Loading..." />;
  if (error) return <AppShell title="Error 😕" />;

  return (
    <AppShell title="Starships">
      <ScrollView>
        {data.results.map((ship: shipProps) => {
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
