
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreens from './screens/CategoriesScreens';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDeatailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import {Ionicons} from "@expo/vector-icons";
import FavoriteContextProvider from './store/context/favorites-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (<Drawer.Navigator 
    screenOptions={{
    headerStyle: { backgroundColor: "#615146" },
            headerTintColor: "white",
            sceneContainerStyle: { backgroundColor: "#24180f" },
            drawerContentStyle : { backgroundColor: "#24180f" },
            drawerInactiveTintColor: "white",
            drawerActiveTintColor:"#24180f",
            drawerActiveBackgroundColor:"#615146"

  }

  }>
    <Drawer.Screen 
    name = "Categories" 
    component={CategoriesScreens} 
    options={{title:"All Categories", 
    drawerIcon:({color, size})=> (
    <Ionicons name="list" color={color} size= {size}/>
    ),
  }}/>
  
    <Drawer.Screen name = "Favorites" component={FavoriteScreen} options={{
      drawerIcon:({color, size})=> (
        <Ionicons name="star" color={color} size= {size}/>
        ),
    }} />
  </Drawer.Navigator>
  );
}


export default function App() {
  return (
 

    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#615146" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" }

          }}
        >
          <Stack.Screen
            name="Drawer" component={DrawerNavigator} 
            options={{
            title: "All Categories",
            headerShown:false

            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          
          />
          <Stack.Screen name = "MealDetail" component={MealDeatailScreen}  options={{title:"About the Meal"}}
           
          />
         
        </Stack.Navigator>
      </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});