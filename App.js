import 'react-native-gesture-handler'

import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'

import UsersList from './components/UsersList'
import Details from './components/Details'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#696969'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={UsersList}
            options={{
              title: 'XYZ Github'
              // headerRight: () => search
            }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

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
