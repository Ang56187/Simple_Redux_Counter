import React,{Component, useReducer} from 'react';
import { View, Button,Text,TextInput} from 'react-native';
import {incrementCount,decrementCount,
    increment1Count,decrement1Count,
    increment2Count,decrement2Count,changeValue} from '../actions';
import {connect} from 'react-redux';

class ButtonScreen extends Component{
    render(){
        const {space} = styles;

        const {value} = this.props;

        return(
        <View>
            <Button 
                title="Increment count"
                onPress = {()=>{this.props.incrementCount(value);}}
            />
            <Button 
                title="Decrement count"
                onPress = {()=>{this.props.decrementCount(value);}}
            />
            <View style={space}/>
            <Button 
                title="Increment counter 1"
                onPress = {()=>{this.props.increment1Count(value);}}
            />
            <Button 
                title="Decrement counter 1"
                onPress = {()=>{this.props.decrement1Count(value);}}
            />
            <View style={space}/>
            <Button 
                title="Increment counter 2"
                onPress = {()=>{this.props.increment2Count(value);}}
            />
            <Button 
                title="Decrement counter 2"
                onPress = {()=>{this.props.decrement2Count(value);}}
            />
            <View style={space}/>
            <Button 
                title = "Check counter"
                onPress={()=>{this.props.navigation.navigate('Counter')}}
            />
            <View style={space}/>

            <TextInput
                label = "Increment decrement value"
                keyboardType="numeric"
                placeholder = "Enter value here"
                value = {this.props.value}
                onChangeText = {(value)=>{
                    this.props.changeValue(value);
                }}
            />           
            <Text>Increment/decrement value: {this.props.value}</Text> 
            <Text>Count:{this.props.count}</Text>
            <Text>Inner_counter1: {this.props.inner_counter1}</Text>
            <Text>Inner_counter2: {this.props.inner_counter2}</Text>

        </View>
    );
}};

const styles = {
    space:{
        paddingTop: 10
    }
};

const mapStateToProps = state => {
    return {
        count: state.counter.count,
        inner_counter1: state.counter.inner_counter1,
        inner_counter2: state.counter.inner_counter2,
        value : state.input.value
    }
}

export default connect(mapStateToProps,{incrementCount,decrementCount,
    increment1Count,decrement1Count,
    increment2Count,decrement2Count,changeValue})(ButtonScreen);