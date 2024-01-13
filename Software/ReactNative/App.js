import {View, Text, SafeAreaView, StyleSheet, ScrollView, Button} from "react-native"
import SafeViewAndroid from './GlobalStyles'
import Alarm from './src/components/Alarm'
import Title from './src/components/Title'
import Graph from "./src/components/Graph"

function createNewAlarm(label){
  var date = new Date()
  var currentDay = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  
  if (date.getMinutes() < 10){
    var currentTime = date.getHours() + ":0" + date.getMinutes()
  } else {
    var currentTime = date.getHours() + ":" + date.getMinutes()
  }

  sensor1 = Math.random()
  sensor2 = Math.random()
  sensor3 = Math.random()
  sensor4 = Math.random()
  sensor5 = Math.random() * 255

  avg = ((sensor1 + sensor2 + sensor3 + sensor4)/4).toFixed(2)
  if (avg > 0.8){
    id = "Dangerous"
  } else if (avg < 0.5) {
    id = "Safe"
  } else {
    id = "Concerning"
  }
  alarmArrayAvg.push(avg)
  pulseAlarmArray.push(sensor5.toFixed(2))
  alarmArrayLabels.push(label)
  alarmShockArray.push(<Alarm id={id} sensor1={sensor1.toFixed(2)} sensor2={sensor2.toFixed(2)} sensor3={sensor3.toFixed(2)} sensor4={sensor4.toFixed(2)} avg={avg} sensor5={sensor5.toFixed(2)}
  />)
}

const App = () => {

  alarmShockArray = []
  alarmArrayAvg = []
  alarmArrayLabels = []
  pulseAlarmArray = []

  for (let i = 1; i < 10; i ++){
    createNewAlarm(i)
  }

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.wrapper]}>
      <ScrollView >
      <Title name="Cayden"/>
      <View style={styles.centerContent}>
      <Text style={styles.graphHeader}>Shock Sensor Graph</Text>
      </View>
      <Graph alarm={alarmArrayAvg} labels={alarmArrayLabels}/>
      <View style={styles.centerContent}>
      <Text style={styles.graphHeader}>Pulse Sensor Graph</Text>
      </View>
      <Graph alarm={pulseAlarmArray} labels={alarmArrayLabels}/>
      {alarmShockArray}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'aliceblue',
    marginBottom: 10
  },
  centerContent: {
    alignItems: 'center'
  },
  graphHeader: {
    fontSize: 20
  }
})

export default App