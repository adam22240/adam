import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

// Écrans Client
import { ClientHomeScreen } from '../screens/client/ClientHomeScreen';
import { RegionSelectionScreen } from '../screens/client/RegionSelectionScreen';
import { ServiceDetailsScreen } from '../screens/client/ServiceDetailsScreen';
import { ClientProfileScreen } from '../screens/client/ClientProfileScreen';

// Écrans Bricoleur
import { BricoleurHomeScreen } from '../screens/bricoleur/BricoleurHomeScreen';
import { AddServiceScreen } from '../screens/bricoleur/AddServiceScreen';
import { EditServiceScreen } from '../screens/bricoleur/EditServiceScreen';
import { BricoleurProfileScreen } from '../screens/bricoleur/BricoleurProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="ClientHome"
        component={ClientHomeScreen}
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RegionSelection"
        component={RegionSelectionScreen}
        options={{
          title: 'Région',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ClientProfile"
        component={ClientProfileScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BricoleurTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="BricoleurHome"
        component={BricoleurHomeScreen}
        options={{
          title: 'Mes Services',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hammer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddService"
        component={AddServiceScreen}
        options={{
          title: 'Ajouter',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BricoleurProfile"
        component={BricoleurProfileScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  const { userRole } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {userRole === 'bricoleur' ? (
        <>
          <Stack.Screen name="BricoleurTabs" component={BricoleurTabs} />
          <Stack.Screen name="EditService" component={EditServiceScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="ClientTabs" component={ClientTabs} />
          <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};