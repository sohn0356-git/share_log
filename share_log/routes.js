import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//Screens
import {BlogScreen, SettingsScreen} from './app/components/bottomTab_test';
import MyStack from './app/components/Home';
import { Icon } from 'react-native-elements';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const AppTabComponent = () => {
  return (
    <MainScreenTab.Navigator tabBar={(props) => <MyTabBar {...props} />} >
        <MainScreenTab.Screen name="Blog" component={BlogScreen} />
        <MainScreenTab.Screen name="Settings" component={SettingsScreen} />
    </MainScreenTab.Navigator>
  )
}

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'blue',
          height: Dimensions.get('window').height * 0.15,
        },
        headerTitle:'',
        headerLeft: () => (
          <View style={{display:'flex', flexDirection:'row'}}>
            <Icon
              style={{ marginLeft: 25, justifyContent:'center' }}
              name='book'
              type='ionicon'
              color="#fff"
              size={60}
            />
            <View style={{justifyContent:'center', marginLeft:20}}>
              <Text style={{color:'#fff', fontSize:30}}>share log</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View style={{display:'flex', flexDirection:'row'}}>
            <Icon
              style={{ marginRight: 14 }}
              name='search-circle-outline'
              type='ionicon'
              color="#fff"
              size={35}
              justifyContent='center'
            />
            <Icon
              style={{ marginRight: 14 }}
              name='chatbubble-outline'
              type='ionicon'
              color="#fff"
              size={30}
              justifyContent='center'
            />
          </View>
        ),
      }}
    >
      {/* <AuthStack.Screen name="MyPage" component={MyStack} /> */}
      <AuthStack.Screen name="AppTabComponent" component={AppTabComponent} />
    </AuthStack.Navigator>
  )
}