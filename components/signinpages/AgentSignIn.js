import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements/dist/input/Input';

const AgentSignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Sign In As Admin</Text>
      <Input
      placeholder="Email"
      leftIcon={
        <Icon
        name="user"
        size={10}
        color="black"/>
      }
      />
      <Input
      placeholder="Password"
      leftIcon={
      <Icon
      name="lock"
      size={10}/>}/>
      <Button
      title="Sign-in"
      onPress={() => {navigation.navigate("Agent Panel")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AgentSignIn
