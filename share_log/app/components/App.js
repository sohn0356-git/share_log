/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements';
import HomeScreen from './Home';
import { RootNavigator } from '../../routes';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create(
  {
    mainView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'yellow'
    }
  }
)

export default function(){
  return(
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <RootNavigator />
    </NavigationContainer>
  )
};