import { Text, TextInput , Button, ScrollView, StyleSheet} from "react-native";
import React, {useState, useEffect} from 'react';


export default function Landing() {
    const [mail, updateEmail]  = useState('');
    const [password, updatePassword] = useState('');
    let users = {};
    let isLanding = true;
  const clearVals = ()=>{
    users[mail] = 
    updateEmail('');

    isLanding = false;
  }

  useEffect(()=>{
    isLanding = !isLanding
  },[isLanding]);
  const styles = StyleSheet.create({
    container:{
     marginTop:100,
   
    },
    submitButton:{
     borderRadius:10,
     borderWidth:2,
     borderColor:'black',
     color:'red',
     width:100,
    },
    input:{
     borderWidth:1,
     borderRadius:10,
     marginLeft:10,
     marginRight:10,
     marginBottom:5,
     padding:5,
     
    },
    heading:{
     alignSelf:'center',
     justifyContent:'center',
     fontSize:20,
     color:'green',
     textAlign:'center',
    }
   });
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome to the Friends of Hoover Durant Public Library! Please register to begin.</Text>
    <Text>Name</Text>
    <TextInput style={styles.input} placeholder="John Doe"></TextInput>
    <Text>Email</Text>
    <TextInput style={styles.input}autoComplete='email' autoCapitalize="none" placeholder="name@email.com"></TextInput>
    <Text>Password</Text>
    <TextInput style={styles.input} defaultValue={password}></TextInput>

    <Button style={styles.submitButton} title="Submit" onPress={clearVals}></Button>


    <Text style={styles.heading}>
    
    </Text>

    </ScrollView>


  );
}


