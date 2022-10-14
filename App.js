import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
export default function App() {
  return (
   <NavigationContainer>
    <StatusBar backgroundColor={'#7f7f7f'} barStyle="light-content"/>
    <Routes/>
   </NavigationContainer>
  );
}