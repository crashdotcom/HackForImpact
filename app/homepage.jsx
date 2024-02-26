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
        fontSize:25,
        paddingLeft:40,
        paddingRight:40,
        paddingTop:20,
        paddingBottom:20,
        color:'black',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'lightblue',
       },
    body:{
        marginLeft:10,
        fontSize:20,
    }
})