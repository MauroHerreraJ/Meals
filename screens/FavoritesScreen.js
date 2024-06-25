import { useContext } from "react";
import MealList from "../Components/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-datta";
function FavoriteScreen(){
    const favoriteMealsCtx=useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal)=> favoriteMealsCtx.ids.includes(meal.id))
    
    return <MealList items={favoriteMeals}/>
    
}
export default FavoriteScreen;