let all_data = {1: [], 2: [], 3: [], 4: []};

//data comes in at sensor 1, sensor 2, sensor 3, sensor 4, end, repeat
let grouped_data = []
function collect_one_interation_data(data) {
    grouped_data.push(data)

    if (grouped_data.length == 4) {
        update_data(grouped_data)
        grouped_data = []
    }
}

function update_data(new_data) {  

    for (let i = 0; i < new_data.length; i++) {
        all_data[i + 1].push(new_data[i])
      }
  };


function scan_for_impact(new_data){
    let maxed_sensors = []

    for (let i = 0; i < new_data.length; i ++){
        if (new_data[i] == 255) {
            maxed_sensors.push(i)
        }
    }

    if (maxed_sensors.length >= 2) {
        let sensor_string = "An impact has been detected by sensors "

        for (i = 0; i < maxed_sensors.length; i++){
            if (i != maxed_sensors.length - 1 && maxed_sensors.length > 2){
                sensor_string += `${i + 1}, `
            } else if (i != maxed_sensors.length - 1 && maxed_sensors.length == 2) {
                sensor_string += `${i + 1} `
            } else {
                sensor_string += `and ${i + 1}`
            }
        }
        console.log(`${sensor_string}.`)
    }
}

sample_data = [255, 0, 100, 255]
scan_for_impact(sample_data)
//setInterval(parse_data); 
//setInterval(impact_detected)