import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlOpi_SyvWatMIGoSgJ1b7l8CYcDYbpFg",
//   authDomain: "mtc-bus-tracker-a8b9e.firebaseapp.com",
//   databaseURL: "https://mtc-bus-tracker-a8b9e.firebaseio.com",
//   projectId: "mtc-bus-tracker-a8b9e",
//   storageBucket: "",
//   messagingSenderId: "454429347982",
//   appId: "1:454429347982:web:d7ed2cbe86bb3d1a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  var Display;
  if (isLogin) {
    Display = <Main setIsLogin={setIsLogin} />;
  } else {
    Display = <Login setIsLogin={setIsLogin} />;
  }
  return (
    <View style={styles.container}>
      <Header title="MTC Tracker" />
      {Display}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
