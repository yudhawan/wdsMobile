import React from 'react'
import {SafeAreaView,Text,View} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src';
import Watch from './src/Watch';
import Heart from './src/Heart';
import Rfid from './src/Rfid';
import Finger from './src/Finger';
const Stack = createNativeStackNavigator()
const App= () => {

  return (
    <TailwindProvider>
      <NavigationContainer>
        <SafeAreaView className={`w-full h-full`}>
          <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Main' component={Main} options={{headerShown:false,headerTitle:'Wiedersehen',}}/>
            <Stack.Screen name='Watch' component={Watch} options={({route})=> ({title: route.name, headerStyle:{backgroundColor:'#eff6ff'},headerTintColor:'#4576bf'})}/>
            <Stack.Screen name='Heart' component={Heart} options={({route})=> ({title: route.name, headerStyle:{backgroundColor:'#fef2f2'},headerTintColor:'#bf4549'})}/>
            <Stack.Screen name='Rfid' component={Rfid} options={({route})=> ({title: route.name, headerStyle:{backgroundColor:'#fff7ed'},headerTintColor:'#bf7645'})}/>
            <Stack.Screen name='Finger' component={Finger} options={({route})=> ({title: route.name, headerStyle:{backgroundColor:'#f0fdf4'},headerTintColor:'#47bf45'})}/>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </TailwindProvider>
  );
};



export default App;
