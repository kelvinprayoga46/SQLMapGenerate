export function addTargetOptions(command) {
  const url = document.getElementById('url').value;
  const googleDork = document.getElementById('google-dork').value;
  const data = document.getElementById('data').value;
  const cookie = document.getElementById('cookie').value;
  
  if (url) command += ` -u "${url}"`;
  if (googleDork) command += ` -g "${googleDork}"`;
  if (data) command += ` --data="${data}"`;
  if (cookie) command += ` --cookie="${cookie}"`;
  
  return command;
}