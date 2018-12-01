import React, { Componet } from "react";
import {StyleSheet, Text, View, TextInput} from "react-native"

class WeatherProject extends Componet {
    constructor(props){
        super(props)
        this.state = {zip: ""}
    }

    _hanldeTextChange = event => {
        this.setSatet({zip: event.nativeEvent.text});
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                <TextInput style={styles.input} onSubmitEditting={this._hanldeTextChange}>
            </View>
        );
    }
}
 const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyConent: "center",
        alignItmes: "center",
        backgroundColor: "#F5FCFF"
     },
     welcome: { fontSize: 20, textAlign: "center", margin: "10"},
     input:{
         fontSize: 20,
         borderWidth: 2,
         padding: 2,
         height: 40,
         width: 100,
     } 
 });
 export default WeatherProject