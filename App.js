import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {StatusBar} from "expo-status-bar"


import GoalItem from './Components/GoalItems';
import GoalImput from './Components/GoalInput';


export default function App() {

  const [modalVisible, setModalIsVisible] =useState(false);
  const [courseGoals, setCourseGoals] = useState ([]);

  function startAddGoalsHandler (){
    setModalIsVisible (true);
  };

  function endAddGoalHandler(){
    setModalIsVisible(false);
  };
   
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
    
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      
      
      <GoalImput  
      visible={modalVisible} 
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}/>

       <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData=>{return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;}}
        keyExtractor={(item,index) => {return item.id;}}
        alwaysBounceVertical = {false}/>    
       <View style={styles.title}>
        <Button title='Add New Goal' color= "#5e0acc" onPress={startAddGoalsHandler}/>  
        </View>
       </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    paddingTop: 60,
    paddingHorizontal:16,
    flex:1,
    
    
  }, 
  goalsContainer:{
    flex:5,
  },
  title:{
    flex:0.1,
  }
  
});