// Log something to internal console
console.log("Rickroll via PowerShell");

// Set German keyboard layout
layout("DE");

// Öffne PowerShell
press("GUI r");
delay(500);
type("powershell");
press("ENTER");
delay(1000);

// Piepton abspielen
console.log("Playing beep sound");
typingSpeed(0, 0);
type("$volume = (New-Object -ComObject WScript.Shell); for ($i=0; $i -lt 50; $i++) { $volume.SendKeys([char]175) }");
press("ENTER");
delay(1000)
press("Gui r");
delay(1000)
type("https://shattereddisk.github.io/rickroll/rickroll.mp4")
press("ENTER")
delay(1000)
type("SPACE")
console.log("Beep played!");
