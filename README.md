# fi-report-cli

Sample report-formatting CLI -- small Node.js command-line tool, no
runtime dependencies. Used as the small, low-coverage sample project in
the `fi-sandbox` GitHub/Azure DevOps integration sandbox.

## Structure

- `src/formatter.js` -- renders rows as a table or CSV
- `src/reportLoader.js` -- reads a JSON report file from disk
- `src/cli.js` -- argv parsing and process entry point

## Usage

```bash
node src/cli.js report.json table
```

## Development

```bash
npm install
npm test -- --coverage
```

Only `src/formatter.js` has unit tests. `src/reportLoader.js` and
`src/cli.js` are intentionally left without tests (see the comment at the
top of each file) -- filesystem I/O and process bootstrap, not pure logic.

<!-- app-approval-check probe, 2026-09-22 18:50:35 -->
