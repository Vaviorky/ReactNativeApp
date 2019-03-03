import React, {Component} from 'react';
import {StyleSheet, TextInput, Keyboard} from 'react-native';

type Props = {
  onChangeText: () => void,
  value: string,
  type?: string,
  onFocus?: () => void
};

class CustomTextInput extends Component<Props> {
  static defaultProps = {
    type: 'default',
    onFocus: null
  };

  state = {
    isFocused: false
  };

  handleFocus = () => {
    this.setState({isFocused: true});

    const {onFocus} = this.props;
    if (onFocus) {
      Keyboard.dismiss();
      onFocus();
    }
  };

  render() {
    const {isFocused} = this.state;
    const {onChangeText, value, type} = this.props;
    return (
      <TextInput
        onFocus={this.handleFocus}
        onBlur={() => this.setState({isFocused: false})}
        underlineColorAndroid={isFocused ? "#428af8" : "#d7d7d7"}
        onChangeText={(newValue) => onChangeText(newValue)}
        value={value}
        keyboardType={type}
        style={styles.textField}
      />
    );
  }
}

const styles = StyleSheet.create({
  textField: {}
});

export default CustomTextInput
