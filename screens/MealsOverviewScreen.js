import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS,CATEGORIES } from '../data/dummy-datta';
import MealList from '../Components/MealList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);


  return <MealList items={displayedMeals}/>


}

export default MealsOverviewScreen;

