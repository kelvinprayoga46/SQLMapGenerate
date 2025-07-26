export function addEnumerationOptions(command) {
  const enumOptions = [
    'all', 'banner', 'current-user', 'current-db', 'passwords',
    'dbs', 'tables', 'columns', 'schema', 'dump'
  ];
  
  enumOptions.forEach(opt => {
    if (document.getElementById(opt).checked) {
      command += ` --${opt}`;
    }
  });
  
  return command;
}