import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import RegisterScreen from '../views/RegisterScreen';
import SplashScreen from '../views/SplashScreen';
import { useContext } from 'react';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const {userInfo, splashLoading} = useContext(AuthContext);
  console.log("userInfo : ", userInfo);
  console.log("splashLoading : ", splashLoading);
    return (
      <NavigationContainer>
        <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.access_token ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
      </NavigationContainer>
    );
  }