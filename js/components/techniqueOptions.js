export function addTechniqueOptions(command) {
  let techniques = '';
  ['b', 'e', 'u', 's', 't', 'q'].forEach(tech => {
    if (document.getElementById(`tech-${tech}`).checked) {
      techniques += tech.toUpperCase();
    }
  });
  
  if (techniques) command += ` --technique=${techniques}`;
  
  return command;
}