import React, {useState} from 'react';
import {Text, ScrollView , StyleSheet, Button} from 'react-native';
import Landing from './landing';

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
            

            <Text style={styles.body}>Upcoming events:</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
   });

export default User;