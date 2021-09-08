import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import RestaurantMenu from './RestaurantMenu';
import { NavigationContainer } from '@react-navigation/native';

const RestaurantMenuStack = createNativeStackNavigator();

const Restaurants = ({navigation}) => {
    return (
        <>
        {/* <Text>Restaurants</Text> */}
          <RestaurantMenuStack.Navigator
          screenOptions={{
            headerShown : true,
        }}>
            <RestaurantMenuStack.Screen 
            name="restaurant list"
            component={RestaurantList}
            />
            <RestaurantMenuStack.Screen 
           name="restaurant menu"
            component={RestaurantMenu}
            />
        </RestaurantMenuStack.Navigator>
        </>
    )
}
const RestaurantList = ({navigation}) => {
    return(
        <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            {/* <TouchableOpacity onPress={() => {navigator.navigate("Menu")}}> */}
            <Image
            source={{uri : "https://image.shutterstock.com/image-vector/grill-design-element-vintage-style-260nw-311909807.jpg"}}
            style={{ height : 300, borderRadius : 5, marginBottom : 5}}
            Placeholder={ActivityIndicator}
            onPress={() => {navigation.navigate("restaurant menu", {imgUrl : "https://image.shutterstock.com/image-vector/grill-design-element-vintage-style-260nw-311909807.jpg",name : "emmanuel"})}}/>
            
            <Image
            source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DO-DRD1xdlsUum8YCjrLTJ50-5UN9_s0ItDZllWDCeHsy-mp-iDZKnXnXQyHY4xpGx8&usqp=CAU"}}
            style={{ height : 300, borderRadius : 5, marginBottom : 5}}
            Placeholder={ActivityIndicator}
            onPress={() => {navigation.navigate("restaurant menu", {name : "black", imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DO-DRD1xdlsUum8YCjrLTJ50-5UN9_s0ItDZllWDCeHsy-mp-iDZKnXnXQyHY4xpGx8&usqp=CAU"})}}/>
            
            <Image
            source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEBSwFbURD-pETOmUh-DwPbA0Jps6oKxmfb5sl47TYjgzWhOqGvVWodHn-l-iB4b_XTQ&usqp=CAU"}}
            style={{ height : 300, borderRadius : 5, marginBottom : 5}}
            Placeholder={ActivityIndicator}
            onPress={() => {navigation.navigate("restaurant menu", {imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEBSwFbURD-pETOmUh-DwPbA0Jps6oKxmfb5sl47TYjgzWhOqGvVWodHn-l-iB4b_XTQ&usqp=CAU",name : "favour"})}}/>
            
            <Image
            source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Di_H80w71hdZFkJmAFgLtaVaM6fmWaxVfxk4XWfGXosw2WQk2QoLnXHEaFCR2HrfhKw&usqp=CAU"}}
            style={{ height : 300, borderRadius : 5, marginBottom : 5}}
            Placeholder={ActivityIndicator}
            onPress={() => {navigation.navigate("restaurant menu", {imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Di_H80w71hdZFkJmAFgLtaVaM6fmWaxVfxk4XWfGXosw2WQk2QoLnXHEaFCR2HrfhKw&usqp=CAU",name : "peachy"})}}/>
        </ScrollView>
    </View>

    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        alignSelf : "stretch"
        // padding : "10pt",
        // justifyContent : "center"
    },
    scroll : {
        padding : 4,
    }
})
export default Restaurants
