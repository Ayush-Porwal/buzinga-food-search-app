import React from 'react';
import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'Home'
        screenOptions = {
          {
            headerStyle: {backgroundColor: 'tomato'}
          }
        }
      >
        <Stack.Screen 
          name = 'Home'
          component = { Home }
          options = {
            {
              title: 'Buzinga',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            }
          }
        />

        <Stack.Screen 
          name = 'Details'
          component = { Details }
          options = {
            {
              title: 'Details',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'tomato'    
  }
});

export default App;