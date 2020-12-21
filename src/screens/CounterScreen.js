import React,{Component, useReducer} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {incrementCount,decrementCount} from '../actions/index';
import {connect} from 'react-redux';

class CounterScreen extends Component{
    render(){
        return(
            <View>
                <Text>Count:{this.props.count}</Text>
                <Text>Inner_counter1: {this.props.inner_counter1}</Text>
                <Text>Inner_counter2: {this.props.inner_counter2}</Text>
                <Button 
                    title = "Go back"
                    onPress={()=>{this.props.navigation.navigate('Button')}}
                />
            </View>

    );
}};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
    return {
        count: state.counter.count,
        inner_counter1: state.counter.inner_counter1,
        inner_counter2: state.counter.inner_counter2
    }
}

export default connect(mapStateToProps)(CounterScreen);