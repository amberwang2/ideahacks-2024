/* FSR testing sketch. 
 
Connect one end of FSR to 5V, the other end to Analog 0.
Then connect one end of a 10K resistor from Analog 0 to ground
Connect LED from pin 11 through a resistor to ground 
 
*/
#include <SoftwareSerial.h>
SoftwareSerial BTserial(2, 3);
int FSR_P[4] = {A0, A1, A2, A3};
int LED_P[4] = {4, 5, 6, 7};
int FSR_V[4];
int LED_V[4];
 
void setup(void) {
  Serial.begin(9600);
  for (int i = 0; i < 4; i++) {
    pinMode(FSR_P[i], INPUT);
    pinMode(LED_P[i], OUTPUT);
  }
  Serial.println("Enter AT commands:");
 
    // HC-06 default serial speed is 9600
    BTserial.begin(9600);
}
 
void loop(void) {
  for (int i = 0; i < 4; i++) {
    FSR_V[i] = analogRead(FSR_P[i]);
    LED_V[i] = map(FSR_V[i], 0, 1023, 0, 255);
    analogWrite(LED_P[i], LED_V[i]);
  }
  // Keep reading from HC-06 and send to Arduino Serial Monitor
   if (BTserial.available())
   {  
       Serial.write(BTserial.read());
   }
 
   // Keep reading from Arduino Serial Monitor and send to HC-06
   if (Serial.available())
   {
       BTserial.write(Serial.read());
   }

  delay(100);
}
