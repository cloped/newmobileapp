import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}
  >
    <AuthNavigator />
  </ApplicationProvider>
);

export default App;
