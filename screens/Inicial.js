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
import CardPlanetas from "./CardPlanetas";
import { FlatList } from "react-native-gesture-handler";

let stories = require("./temp.json");

let customFonts = {
  "Green Smile": require("../assets/Green Smile.ttf"),
};

   class Inicial extends Component {

    renderItem = ({ item: story }) => {
        return <CardPlanetas story={story} navigation={this.props.navigation} />;
      };
      keyExtractor = (item, index) => index.toString();

  render(){
 

        return(
            <View >
                 
                 <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
            </View>
        )
    }
  }


export default Inicial;

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#99baf0',
        height:800,
        
       
     },
     textoteste:{
         color:'#1d4b96',
         marginTop:400,
         textAlign:'center'
     },
     

})