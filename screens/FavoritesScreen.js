import { StyleSheet,View,Text } from "react-native";
import { useContext } from "react";
import MealList from "../Components/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-datta";
function FavoriteScreen(){
    const favoriteMealsCtx=useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal)=> favoriteMealsCtx.ids.includes(meal.id))

    if (favoriteMeals.length ===0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }
    
    return <MealList items={favoriteMeals}/>
    
}
export default FavoriteScreen;

const styles= StyleSheet.create({
   rootContainer:{
    flex:1,
    justifyContent: "center",
    alignItems:"center"

   },
   text:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
   }
})