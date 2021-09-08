import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text } from 'react-native-elements'
import MenuList from '../../components/MenuItems'

const RestaurantMenu = ({route}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri : route.params.imgUrl}}
             style={{ height : 300, borderRadius : 5, marginBottom : 5}}
             /> 
            <View style={styles.Menu}>
                <Text h4 style={{alignSelf : "center", paddingVertical : 4}}>Our Menu</Text>
                <View style={{flex : 1}}>
                    <MenuList/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignSelf : "stretch"
    }, 
    Menu : {
        flex : 1,
        paddingTop : 30,
        borderTopRightRadius : 50,
        borderTopLeftRadius : 50,
        backgroundColor : "white",
        marginTop : -80,
        color : "white"
    }, 
    text : {
        color : "white",
        fontSize :  20
    }
})
export default RestaurantMenu

