import * as React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import type { Theme } from 'react-native-paper'
import { name as appName } from './app.json'

import App from './src/App'

const customAppTheme: Partial<Theme> = {
  version: 3
}

const MainApp = () => {
  return (
    <PaperProvider theme={customAppTheme}>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => MainApp)
