import React, {useState} from "react"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AgentSignIn from "../components/signinpages/AgentSignIn";
import UserSignIn from "../components/signinpages/UserSignIn";

export default function SignInPage({navigation}) {
    const [currentUser, setCurrentUser] = useState(true)

    const Toggler = ( ) => {
        setCurrentUser(!currentUser)
    }
  return (
      <View style={styles.container}>
          {currentUser ? <UserSignIn navigation={navigation}/> : <AgentSignIn navigation={navigation}/>}
          <TouchableOpacity onPress={Toggler}>
              <Text style={styles.toggler}>
              {currentUser ? "Sign in as Agent" : "Sign-in as user"}
              </Text>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight : 20
  },
  toggler : {
      padding : 5,
      color : "blue",
      alignSelf : "center"
  }
});
