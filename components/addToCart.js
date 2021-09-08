import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, } from 'react-native'
import {  Text, Overlay, Card, ListItem,Button, Icon, Image} from 'react-native-elements';

const AddToCart = ({visible, toggleOverlay, menu}) => {

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <CardContainer food={menu}/>
      </Overlay>
    </View>
  );
};

const CardContainer = ({food}) => { 
   const addToCart = () => {
    //  try {
    //    await AsyncStorage 
    //  } catch (error) {
       
    //  }
   }
    return (
    <Card containerStyle={{backgroundColor : "white"}}>
  <Card.Title h3>{food.food}</Card.Title>
  <Card.Divider/>
        <View>
          <Image
            style={{height : 300, width : 300}}
            resizeMode="cover"
            source={{ uri: food.image }}
          />
          <Text style={{textTransform : "capitalize", paddingVertical: 5}}>{food.desc}</Text>
          <Text h4 style={{alignSelf : "flex-end", paddingVertical: 5}}>&#8358;{food.price}</Text>
          <Button
          title="Add To Cart"
          icon={<Icon
            name='add'
            color='white' />}/>
        </View>
</Card>
    )
}

export default AddToCart