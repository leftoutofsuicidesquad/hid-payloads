// Log something to internal console
console.log("Don Pollo via PowerShell");

// Set German keyboard layout
layout("DE");

// Öffne PowerShell
press("GUI r");
delay(500);
type("powershell");
press("ENTER");
delay(1000);

// Piepton abspielen
console.log("Playing Don Pollo sound");
typingSpeed(0, 0);
type("$volume = (New-Object -ComObject WScript.Shell); for ($i=0; $i -lt 50; $i++) { $volume.SendKeys([char]175) }");
press("ENTER");
delay(1000)
press("Gui r");
delay(1000)
type("https://www.myinstants.com/media/sounds/lingan-guli-wacha.mp3")
press("ENTER")
delay(1000)
type("SPACE")
console.log("Don Pollo played!");
