#include <SoftwareSerial.h>
SoftwareSerial BTserial(2, 3);
int FSR_P[4] = {A0, A1, A2, A3};
int FSR_V[4];
int OUT_V[4];
 
void setup(void) {
  Serial.begin(9600);
  for (int i = 0; i < 4; i++) {
    pinMode(FSR_P[i], INPUT);
  }
  Serial.println("Enter AT commands:");
 
  // HC-06 default serial speed is 9600
  BTserial.begin(9600);
}
 
void loop(void) {
  for (int i = 0; i < 4; i++) {
    FSR_V[i] = analogRead(FSR_P[i]);
    OUT_V[i] = map(FSR_V[i], 0, 1023, 0, 255);
    BTserial.println(OUT_V[i]);
    if (i == 3)
      BTserial.println("E");
  }
 
  delay(100);
}
