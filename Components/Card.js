import React from "react";
import { View, StyleSheet} from "react-native";

const Card = props =>{
    return(
        <View style={{...style.inputContainer, ...props.style}}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    inputContainer: {
        shadowColor : '#000',
        shadowRadius : 0,
        shadowOffset :{height : 2, width : 0},
        shadowOpacity : 0.26,
        elevation : 5,
        backgroundColor : "#fff",
        padding : 20,
        borderRadius : 10
      }
})

export default Card;