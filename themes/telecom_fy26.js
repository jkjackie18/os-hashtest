// FY26 EOY Scenarios driver theme: Telecom & mobile (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, crude/energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets; scenarioNames: optional relabel.
window.FY26THEME={
 key:"telecom",
 drivers:{
  vol:   {n:"Subscribers & ARPU", label:"Subscribers & ARPU", min:-15, max:10, step:0.5,
         hint:"Mobile and broadband subscribers and average revenue per user. Flexes revenue and the variable share of every cost line."},
  mat:   {n:"Device & equipment cost", label:"Device cost", min:-10, max:30, step:0.5,
         hint:"Handset, router and network equipment prices on cost of devices (52010) and other equipment cost (62000)."},
  crude: {n:"Network energy cost", label:"Network energy", min:-10, max:40, step:0.5,
         hint:"Electricity and fuel for base stations and data centres; passes through to utilities, network overhead and logistics."},
  infl:  {n:"Wage & content inflation", label:"Wage & content inflation", min:0, max:8, step:0.1,
         hint:"Incremental Q4 inflation above plan on staff, content and fixed operating costs."},
  fx:    {n:"FX - USD-priced equipment", label:"FX vs reporting currency", min:-20, max:10, step:0.5,
         hint:"Move of THB against USD-priced devices, network equipment and roaming. Negative = THB weakens."},
  rate:  {n:"Interest rate", label:"Interest rate", min:-100, max:300, step:25,
         hint:"Scales the finance-cost line by the repricing share of borrowings - set that in Model factors."}},
 lines:{"41000":[1, 0, 0, 0], "49000":[1, 0, 0, 0], "51010":[0.4, 0, 0, 1], "52010":[1, 1, 0, 0], "53010":[0.3, 0, 0.3, 1], "59010":[0.3, 0, 0, 0], "61000":[0.1, 0, 0, 1], "62000":[0.8, 1, 0, 0], "63000":[0.3, 0, 0.1, 1], "64000":[0, 0, 0, 1], "65000":[0.4, 0, 0.9, 1], "66000":[0.6, 0, 0.4, 1], "66500":[0, 0, 0, 1], "67000":[0, 0, 0, 1], "67500":[0.2, 0, 0, 1], "69000":[0.3, 0, 0, 1], "79999":[0, 0, 0, 0], "85999":[0, 0, 0, 0]},
 scenarios:{
  Mild:{note:"Subscriber growth slows 3%, device prices and network energy at the low end of the outlook."},
  Central:{note:"Mid-point of every outlook range. The most likely landing zone for Q4 service revenue and network cost."},
  Severe:{note:"ARPU pressure from price competition, device costs at the top of the range and an energy price spike."},
  Stagflation:{note:"Severe revenue and input costs, with wage and content inflation at 3% and rates up 150bp."}},
 scenarioNames:{}
};
