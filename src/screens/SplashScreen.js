import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace Bricolage</Text>
      <ActivityIndicator size="large" color="#FF6B6B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF6B6B',
  },
});