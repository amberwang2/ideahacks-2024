let all_data = {1: [], 2: [], 3: [], 4: [], 5: []};
// 5 is pulse monitor
//data comes in at sensor 1, sensor 2, sensor 3, sensor 4, end, repeat
let grouped_data = []

function collect_one_interation_data(data) {
    grouped_data.push(data)

    if (grouped_data.length == 5) {
        update_data(grouped_data)
        scan_data(grouped_data)
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

    for (let i = 0; i < new_data.length - 1; i ++){
        if (new_data[i] == 255) {
            maxed_sensors.push(i + 1)
        }
    }


    if (maxed_sensors.length >= 2) {
        let sensor_string = "An impact has been detected by sensors "
        for (i = 0; i < maxed_sensors.length; i++){ //Just for force sensors
            if (i != maxed_sensors.length - 1 && maxed_sensors.length > 2){
                sensor_string += `${maxed_sensors[i]}, `
            } else if (i != maxed_sensors.length - 1 && maxed_sensors.length == 2) {
                sensor_string += `${maxed_sensors[i]} `
            } else {
                sensor_string += `and ${maxed_sensors[i]}`
            }
        }
        console.log(`${sensor_string}.`)
    }

    // if (new_data[new_data.length - 1] < 50) {
    //     console.log("Your heartbeat is dangerously low")
    // }


}
//setInterval(parse_data); 
//setInterval(impact_detected)

function count_pulse(pulse_data) {
    for (i = 1; i < pulse_data.length; i++){
        if (pulse_data[i] >= 580) {
            const first_instance = i
            break
        }
    }
    let times_between_beats = []
    let dropped = true     
    let begin_count = false

    for (i = 1; i < pulse_data.length; i++){
        if (pulse_data[i] >= 580 && i != first_instance) {
            
        }
    }


}

// function count_pulse(pulse_data){
//     let times_between_beats = []
//     let dropped = true
//     let begin_count = false
//     let first_passed = false

//     for (i  = 0; i < pulse_data.length; i ++){
//         if (pulse_data[i] >= 580 && dropped == true && begin_count == false) {
//             if (first_passed == false) {
//                 first_passed = true
//                 let begin_time = Date.now() / 1000
//                 begin_count = true
//                 dropped = false
//             }
//             else{
//                 times_between_beats.push(Date.now()/1000 - begin_time)
//                 let begin_time = Date.now() / 1000
//                 begin_count = true
//                 dropped = false
//             }
//         }

//         if (dropped == false && begin_count == true) {
//             if (pulse_data[i] < 580) {
//                 dropped = true
//                 begin_count = false
//             }
//     }

//     return times_between_beats
// }
// }
scan_for_impact([25, 55, 255, 255, 20])


console.log(count_pulse([720, 590, 600, 480, 581]))