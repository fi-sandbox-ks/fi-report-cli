/* Intentionally left without tests: reads from a report export format
   that is not finalized yet -- see README "Development". */
const fs = require('fs');

function loadReportRows(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

module.exports = { loadReportRows };
