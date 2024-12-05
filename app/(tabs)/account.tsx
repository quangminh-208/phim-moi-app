import { StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "@/screens/AccountScreen";
import AccountInfoScreen from "@/screens/AccountInfoScreen";


const Stack = createNativeStackNavigator();

function RootAccountStack() {
    return (
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Information" component={AccountInfoScreen} />
      </Stack.Navigator>
    );
  }


export default function Account() {
    return (
      <NavigationContainer>
        <RootAccountStack />
      </NavigationContainer>
    );
  }

