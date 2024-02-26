import { Text, ScrollView, StyleSheet } from "react-native";
import Cover from "./covers";
import Profiles from "./userProfiles";

export default function Home(){
    return(
        <ScrollView>
            <Text style={sty.container}>Welcome to the Friends of Hoover Durant Public Library!</Text>
            <Text style={sty.body}>Events near you:</Text>
            <Text style={sty.body}>New arrivals:</Text>
            <Cover/>
            <Text style={sty.body}>Similar users:</Text>
            <Profiles/>
        </ScrollView>
    );
}
sty = StyleSheet.create({
    container:{
        marginTop:50,
        fontSize:20,
        color:'green',
        alignSelf:'center',
       },
    body:{
        marginLeft:10,
        fontSize:15,
    }
})