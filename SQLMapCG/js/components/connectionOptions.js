export function addConnectionOptions(command) {
  if (document.getElementById('random-agent').checked) command += ' --random-agent';
  if (document.getElementById('tor').checked) command += ' --tor';
  
  const proxy = document.getElementById('proxy').value;
  if (proxy) command += ` --proxy="${proxy}"`;
  
  return command;
}