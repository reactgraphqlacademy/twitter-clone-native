import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// 🥑  Modify the export according to the exercices

// 🤸‍♀️ Exercise 1

// import { LoginScreen as App } from './src/exercice/01';
// import { TermsScreen as App } from './src/exercice/01';

// import { AnimationExample as App } from './src/final/03/AnimationExample';

// export default App;

// 🤸‍♀️ Exercise 2

import PublicStack from './src/final/02/PublicNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PublicStack />
    </NavigationContainer>
  );
}
