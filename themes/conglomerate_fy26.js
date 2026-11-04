// FY26 EOY Scenarios driver theme: Conglomerate (food, beverage, fuel) (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, crude/energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets; scenarioNames: optional relabel.
window.FY26THEME={
 key:"conglomerate",
 drivers:{
  vol:   {n:"Volume (beer, food, fuel)", label:"Volume", min:-15, max:10, step:0.5,
         hint:"Sales volumes across beverages, food, packaging and fuel. Flexes revenue and the variable share of every cost line."},
  mat:   {n:"Commodity inputs", label:"Commodity inputs", min:-10, max:40, step:0.5,
         hint:"Grain, sugar, aluminium and packaging prices on material COGS (52010) and other material cost (62000)."},
  crude: {n:"Crude & fuel cost", label:"Crude & fuel", min:-15, max:40, step:0.5,
         hint:"Crude oil for the fuel business, plus fuel and power for plants and distribution; passes through to overhead, utilities and freight."},
  infl:  {n:"Wage & overhead inflation", label:"Wage & overhead inflation", min:0, max:8, step:0.1,
         hint:"Incremental Q4 inflation above plan on staff and fixed operating costs."},
  fx:    {n:"FX - PHP vs USD", label:"FX vs reporting currency", min:-20, max:10, step:0.5,
         hint:"Move of the peso against USD-priced commodities, crude and debt. Negative = the peso weakens."},
  rate:  {n:"Interest rate", label:"Interest rate", min:-100, max:400, step:25,
         hint:"Scales the finance-cost line by the repricing share of borrowings - set that in Model factors."}},
 lines:{"41000":[1, 0, 0, 0], "49000":[1, 0, 0, 0], "51010":[0.6, 0, 0, 1], "52010":[1, 1, 0.3, 0], "53010":[0.4, 0, 0.3, 1], "59010":[0.3, 0, 0, 0], "61000":[0.1, 0, 0, 1], "62000":[1, 1, 0, 0], "63000":[0.5, 0, 0.1, 1], "64000":[0, 0, 0, 1], "65000":[0.6, 0, 0.6, 1], "66000":[1, 0, 0.7, 1], "66500":[0, 0, 0, 1], "67000":[0, 0, 0, 1], "67500":[0, 0, 0, 1], "69000":[0.2, 0, 0, 1], "79999":[0, 0, 0, 0], "85999":[0, 0, 0, 0]},
 scenarios:{
  Mild:{note:"Volumes slip 3%, commodity and crude costs at the low end of the outlook."},
  Central:{note:"Mid-point of every outlook range. The most likely landing zone, and the one to size Q4 pricing and cost actions against."},
  Severe:{note:"Weak consumer demand, commodity inputs at the top of the range and a crude spike hitting fuel margins and freight."},
  Stagflation:{note:"Severe volumes and input costs, with wage and overhead inflation at 3% and rates up 150bp."}},
 scenarioNames:{}
};
