import React,{Component, useReducer} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import {incrementCount,decrementCount} from '../actions/index';
import {connect} from 'react-redux';

class CounterScreen extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.count}</Text>
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
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(CounterScreen);