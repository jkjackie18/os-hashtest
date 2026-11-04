// FY26 EOY Scenarios driver theme: Golf equipment (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, freight&energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets (values kept); scenarioNames: optional relabel.
window.FY26THEME={
 key:"golf",
 drivers:{
  vol:  {n:"Demand (rounds & sell-through)", label:"Demand", min:-20, max:10, step:.5,
         hint:"Rounds played and retail sell-through. Flexes revenue and the variable share of every cost line."},
  mat:  {n:"Component cost", label:"Component cost", min:-10, max:30, step:.5,
         hint:"Graphite, steel, aluminium and battery-cell prices on material COGS (52010) and other material cost (62000)."},
  crude:{n:"Freight & energy", label:"Freight & energy", min:-10, max:40, step:.5,
         hint:"Ocean freight and energy prices; pass through to freight, utilities, warehouse and production overhead."},
  infl: {n:"Wage & overhead inflation", label:"Wage & overhead inflation", min:0, max:8, step:.1,
         hint:"Incremental Q4 inflation above plan on compensation and fixed operating costs."},
  fx:   {n:"FX - sourcing currencies", label:"FX vs reporting currency", min:-20, max:10, step:.5,
         hint:"Move of the currencies where components are sourced and products sold, against the reporting currency. Negative = they weaken."},
  rate: {n:"Interest rate", label:"Interest rate", min:-100, max:400, step:25,
         hint:"Scales the finance-cost line, where one exists. Only the repricing share moves - set that in Model factors."}},
 lines:{   // [demand, component cost, freight & energy, inflation]  - baseline assumptions, edit in Model factors
  "41000":[1.00,0,0,0], "49000":[1.00,0,0,0],
  "51010":[0.70,0,0,1], "52010":[1.00,1,0,0], "53010":[0.40,0,0.15,1], "59010":[0.30,0,0,0],
  "61000":[0.15,0,0,1], "62000":[1.00,1,0,0], "63000":[0.50,0,0.10,1], "64000":[0,0,0,1],
  "65000":[0.50,0,0.40,1], "66000":[1.00,0,0.60,1], "66500":[0,0,0,1], "67000":[0,0,0,1],
  "67500":[0,0,0,1], "69000":[0.30,0,0,1], "79999":[0,0,0,0], "85999":[0,0,0,0]},
 scenarios:{
  Mild:       {note:"A soft finish to the season: sell-through slips 3%, component and freight costs at the low end of the outlook."},
  Central:    {note:"Mid-point of every outlook range. The most likely landing zone, and the one to size the Q4 cost actions against."},
  Severe:     {note:"Top of every range at once: a wet autumn cuts rounds played, carbon-fibre and cell prices stay high and freight spikes."},
  Stagflation:{note:"Severe demand and input costs, with wage and fixed-cost inflation at 3% and rates up 150bp. The damage is in the cost base."}},
 scenarioNames:{}   // e.g. {Mild:"Soft season", Severe:"Wet autumn"} - leave empty to keep Mild / Central / Severe / Stagflation
};
