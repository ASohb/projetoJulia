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



let customFonts = {
  "Green Smile": require("../assets/Green Smile.ttf"),
};

   class CardPlanetas extends Component {


  render(){
 

        return(
            <View >
                 

                 <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("Planetas", {
              story: this.props.story
            })
          }
        >
          
           

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.planeta}
              </Text>
              <Text style={styles.storyAuthorText}>
                {this.props.story.descricao}
              </Text>
              <Text style={styles.descriptionText}>
                {this.props.story.sobre}
              </Text>
            </View>
     
            
        
        </TouchableOpacity>
            </View>
        )
    }
  }


export default CardPlanetas;

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

    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
   
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: 25,
  
    },
    storyContainer: {
      flex: 1
    },
    storyCard: {
      margin: 20,
      backgroundColor: "#2f345d",
      borderRadius: 20
    },
    image: {
      width: "100%",
      alignSelf: "center",
      
      resizeMode: "contain"
    },
    dataContainer: {
      flexDirection: "row",
      padding: 20
    },
    titleTextContainer: {
      flex: 0.8
    },
    storyTitleText: {
      
      fontSize: 25,
      color: "white"
    },
    storyAuthorText: {
  
     fontSize: 14,
      color: "white"
    },
    iconContainer: {
      flex: 0.2
    },
    storyTextContainer: {
      padding: 20
    },
    storyText: {
      
      fontSize: 14,
      color: "white"
    },
    moralText: {
        fontSize: 14,
      color: "white"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    }

})