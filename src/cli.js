/* Bootstrap only, intentionally left without tests: parses argv and
   writes to stdout, exercised by running the CLI directly -- see README
   "Development". */
const { loadReportRows } = require('./reportLoader');
const { formatAsTable, formatAsCsv } = require('./formatter');

function run(argv) {
  const [, , filePath, format] = argv;
  if (!filePath) {
    // eslint-disable-next-line no-console
    console.error('Usage: fi-report-cli <file.json> [table|csv]');
    process.exitCode = 1;
    return;
  }
  const rows = loadReportRows(filePath);
  const output = format === 'csv' ? formatAsCsv(rows) : formatAsTable(rows);
  // eslint-disable-next-line no-console
  console.log(output);
}

if (require.main === module) {
  run(process.argv);
}

module.exports = { run };
