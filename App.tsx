import 'react-native-gesture-handler';
import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// rutas
import { AuteticationNavigator } from './src/Authentication';
//Settings
import { LoadAssets } from './src/components';

// components custom 
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/components/Theme';


const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};





export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <LoadAssets {...{ fonts}}>
          <SafeAreaProvider>
            <AuteticationNavigator />
          </SafeAreaProvider>
        </LoadAssets>
    </ThemeProvider>
    
  );
}