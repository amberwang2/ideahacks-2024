import React from "react"
import {View, Dimensions} from "react-native"
import {LineChart} from "react-native-chart-kit";

const Graph = (props) => {
    return (
<View>
  <LineChart
    data={{
      labels: props.labels,
      datasets: [
        {
          data: props.alarm
        }
      ]
    }}
    width={Dimensions.get("window").width - 50} // from react-native
    height={200}
    yAxisInterval={1}
    chartConfig={{
      backgroundGradientFrom: 'skyblue',
      backgroundGradientTo: 'powderblue',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "5",
        strokeWidth: "1.5",
        stroke: 'blue'
      }
    }}
    bezier
    style={{
      flex: 1,
      margin: 10,
      borderRadius: 16,
      alignItems: 'center'
    }}
  />
</View>
    );
}

export default Graph