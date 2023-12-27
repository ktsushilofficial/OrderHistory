import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from './Card.js';
import OrderHistoryScreen from './OrderHistory.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider } from './LanguageContext';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import LanguageToggleButton from './LanguageToggleButton';


const Stack = createStackNavigator();

export default function App() {
  return (
    <LanguageProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistoryScreen}
            options={({ navigation }) => ({
              title: 'Order History',
              headerRight: () => <LanguageToggleButton />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </LanguageProvider>
    
   
  );
}



