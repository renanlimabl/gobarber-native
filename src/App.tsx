import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#321e28" />
    <View style={{ flex: 1, backgroundColor: '#321e28' }} />
  </>
);

export default App;
