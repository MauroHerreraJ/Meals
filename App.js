import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appConteiner} >  

      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Objetivo del curso'/>
        <Button title='Agregar'/>
      </View>
      <View>
        <Text>Nuevos objetivos</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
 appConteiner:{
  padding : 50
 },
 inputContainer:{
  flexDirection: "row",
  justifyContent:"space-between"
 },
 TextInput:{
  borderWidth: 1,
  borderColor:"#cccccc",
  width:"80%",
  marginRight: 8,
  padding:8

 }
});