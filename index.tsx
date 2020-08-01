import { AppRegistry, Platform, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import { Text, View, BoxTester } from './style'

const App = () => {
  return (
    <View>
      <BoxTester>
        <Text col="#f00">Ola</Text>
        <Text col="#767">Ola</Text>
      </BoxTester>
    </View>
  )
}

AppRegistry.registerComponent(appName, () => App)

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementsByTagName('body')[0]
  })
}

export default App
