import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [enteredgoalText,setEnteredGoal] =useState("");
  const [courseGoals, setCourseGoals] = useState ([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  };
   

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) =>[...currentCourseGoals,enteredgoalText]);
  }

  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput style={styles.textImput} placeholder='Your course goal!' onChangeText={goalInputHandler}  /> 
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal)=><Text key={(goal)}>{goal}</Text>)}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    padding: 50,
    paddingHorizontal:26,
    flex:1


  },

  inputContainer:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    marginBottom:16,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"

  },
  textImput:{
    borderWidth: 1,
    borderColor:"#cccccc",
    width:"70%",
    marginRight:8,
    padding: 8

  },
  goalsContainer:{
    flex:5
  }
  
});