import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../components/Navigation';

import {  Onboarding } from './OnBoarding';
import {  Welcome } from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import PasswordChanged from './PasswordChanged';


const AuthenticationStack = createStackNavigator<Routes>();

export const AuteticationNavigator = () => {
  return(
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding}/>
      <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
      <AuthenticationStack.Screen name="Login" component={Login}/>
      <AuthenticationStack.Screen name="SignUp" component={SignUp}/>
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged}/>
    </AuthenticationStack.Navigator>
  )
}


export {  Onboarding } from './OnBoarding';
export {  Welcome } from './Welcome';