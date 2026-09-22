const { formatAsTable, formatAsCsv } = require('../src/formatter');

describe('formatter', () => {
  const rows = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 75 },
  ];

  test('formats rows as a padded table', () => {
    const table = formatAsTable(rows);
    expect(table).toContain('name');
    expect(table).toContain('Alice');
    expect(table.split('\n')).toHaveLength(4);
  });

  test('returns a placeholder for empty table input', () => {
    expect(formatAsTable([])).toBe('(no data)');
  });

  test('formats rows as csv', () => {
    const csv = formatAsCsv(rows);
    expect(csv).toBe('name,score\nAlice,90\nBob,75');
  });

  test('returns an empty string for empty csv input', () => {
    expect(formatAsCsv([])).toBe('');
  });
});
