import { StackScreens } from '@root';
import React, { useEffect } from 'react';
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
  return <StackScreens />;
}

export default App;
