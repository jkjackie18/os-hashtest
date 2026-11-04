// FY26 EOY Scenarios driver theme: Power generation (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, crude/energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets; scenarioNames: optional relabel.
window.FY26THEME={
 key:"power",
 drivers:{
  vol:   {n:"Dispatch & power demand", label:"Dispatch", min:-20, max:10, step:0.5,
         hint:"Electricity dispatched (MWh) under PPAs and merchant sales. Flexes revenue and the variable share of every cost line."},
  mat:   {n:"Fuel cost (gas & coal)", label:"Fuel cost", min:-15, max:40, step:0.5,
         hint:"Natural gas and coal prices on fuel COGS (52010) and other fuel-related cost (62000)."},
  crude: {n:"Oil-linked cost & logistics", label:"Oil-linked cost", min:-15, max:40, step:0.5,
         hint:"Oil-indexed gas, diesel and coal freight; passes through to plant overhead, utilities and logistics."},
  infl:  {n:"O&M & wage inflation", label:"O&M inflation", min:0, max:8, step:0.1,
         hint:"Incremental Q4 inflation above plan on operations & maintenance, staff and fixed costs."},
  fx:    {n:"FX - USD/THB", label:"FX vs reporting currency", min:-20, max:10, step:0.5,
         hint:"Move of THB and the currencies of overseas plants against USD fuel and equipment costs. Negative = they weaken."},
  rate:  {n:"Interest rate (project debt)", label:"Interest rate", min:-100, max:400, step:25,
         hint:"Scales the finance-cost line by the floating share of project debt - set that in Model factors."}},
 lines:{"41000":[1, 0, 0, 0], "49000":[1, 0, 0, 0], "51010":[0.3, 0, 0, 1], "52010":[1, 1, 0.3, 0], "53010":[0.4, 0, 0.3, 1], "59010":[0.5, 0, 0, 1], "61000":[0.1, 0, 0, 1], "62000":[0.8, 1, 0, 0], "63000":[0.3, 0, 0.2, 1], "64000":[0, 0, 0, 1], "65000":[0.6, 0, 0.5, 1], "66000":[1, 0, 0.8, 1], "66500":[0, 0, 0, 1], "67000":[0, 0, 0, 1], "67500":[0, 0, 0, 1], "69000":[0.2, 0, 0, 1], "79999":[0, 0, 0, 0], "85999":[0, 0, 0, 0]},
 scenarios:{
  Mild:{note:"Dispatch slips 3% on a mild season, gas and coal at the low end of the outlook."},
  Central:{note:"Mid-point of every outlook range. The most likely landing zone, and the one to size fuel hedging and O&M actions against."},
  Severe:{note:"Low dispatch, gas and coal at the top of the range and oil-linked costs spiking at once."},
  Stagflation:{note:"Severe dispatch and fuel, with O&M and wage inflation at 3% and rates up 150bp on project debt."}},
 scenarioNames:{}
};
