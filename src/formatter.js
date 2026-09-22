function formatAsTable(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return '(no data)';
  }
  const headers = Object.keys(rows[0]);
  const widths = headers.map((header) =>
    Math.max(header.length, ...rows.map((row) => String(row[header]).length))
  );

  const headerLine = headers.map((header, i) => header.padEnd(widths[i])).join(' | ');
  const separator = widths.map((width) => '-'.repeat(width)).join('-+-');
  const rowLines = rows.map((row) =>
    headers.map((header, i) => String(row[header]).padEnd(widths[i])).join(' | ')
  );

  return [headerLine, separator, ...rowLines].join('\n');
}

function formatAsCsv(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return '';
  }
  const headers = Object.keys(rows[0]);
  const lines = rows.map((row) => headers.map((header) => row[header]).join(','));
  return [headers.join(','), ...lines].join('\n');
}

module.exports = { formatAsTable, formatAsCsv };
