import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import * as PropTypes from "prop-types";
import ArrowIcon from "./icons8-left-24.png"

const NavBar = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {onBack ? (
          <TouchableHighlight onPress={() => onBack()}>
            <View>
              <Image style={styles.arrowIcon} source={ArrowIcon} />
            </View>
          </TouchableHighlight>
        ) : null}
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func
};

NavBar.defaultProps = {
  onBack: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#0068ff"
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15
  },
  text: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    marginLeft: 40
  },
  arrowIcon: {
    display: "flex",
    width: 24
  }
});

export default NavBar;
