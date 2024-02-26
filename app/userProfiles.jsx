import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';

export default function Profiles(){
    return(
        <ScrollView>
            <View style={sty.items}>
        <Image
        style={sty.cov}
        source={require('./assets/user.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/user.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/user.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/user.png')}
      />
      </View>
</ScrollView>

    ); 
}

sty = StyleSheet.create({
    cov:{
        width:50,
        height:50,
        margin:10,

    },
    items:{
        flexDirection:'row',
    }

})