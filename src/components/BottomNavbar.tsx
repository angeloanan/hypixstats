import * as React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon.js'

export const BottomNavbar = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState<Route[]>([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'account', title: 'Account', focusedIcon: 'account' }
  ])

  const renderScene: renderSceneFn = ({ route }) => {
    switch (route.key) {
      case 'home':
      case 'account':
        return <Text>{route.title}</Text>
      default:
        return null
    }
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

//
// Typescript typings below
// Because react-native-paper does not export their types
//

interface Route {
  key: string
  title?: string
  focusedIcon: IconSource
  unfocusedIcon?: IconSource
  badge?: string | number | boolean
  color?: string
  accessibilityLabel?: string
  testID?: string
}

interface renderSceneProps {
  route: Route
  jumpTo: (key: string) => void
}
type renderSceneFn = (props: renderSceneProps) => React.ReactNode | null
