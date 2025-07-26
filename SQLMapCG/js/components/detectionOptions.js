export function addDetectionOptions(command) {
  const level = document.getElementById('level').value;
  const risk = document.getElementById('risk').value;
  const verbosity = document.getElementById('verbosity').value;
  
  command += ` --level=${level} --risk=${risk} -v ${verbosity}`;
  
  return command;
}