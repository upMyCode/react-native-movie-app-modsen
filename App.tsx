import { StackScreens } from '@root';
import store, { persistor } from '@src/store';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackScreens />
      </PersistGate>
    </Provider>
  );
}

export default App;
