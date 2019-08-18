import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { decreaseAction, increaseAction } from "./action";
class ScreenA extends Component {
  state = {};
  render() {
    return (
      <View>
          <Text>{this.props.index}</Text>
        <TouchableOpacity onPress={this.props.onIncrement}>
          <Text>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onDecrement}>
          <Text>Giảm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    index:state.counterReducers.index 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDecrement: step => {
      dispatch(decreaseAction(step));
    },
    onIncrement: step => {
      dispatch(increaseAction(step));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenA);
