import * as React from 'react';
import { BerandaCS, BuatAkunCS, EditProfileCS, GantiPassCS, MasukCS, MebelDetailCS, PesananCS, PilihUser, ProfileCS, Splash } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigatorCS } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorCS {...props} />}>
      <Tab.Screen name="BerandaCS" component={BerandaCS} options={{headerShown: false, title: 'Beranda'}} />
      <Tab.Screen name="PesananCS" component={PesananCS} options={{headerShown: false, title: 'Pesanan'}} />
      <Tab.Screen name="ProfileCS" component={ProfileCS} options={{headerShown: false, title: 'Profil'}} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='PilihUser'>
    <Stack.Screen 
      name="Splash" 
      component={Splash}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MainApp" 
      component={MainApp}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="PilihUser" 
      component={PilihUser}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MebelDetailCS" 
      component={MebelDetailCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="EditProfileCS" 
      component={EditProfileCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="GantiPassCS" 
      component={GantiPassCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MasukCS" 
      component={MasukCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="BuatAkunCS" 
      component={BuatAkunCS}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  )
}

export default Router