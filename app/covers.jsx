import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';

export default function Cover(){
    return(
        <ScrollView>
            <View style={sty.items}>
        <Image
        style={sty.cov}
        source={require('./assets/bcover.jpg')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/bcover.jpg')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/bcover.jpg')}
      />
      <Image
        style={sty.cov}
        source={require('./assets/bcover.jpg')}
      />
      </View>
</ScrollView>

    ); 
}

const sty = StyleSheet.create({
    cov:{
        width:80,
        height:120,
        margin:10,

    },
    items:{
        flexDirection:'row',
    }

})