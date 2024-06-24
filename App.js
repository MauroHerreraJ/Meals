
import { StyleSheet,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreens from './screens/CategoriesScreens';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDeatailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
 

    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#24180f" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" }

          }}
        >
          <Stack.Screen
            name="MealsCategories" component={CategoriesScreens} options={{
              title: "All Categories",

            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={({route,navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,

          //   };
          // }}
          />
          <Stack.Screen name = "MealDetail" component={MealDeatailScreen} options={{
            headerRight:()=>{
            return <Button title='tap me'/>
          }}}/>
         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});