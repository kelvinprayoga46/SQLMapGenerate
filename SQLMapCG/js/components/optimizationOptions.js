export function addOptimizationOptions(command) {
  if (document.getElementById('optimize').checked) command += ' -o';
  const threads = document.getElementById('threads').value;
  if (threads > 1) command += ` --threads=${threads}`;
  if (document.getElementById('keep-alive').checked) command += ' --keep-alive';
  
  return command;
}