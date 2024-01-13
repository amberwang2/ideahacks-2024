import React from "react"
import {View, Text, StyleSheet} from "react-native"

const Title = (props) => {
    return (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Collision Cap</Text>
          <Text style={styles.messageText}>Welcome Back {props.name}!</Text>
        </View>
    )
  }
  const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
      backgroundColor: 'skyblue',
      padding: 25,
      marginBottom: 10
    },
    titleText: {
      fontSize: 25
    },     
    messageText: {
        fontSize: 20
    }
  })
export default Title