import { useContext, useLayoutEffect } from "react";
import { View,Text,Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-datta";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";




function MealDetailScreen({route,navigation}){
    const favoriteMealsCtx=useContext(FavoritesContext); 

    const mealId = route.params.mealId;
    
    const selectedMeals = MEALS.find((meal) => meal.id === mealId);

    const mealsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavouriteStatusHandler(){
        if (mealsFavorite){
           favoriteMealsCtx.removeFavorite(mealId);
        } else{
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:() =>{
                return (
                <IconButton 
                icon={mealsFavorite ? "star" : "star-outline"} 
                color="white" 
                onPress={changeFavouriteStatusHandler}/>
                );
            }
        });
     },[navigation,changeFavouriteStatusHandler]);

    return <ScrollView style={styles.rootContainer}>
       <Image style={styles.image} source={{uri:selectedMeals.imageUrl}}/> 
       <Text style={styles.title}>{selectedMeals.title}</Text>
        <MealDetails 
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
        /> 
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
       <Subtitle>Ingredient</Subtitle>
       <List data={selectedMeals.ingredients}/>
       <Subtitle>Steps</Subtitle>
       <List data = {selectedMeals.steps}/>
       </View>
       </View>
       </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:"bold",
        fontSize:24,
        margin:8,
        textAlign:"center",
        color:"white"
    },
    detailText:{
        color: "white"
    },
    listOuterContainer:{
        alignItems:"center"


    },
    listContainer:{
        width:"80%"

    }
   
     
})