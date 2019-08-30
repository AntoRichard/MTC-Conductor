import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Picker} from 'react-native'
import NumericInput from 'react-native-numeric-input'
export default class SwitchExample extends Component {  
    state = {  
        CurrentPlace:'',
        DestinationPlace:'',
        CurrentchoosenIndex: 0 ,
        DestinationchoosenIndex:0,
        value:1
    };  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text style={styles.textStyle}>Choose Your Place</Text>
                <Text style={styles.label}>Current Position</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.CurrentPlace}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({CurrentPlace: itemValue, CurrentchoosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>  
                <Text style={styles.label}>Destination Position</Text>
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.DestinationPlace}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({DestinationPlace: itemValue, DestinationchoosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>
                <Text style={styles.label}>No Of seats</Text>
                <NumericInput value={this.state.value} onChange={value => this.setState({value})} />
                <Text style={styles.textStyle}> {"Current Index ="+this.state.CurrentchoosenIndex} </Text>  
                <Text style={styles.textStyle}> {"Destination Index ="+this.state.DestinationchoosenIndex} </Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
     label:{
         margin:10,
         textAlign:"left"
     },
    textStyle:{  
        margin:30,
        fontSize:30,
        fontWeight:'bold',
        color:'#00b5ec'
    },  
    pickerStyle:{  
        height: 50,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
})  