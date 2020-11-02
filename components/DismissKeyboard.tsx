import * as React from 'react';
import { View, TextInput, StyleSheet, Keyboard,  TouchableWithoutFeedback } from 'react-native';

export const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
    {children}
    </TouchableWithoutFeedback>
    );
