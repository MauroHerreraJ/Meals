import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './Components/GoalItems';
import GoalImput from './Components/GoalInput';


export default function App() {

  
  const [courseGoals, setCourseGoals] = useState ([]);
   
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals,{text: enteredGoalText, id: Math.random().toString()}]);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
    
  };

  return (
    <View style={styles.appContainer}>
      <GoalImput onAddGoal={addGoalHandler}/>

       <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData=>{return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>;}}
        keyExtractor={(item,index) => {return item.id;}}
        alwaysBounceVertical = {false}/>      
       </View>

    </View>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    padding: 50,
    paddingHorizontal:26,
    flex:1,
  }, 
  goalsContainer:{
    flex:5,
  }
  
});