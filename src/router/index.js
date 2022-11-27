import * as React from 'react';
import { BerandaCS, 
         BerandaMbl, 
         BuatAkunCS, 
         BuatAkunMebel, 
         DetailKerjaMbl, 
         DetailPesananCS, 
         DetailPesananMbl, 
         EditProfileCS, 
         EditProfilMbl, 
         GantiPassCS, 
         GantiPassMbl, 
         InfoApp, 
         KerjaMbl, MasukCS, 
         MasukMebel, 
         MebelDetailCS, 
         MebelDetailMbl, 
         PesananCS, 
         PesananMbl, 
         PilihUser, 
         ProfileCS, 
         ProfileMbl, 
         Splash, 
         TambahProduk} from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigatorCS, BottomNavigatorMbl } from '../components';

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

const MebelApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigatorMbl {...props} />}>
      <Tab.Screen name="BerandaMbl" component={BerandaMbl} options={{headerShown: false, title: 'Beranda'}} />
      <Tab.Screen name="PesananMbl" component={PesananMbl} options={{headerShown: false, title: 'Pesanan'}} />
      <Tab.Screen name="KerjaMbl" component={KerjaMbl} options={{headerShown: false, title: 'Kerja'}} />
      <Tab.Screen name="ProfileMbl" component={ProfileMbl} options={{headerShown: false, title: 'Profil'}} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName=''>
    <Stack.Screen 
      name="Splash" 
      component={Splash}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MebelDetailMbl" 
      component={MebelDetailMbl}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MainApp" 
      component={MainApp}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MebelApp" 
      component={MebelApp}
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
      name="DetailPesananMbl" 
      component={DetailPesananMbl}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="EditProfileCS" 
      component={EditProfileCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="EditProfilMbl" 
      component={EditProfilMbl}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="GantiPassCS" 
      component={GantiPassCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="GantiPassMbl" 
      component={GantiPassMbl}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="MasukCS" 
      component={MasukCS}
      options={{headerShown: false}}
    />
      <Stack.Screen 
        name="MasukMebel" 
        component={MasukMebel}
        options={{headerShown: false}}
      />
    <Stack.Screen 
      name="BuatAkunCS" 
      component={BuatAkunCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="BuatAkunMebel" 
      component={BuatAkunMebel}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="TambahProduk" 
      component={TambahProduk}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="DetailKerjaMbl" 
      component={DetailKerjaMbl}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="DetailPesananCS" 
      component={DetailPesananCS}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="InfoApp" 
      component={InfoApp}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  )
}

export default Router