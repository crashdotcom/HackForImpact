import React from 'react';
import {View, Image, StyleSheet, ScrollView, Text} from 'react-native';

export default function Profiles(){
    return(
        <ScrollView>
            <View style={sty.items}>
                <View style={sty.person}><Image
        style={sty.cov}
        source={require('./assets/user.png')}
      />
      <Text style={{textAlign:'center'}}>User 1</Text>
      </View>
        <View style={sty.person}><Image
        style={sty.cov}
        source={require('./assets/user.png')}
      /><Text style={{textAlign:'center'}}>User 2</Text></View><View style={sty.person}><Image
      style={sty.cov}
      source={require('./assets/user.png')}
    />
    <Text style={{textAlign:'center'}}>User 3</Text></View><View style={sty.person}><Image
    style={sty.cov}
    source={require('./assets/user.png')}
  /><Text style={{textAlign:'center'}}>User 4</Text></View>
  <View style={sty.person}><Image
    style={sty.cov}
    source={require('./assets/user.png')}
  /><Text style={{textAlign:'center'}}>User 5</Text></View>
      </View>
</ScrollView>

    ); 
}

const sty = StyleSheet.create({
    cov:{
        width:50,
        height:50,
        margin:10,

    },
    items:{
        flexDirection:'row',
    },
    person:{
        flexDirection:'column',
        textAlign:'center'
    }

})