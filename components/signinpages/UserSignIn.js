import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserSignIn({navigation}) {
  return (
      <View style={styles.container}>
      <Text>Sign In</Text>
      <Input
      placeholder="Email"
      leftIcon={
        <Icon
        name="user"
        size={20}
        color="black"/>
      }
      />
      <Input
      placeholder="Password"
      leftIcon={
      <Icon
      name="lock"
      size={20}/>}/>
      <Button
      title="Sign-in"
      onPress={() => {navigation.navigate("Black Drop", {name : "Peachy"})}}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
