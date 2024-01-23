#include <SoftwareSerial.h>
SoftwareSerial BTserial(2, 3);
int FSR_P[4] = {A0, A1, A2, A3};
int FSR_V[4];
int OUT_V[4];
int PLS_P = A4;
int PLS_V;
int BUZ_P = 4;
int threshold = 200;
int count = 0;
bool BUZ_ON = false;
 
void setup(void) {
  Serial.begin(9600);
  for (int i = 0; i < 4; i++) {
    pinMode(FSR_P[i], INPUT);
  }
  pinMode(PLS_P, INPUT);
  pinMode(BUZ_P, OUTPUT);
  Serial.println("Enter AT commands:");
 
  // HC-06 default serial speed is 9600
  BTserial.begin(9600);
}
 
void loop(void) {
  for (int i = 0; i < 4; i++) {
    FSR_V[i] = analogRead(FSR_P[i]);
    OUT_V[i] = map(FSR_V[i], 0, 1023, 0, 255);
    BTserial.write(OUT_V[i]);
    if (OUT_V[i] >= threshold && !BUZ_ON) {
      tone(BUZ_P, 2000);
      BUZ_ON = true;
    }
  }
  PLS_V = map(analogRead(PLS_P), 0, 1023, 0, 255);
  BTserial.write(PLS_V);
  BTserial.write("E"); 
  if (BUZ_ON && count < 20) {
    count++;
  } else {
    noTone(BUZ_P);
    count = 0;
    BUZ_ON = false;
  }
  delay(100);
}
