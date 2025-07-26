// All previous functions remain the same until generateCommand()

function generateCommand() {
  let command = 'sqlmap';
  
  // Target options
  const url = document.getElementById('url').value;
  const googleDork = document.getElementById('google-dork').value;
  const data = document.getElementById('data').value;
  const cookie = document.getElementById('cookie').value;
  
  if (url) command += ` -u "${url}"`;
  if (googleDork) command += ` -g "${googleDork}"`;
  if (data) command += ` --data="${data}"`;
  if (cookie) command += ` --cookie="${cookie}"`;
  
  // Crawling options
  const crawlDepth = document.getElementById('crawl-depth').value;
  const crawlExclude = document.getElementById('crawl-exclude').value;
  
  if (crawlDepth > 1) command += ` --crawl=${crawlDepth}`;
  if (crawlExclude) command += ` --crawl-exclude="${crawlExclude}"`;
  
  // Connection options
  if (document.getElementById('random-agent').checked) command += ' --random-agent';
  if (document.getElementById('tor').checked) command += ' --tor';
  
  const proxy = document.getElementById('proxy').value;
  if (proxy) command += ` --proxy="${proxy}"`;
  
  // Optimization options
  if (document.getElementById('optimize').checked) command += ' -o';
  const threads = document.getElementById('threads').value;
  if (threads > 1) command += ` --threads=${threads}`;
  if (document.getElementById('keep-alive').checked) command += ' --keep-alive';
  
  // Detection options
  const level = document.getElementById('level').value;
  const risk = document.getElementById('risk').value;
  const verbosity = document.getElementById('verbosity').value;
  command += ` --level=${level} --risk=${risk} -v ${verbosity}`;
  
  // Techniques
  let techniques = '';
  ['b', 'e', 'u', 's', 't', 'q'].forEach(tech => {
    if (document.getElementById(`tech-${tech}`).checked) {
      techniques += tech.toUpperCase();
    }
  });
  if (techniques) command += ` --technique=${techniques}`;
  
  // Enumeration options
  const enumOptions = [
    'all', 'banner', 'current-user', 'current-db', 'passwords',
    'dbs', 'tables', 'columns', 'schema', 'dump'
  ];
  enumOptions.forEach(opt => {
    if (document.getElementById(opt).checked) {
      command += ` --${opt}`;
    }
  });
  
  // Advanced options
  const advancedOptions = ['os-shell', 'os-pwn', 'batch', 'flush-session'];
  advancedOptions.forEach(opt => {
    if (document.getElementById(opt).checked) {
      command += ` --${opt}`;
    }
  });
  
  // Tamper options
  const tamper = document.getElementById('tamper').value;
  if (tamper) command += ` --tamper="${tamper}"`;
  
  document.getElementById('output').textContent = command;
}

// Rest of the code remains exactly the same