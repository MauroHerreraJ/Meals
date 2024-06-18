import { View,Text,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-datta";

function MealsOverviewScreen(){
    return (
    <View style={styles.container}>
        <Text> Meals Overvies Screen</Text>
    </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    },

})