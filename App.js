/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React from 'react'
import type { Node } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import UsersList from './components/UsersList'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={UsersList} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}
// {/* <Stack.Screen name="Details" component={UserDetails} /> */}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
})

export default App
