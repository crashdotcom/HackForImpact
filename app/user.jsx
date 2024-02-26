import React, {useState} from 'react';
import {Text, ScrollView , StyleSheet, Button} from 'react-native';
import Landing from './landing';
import Cover from './covers';

const User = () =>{
    let val = 0;
    const {changeVal, updateVal} = useState();
    let name = "";
    const p = () => {
        val= val + 1;
        Landing.isLanding = true;
    }
    return(
        <ScrollView>
            <Text style={styles.container}>Your Profile</Text>
            <Text style={styles.body}>Checked out books:</Text>
            <Cover/>

            <Text style={styles.body}>Upcoming events:</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        fontSize:25,
        paddingLeft:100,
        paddingRight:100,
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
   });

export default User;