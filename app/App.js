import { Text, TextInput , Button, ScrollView, StyleSheet, View, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from 'react';
import User from './user';
import Landing from "./landing";
import Home from "./homepage";



let showFirst = true;

export default function App(){
  const [showFirst, updateShow] = useState(true);
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={()=>{
  updateShow(false);
        }}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{
  updateShow(true);
        }}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return(
    <>
    {showFirst? <User/> : <Home/>}
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

// export default function App() {
//   useEffect(()=>{Landing.isLanding = true}, [])
//   let [landing, updateL] = useState(Landing.isLanding);
//   console.log(Landing.isLanding);

//   return (<ScrollView style='sty.bord'>
//     {landing? <Landing/>: <User/>}
    
//     </ScrollView>


//   );
// }

// const sty = StyleSheet.create({
//   bord:{
//     borderWidth:3,
//     borderRadius:4,
//     borderColor:'green',
//     backgroundColor:'gold',
    
//   },
// });