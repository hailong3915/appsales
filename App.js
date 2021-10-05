import * as React from 'react';
import {
  StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./screens/Categories";
import Category from "./screens/Category";
//import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Categories} />
        <Stack.Screen name='Category' component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#f0f8ff`,
  }
});
