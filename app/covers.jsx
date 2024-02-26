import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';

export default function Cover(){
    return(
        <ScrollView>
            <View style={sty.items}>
        <Image
        style={sty.cov}
        source={require('./assets/favicon.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/favicon.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/favicon.png')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/favicon.png')}
      />
      </View>
</ScrollView>

    ); 
}

sty = StyleSheet.create({
    cov:{
        width:50,
        height:70,
        margin:10,

    },
    items:{
        flexDirection:'row',
    }

})