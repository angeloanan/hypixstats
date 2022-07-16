import React, { type PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native'
import { Title, Text, Appbar, BottomNavigation } from 'react-native-paper'
import { BottomNavbar } from './components/BottomNavbar'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </SafeAreaView>

      <BottomNavbar />
    </>
  )
}

export default App
