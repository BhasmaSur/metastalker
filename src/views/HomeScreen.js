import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({navigation}) {
  const {isLoading, userInfo, logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Welcome {userInfo.email}</Text>
      <Button onPress={logout} title="Logout"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });