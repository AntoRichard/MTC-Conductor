import React, { Component } from "react";
import Card from "../Components/Card";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import Color from "../Constants/Colors";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = async (viewId, setIsLogin) => {
    
    // const response = await fetch(
    //   "https://mtc-bus-tracker-a8b9e.firebaseio.com/userdata.json",
    //   { method: "POST", body: data }
    // );
    let isLogin = false;
    const response = await fetch(
      "https://mtc-bus-tracker-a8b9e.firebaseio.com/userdata.json",
      { method: "GET" }
    );
    var data = await response.json();
    const keys = Object.keys(data).map(value => data[value]);
    keys.forEach( key => {
      if((key.email === this.state.email) && (key.password === this.state.password)){
        setIsLogin(true);
        isLogin = true;
      }
    });
    if(isLogin){
      Alert.alert("Alert", "Button pressed " + viewId);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer}> 
          <Text style={styles.heading}>Conductor Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener("login",this.props.setIsLogin)}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener("restore_password")}
          >
            <Text>Forgot your password?</Text>
          </TouchableHighlight>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    margin: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: Color.primary
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 12,
    borderColor: "white",
    borderWidth: 1,
    borderBottomColor: "black",
    flex: 1
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280
  },
  loginButton: {
    backgroundColor: Color.primary
  },
  loginText: {
    color: "white"
  },
  cardContainer:{
    paddingTop : -80
  }
});
