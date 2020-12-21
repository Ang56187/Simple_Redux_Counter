import React,{Component, useReducer} from 'react';
import { View, Button,Text} from 'react-native';
import {incrementCount,decrementCount} from '../actions';
import {connect} from 'react-redux';

class ButtonScreen extends Component{
    render(){
        const {space} = styles;

        return(
        <View>
            <Button 
                title="Increment"
                onPress = {()=>{this.props.incrementCount(1);}}
            />
            <View style={space}/>
            <Button 
                title="Decrement"
                onPress = {()=>{this.props.decrementCount(1);}}
            />
            <View style={space}/>
            <Button 
                title = "Check counter"
                onPress={()=>{this.props.navigation.navigate('Counter')}}
            />
            <View style={space}/>
            <Text>{this.props.count}</Text>
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
        count: state.counter.count
    }
}

export default connect(mapStateToProps,{incrementCount,decrementCount})(ButtonScreen);