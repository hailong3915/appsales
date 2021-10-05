import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./screens/Categories";
import Category from "./screens/Category";

const AppNavigator = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen name='Categories' component={Categories} />
        <AppNavigator.Screen name='Category' component={Category} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;