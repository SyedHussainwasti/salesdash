# salesdash

A sales performance dashboard built two ways: as a real Excel workbook and as an interactive web demo. It answers the questions every sales manager asks — how much did we sell, what sold best, where, and how is the trend moving.

## What's inside

- `index.html` — the page structure: headings, KPI cards, chart boxes, the monthly table and the download section. Open it in any browser.
- `styles.css` — all the styling (colours, cards, tables, buttons). Every rule has a plain-English note.
- `app.js` — the dataset (12 months of 2024 sales, 5 products, 3 regions) plus all the logic: KPI cards, charts and the monthly table. Every line has a plain-English note.
- `files/sales-dashboard.xlsx` — the original Excel workbook with the same dataset, native Excel charts, auto-filters, SUMIFS formulas and conditional formatting.

## What it demonstrates

- **Excel:** PivotTables-style summaries, SUMIFS across month/product/region, native charts, auto-filters, conditional formatting.
- **Data analysis:** turning raw sales rows into KPIs, trends and breakdowns a manager can act on.
- **Web:** the same analysis recreated as an interactive page (Chart.js) so anyone can explore it without Excel.

## The dataset

Fictional 2024 sales for an electronics retailer: 5 products (laptops, headphones, smartwatch, power bank, speaker) across North, South and West regions, with a festive-season bump in Oct–Dec.

## How to use

1. Open `index.html` in a browser for the interactive demo, or
2. Download `files/sales-dashboard.xlsx` and explore the workbook in Excel / Google Sheets.
