import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// 🥑  Modify the export according to the exercices

// import { LoginScreen as App } from './src/exercice/01';
// import { TermsScreen as App } from './src/exercice/01';

// import { TimelineScreen as App } from './src/exercice/01';

import PublicStack from './src/exercice/02/PublicNavigator';

// export default App;
// export default PublicStack;

export default function App() {
  return (
    <NavigationContainer>
      <PublicStack />
    </NavigationContainer>
  );
}
