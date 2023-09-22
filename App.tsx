import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    const ac = new AbortController();

    setTimeout(() => {
      SplashScreen.hide();
    }, 10000);

    return function cleanup() {
      ac.abort();
    };
  }, []);
  return <SafeAreaView />;
}

export default App;
