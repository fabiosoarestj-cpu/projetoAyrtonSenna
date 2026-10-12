import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import VictoriesScreen from './components/VictoriesScreen';

const Abas = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
              screenOptions={{
                headerStyle:{
                  backgroundColor:'#F1C40F',
                  height:110,
                },
                headerTitleStyle:{
                  color:'black',
                  fontWeight:'bold'
                },
                tabBarStyle:{
                  backgroundColor:'#F1C40F',
                  height:110,
                },
                tabBarLabelStyle:{
                  fontSize:14,
                  
                },
                tabBarActiveBackgroundColor:'white',
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'black',

      }}
      >
        <Abas.Screen name='Início'
        options={{
          tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}/>
        }}
        component={HomeScreen}/>
        <Abas.Screen name='Sobre'
        options={{
          tabBarIcon:({color})=><FontAwesome6 name="circle-question" size={24} color={color}/>
        }}
        component={ProfileScreen}/>
        <Abas.Screen name='Vitórias'
        options={{
          tabBarIcon:({color})=><MaterialCommunityIcons name="trophy-variant" size={24} color={color} />
        }}
        component={VictoriesScreen}/>
      </Abas.Navigator>
    </NavigationContainer>
  );
}

