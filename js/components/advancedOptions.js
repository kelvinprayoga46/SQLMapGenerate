export function addAdvancedOptions(command) {
  const advancedOptions = ['os-shell', 'os-pwn', 'batch', 'flush-session'];
  advancedOptions.forEach(opt => {
    if (document.getElementById(opt).checked) {
      command += ` --${opt}`;
    }
  });
  
  const tamper = document.getElementById('tamper').value;
  if (tamper) command += ` --tamper="${tamper}"`;
  
  return command;
}