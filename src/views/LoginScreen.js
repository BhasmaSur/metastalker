import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button,Alert } from 'react-native';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isLoading, login} = useContext(AuthContext)


  return (
    <View style={styles.container}>
        {/* <Spinner visible={isLoading}/> */}
        <TextInput value={username} placeholder="Enter Username" onChangeText={text=>setUsername(text)}/>
        <TextInput value={password} placeholder="Enter Password" onChangeText={text=>setPassword(text)}/>
        <Button onPress={()=>login(username,password)} title="login button"/>
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