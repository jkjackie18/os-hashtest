// FY26 EOY Scenarios driver theme: Banking (industry template, reusable for any customer in this business). Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: baseline weights [volume, material, crude/energy, inflation]
// - users change them in Model factors; scenarios: notes for the four presets; scenarioNames: optional relabel.
window.FY26THEME={
 key:"banking",
 drivers:{
  vol:   {n:"Loan & deposit volume", label:"Loan volume", min:-15, max:10, step:0.5,
         hint:"Growth in loan book and deposit balances. Flexes interest and fee income and the variable share of every cost line."},
  mat:   {n:"Funding cost", label:"Funding cost", min:-10, max:40, step:0.5,
         hint:"Deposit and wholesale funding rates on interest expense (52010) and other funding cost (62000)."},
  crude: {n:"Credit cost (provisions)", label:"Credit cost", min:-20, max:80, step:1,
         hint:"Expected credit losses and provisions; passes through to overhead (53010), collections and supplemental costs."},
  infl:  {n:"Staff & operating cost inflation", label:"Staff & opex inflation", min:0, max:8, step:0.1,
         hint:"Incremental Q4 inflation above plan on staff costs and fixed operating expenses."},
  fx:    {n:"FX - THB vs USD", label:"FX vs reporting currency", min:-20, max:10, step:0.5,
         hint:"Move of THB and regional currencies against the reporting currency. Negative = they weaken."},
  rate:  {n:"Policy rate", label:"Policy rate", min:-100, max:300, step:25,
         hint:"Scales the finance-cost line by the repricing share of borrowings - set that in Model factors."}},
 lines:{"41000":[1, 0, 0, 0], "49000":[1, 0, 0, 0], "51010":[0.3, 0, 0, 1], "52010":[0.9, 1, 0, 0], "53010":[0.3, 0, 1, 1], "59010":[0.2, 0, 0, 0], "61000":[0.1, 0, 0, 1], "62000":[0.6, 1, 0, 0], "63000":[0.2, 0, 0.3, 1], "64000":[0, 0, 0.4, 1], "65000":[0.1, 0, 0, 1], "66000":[0.4, 0, 0, 1], "66500":[0, 0, 0, 1], "67000":[0, 0, 0, 1], "67500":[0, 0, 0, 1], "69000":[0.2, 0, 0.5, 1], "79999":[0, 0, 0, 0], "85999":[0, 0, 0, 0]},
 scenarios:{
  Mild:{note:"Loan growth slows 3%, deposit rates hold near plan and credit costs tick up at the low end of guidance."},
  Central:{note:"Mid-point of every outlook range. The most likely landing zone for Q4 net interest income and credit cost."},
  Severe:{note:"Loan demand stalls, deposit competition lifts funding cost and provisions rise sharply as asset quality weakens."},
  Stagflation:{note:"Severe volumes and credit cost, with staff and operating inflation at 3% and the policy rate up 150bp."}},
 scenarioNames:{}
};
