import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button,Alert } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../context/AuthContext';

export default function RegisterScreen() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, register} = useContext(AuthContext)

  return (
    <View style={styles.container}>
        {/* <Spinner visible={isLoading}/> */}
        <TextInput value={username} placeholder="Enter Username" onChangeText={text=>setUsername(text)}/>
        <TextInput value={password} placeholder="Enter Password" onChangeText={text=>setPassword(text)}/>
        <Button onPress={()=>register(username,password)} title="signup button"/>
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