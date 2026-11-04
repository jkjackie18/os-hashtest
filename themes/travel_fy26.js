// FY26 EOY Scenarios driver theme: Online travel (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, crude/energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets; scenarioNames: optional relabel.
window.FY26THEME={
 key:"travel",
 drivers:{
  vol:   {n:"Bookings (room nights & tickets)", label:"Bookings", min:-20, max:10, step:0.5,
         hint:"Hotel room nights, flight and activity tickets sold. Flexes revenue and the variable share of every cost line."},
  mat:   {n:"Supplier & payment cost", label:"Supplier cost", min:-10, max:30, step:0.5,
         hint:"Supplier take-rates, payment-gateway and partner commissions on cost of revenue (52010) and other direct cost (62000)."},
  crude: {n:"Jet fuel & airfares", label:"Jet fuel & airfares", min:-15, max:40, step:0.5,
         hint:"Jet fuel drives airfares and demand mix; passes through to direct overhead, customer service and logistics."},
  infl:  {n:"Wage & marketing inflation", label:"Wage & marketing inflation", min:0, max:8, step:0.1,
         hint:"Incremental Q4 inflation above plan on staff, performance marketing and fixed operating costs."},
  fx:   {n:"FX vs EUR (non-EUR currencies)", label:"FX vs EUR", min:-20, max:10, step:.5,
         hint:"Move of the non-EUR operating currencies against EUR; applies to the non-EUR share of revenue, COGS and opex (set in Model factors). Negative = they weaken."},
  rate:  {n:"Interest rate", label:"Interest rate", min:-100, max:300, step:25,
         hint:"Scales the finance-cost line by the repricing share of borrowings - set that in Model factors."}},
 lines:{"41000":[1, 0, 0, 0], "49000":[1, 0, 0, 0], "51010":[0.5, 0, 0, 1], "52010":[1, 1, 0, 0], "53010":[0.4, 0, 0.3, 1], "59010":[0.3, 0, 0, 0], "61000":[0.15, 0, 0, 1], "62000":[1, 1, 0, 0], "63000":[0.5, 0, 0.1, 1], "64000":[0, 0, 0, 1], "65000":[0.2, 0, 0.2, 1], "66000":[0.8, 0, 0.6, 1], "66500":[0, 0, 0, 1], "67000":[0, 0, 0, 1], "67500":[0.2, 0, 0, 1], "69000":[0.6, 0, 0, 1], "79999":[0, 0, 0, 0], "85999":[0, 0, 0, 0]},
 scenarios:{
  Mild:{note:"Bookings slip 3% after the holiday peak, supplier and payment costs at the low end of the outlook."},
  Central:{note:"Mid-point of every outlook range. The most likely landing zone for Q4 bookings and take-rate."},
  Severe:{note:"Travel demand softens sharply, jet fuel lifts airfares and supplier costs rise at the same time."},
  Stagflation:{note:"Severe bookings and input costs, with wage and marketing inflation at 3% and rates up 150bp."}},
 scenarioNames:{}
};
