export function addCrawlingOptions(command) {
  const crawlDepth = document.getElementById('crawl-depth').value;
  const crawlExclude = document.getElementById('crawl-exclude').value;
  
  if (crawlDepth) command += ` --crawl=${crawlDepth}`;
  if (crawlExclude) command += ` --crawl-exclude="${crawlExclude}"`;
  
  return command;
}