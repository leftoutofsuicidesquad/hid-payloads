// Log something to internal console
console.log("Shutting down the system");

// Set German keyboard layout
layout("DE");

// Öffne CMD
press("GUI r");
delay(500);
type("cmd");
press("ENTER");
delay(1000);

// System herunterfahren
console.log("Shutting down the system now");
typingSpeed(1, 1);
type("shutdown /s /f /t 0");
press("ENTER");
delay(1000);

console.log("System shutdown initiated");

