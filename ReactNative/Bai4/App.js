import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import Login from './screens/Login';
import ClassList from './screens/ClassList';
import ClassDetails from './screens/ClassDetails';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

  const HomeStack = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="ClassList"
        component={ClassList}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ClassDetails"
        component={ClassDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator> 
    )
    }
  return (
    /*<NavigationContainer>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      ) : (
    </NavigationContainer> 
    */
        <SafeAreaView styles={flex=1}>
          <ClassList/>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
