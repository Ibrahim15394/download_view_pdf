import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Home';
import ViewPdf from './scr/ViewPdf';
import CheckNetwork from './scr/CheckNetwork';

const Stack = createNativeStackNavigator();



function App() {
 
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ViewPdf" component={ViewPdf} />
    <Stack.Screen name="CheckNetwork" component={CheckNetwork} />

    </Stack.Navigator>

  </NavigationContainer>
);
 
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
