import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Green Smile": require("../assets/Green Smile.ttf"),
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fontsLoaded: false,
      userSignedIn: false
    };
};
async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
    componentDidMount() {
    this._loadFontsAsync();
  }
    signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Inicial");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  render(){
    if (this.state.fontsLoaded) {
        SplashScreen.hideAsync();
        const { email, password } = this.state;

        return(
            <View>
                <SafeAreaView>
                    <Image source={require("../assets/PlanetIcon.png")}/>
                </SafeAreaView>
            </View>
        )
    }
  }
}