import React from "react";
import { TextInput,Button,View } from "react-native";
import { styles } from "./styles";


const Input = ({placeholder , value , onChangeText, buttonColor,onHandlerButton,buttonTitle}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder} style={styles.input} value={value} onChangeText={(text) => onChangeText (text)} />
            <Button title={buttonTitle} style={buttonColor} onPress={onHandlerButton}/>
        </View >
    )
}
export default Input;
