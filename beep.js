console.log("Playing beep sound via PowerShell");

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

type("([console]::beep(1000, 1000))");

press("ENTER")

console.log("Beep played!");
