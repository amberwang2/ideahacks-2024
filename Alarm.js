import React from "react"
import {View, Text, StyleSheet} from "react-native"

const Alarm = (props) => {

  var date = new Date()
  var currentDay = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  
  if (date.getMinutes() < 10){
    var currentTime = date.getHours() + ":0" + date.getMinutes()
  } else {
    var currentTime = date.getHours() + ":" + date.getMinutes()
  }

    return (
      <View style={styles.subheadingContainer}>
        <View style={styles.subheadingTitleContainer}>
          <Text style={styles.subheadingTitleText}>{props.id} Alarm</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.leftContainer}>
            <Text style={{fontSize: 20}}>Shock Sensors</Text> 
            <Text>Avg: {props.avg}</Text>
            <Text>Sensor1: {props.sensor1}</Text>
            <Text>Sensor2: {props.sensor2}</Text>
            <Text>Sensor3: {props.sensor3}</Text>
            <Text>Sensor4: {props.sensor4}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={{fontSize: 20}}>Date</Text> 
            <Text>{currentDay}</Text>
            <Text>{currentTime}</Text>
            <Text></Text>
            <Text style={{fontSize: 20}}>Pulse Sensor</Text> 
            <Text>{props.sensor5}</Text>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    subheadingContainer: {
      backgroundColor: 'powderblue',
      padding: 25,
      paddingBottom: 35,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 15,
      borderRadius: 20
    },
    subheadingTitleContainer: {
      alignItems: 'center',
      marginBottom: 20
    },
    descriptionContainer: {
      flexDirection: 'row',
      flex: 1
    },
    leftContainer: {
      flex: 2,
      alignItems: 'center'
    },
    rightContainer: {
      flex: 2,
      alignItems: 'center'
    },
    subheadingTitleText: {
      fontSize: 25
    }
  })

export default Alarm