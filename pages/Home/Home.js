import React from 'react'
import { View, Text } from 'react-native'
import Orders from './Orders';
import Profile from './Profile';
import Restaurants from './Restaurants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantMenu from './RestaurantMenu';
import Cart from './Cart';


const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <View style={{flex : 1}}>
            <Tab.Navigator
             screenOptions={{
                headerShown: false
              }}>
                <Tab.Screen name="Restaurants" component={Restaurants} />
                <Tab.Screen name="Cart" component={Cart}/>
                <Tab.Screen name="Orders" component={Orders}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </View>
    )
};


export default Home
