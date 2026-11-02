# IV Compat

IV compatibility reference (English / Bahasa Indonesia).

Live site: https://ranatalha4.github.io/iv-compat/

- Pair checker with type-to-search for drugs and IV fluids
- Every result shows its reference: official drug labels, hospital compatibility charts, manufacturer testing and clinical studies
- Browse, filter by type, result and reference type; drug pages; entry pages

## Reporting an error
Every result has a "Report an error in this entry" link. It opens a pre-filled GitHub issue in this repository with the entry details. Review the report and its source before changing `data.js`.

## Data
All entries live in `data.js` (`SOURCES`, `NAMES`, `ROWS`). Each row: `[type, drugA, drugB, status, [sourceKeys], noteEN, noteID]`.
Status codes: C compatible, I incompatible, K conditional, N not established, D conflicting data.
