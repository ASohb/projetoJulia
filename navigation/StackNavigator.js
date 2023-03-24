import React from "react";
import { createStackNavigator } from "react-navigation/stack";
import Inicial from "../screens/Inicial";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName= "Home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Inicial" />
        </Stack.Navigator>
    );
};

export default StackNavigator;