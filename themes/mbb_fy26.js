// FY26 EOY Scenarios driver theme: Banking - Malaysia (Maybank-style chart: interest and Islamic financing income, profit distributed to
// depositors and investment account holders, overhead). Reusable for any Malaysian bank. The generic "banking" theme is unchanged.
// drivers: names / hints / ranges; lines: weights [volume, funding cost, credit cost, inflation]; page hooks: ccy, restate, factorNames, ne, rate, text, tour, method.
window.FY26THEME={
 key:"mbb",
 ccy:"MYR",
 restate:1,               // cube amounts shown as RM as booked (no conversion)
 drivers:{
  vol:   {n:"Loan, financing and deposit volume", label:"Volume", min:-15, max:10, step:0.5,
         hint:"Growth in the loan and financing book and in deposits. Moves interest income, Islamic banking income and profit distributed to depositors with the book."},
  mat:   {n:"Deposit and funding rates", label:"Funding rate", min:-10, max:30, step:0.5,
         hint:"Rates paid on savings, current and term deposits and to investment account holders (51010, 52010, 53010). Deposit competition and OPR moves land here."},
  crude: {n:"Credit cost (impairment)", label:"Credit cost", min:-30, max:80, step:1,
         hint:"Expected credit losses and recovery costs. There is no impairment line in this chart, so it passes through to other overhead (69000) and professional and recovery fees (64000)."},
  infl:  {n:"Personnel and overhead inflation", label:"Personnel & overhead", min:0, max:6, step:0.1,
         hint:"Incremental Q4 inflation above plan on personnel, technology, establishment and other overhead expenses."},
  fx:    {n:"FX vs MYR (regional currencies)", label:"FX vs MYR", min:-15, max:10, step:0.5,
         hint:"Move of the regional subsidiaries' currencies (Singapore, Philippines, Indonesia and others) against MYR; applies to the non-MYR share set in Model factors. Negative = they weaken."},
  rate:  {n:"Overnight Policy Rate (OPR)", label:"OPR", min:-100, max:150, step:25,
         hint:"Bank Negara Malaysia's OPR, 2.75% at the 5 Nov 2026 meeting. Scales other interest income and expense by the repricing share of funding."}},
 lines:{"41000":[1,0,0,0], "49000":[1,0,0,0],
        "51010":[0.8,1,0,0], "52010":[0.8,1,0,0], "53010":[0.8,1,0,0], "59010":[0,0,0,0],
        "61000":[0,0,0,1], "62000":[0,0,0,1], "63000":[0.2,0,0,1], "64000":[0,0,0.4,1],
        "65000":[0.1,0,0,1], "66000":[0.2,0,0,1], "66500":[0,0,0,1], "67000":[0,0,0,1],
        "67500":[0,0,0,1], "69000":[0,0,0.5,1], "79999":[0,0,0,0], "85999":[0,0,0,0]},
 factorNames:["Volume share","Funding-rate share","Credit-cost pass-through","Inflation share"],
 ne:{rev:0.30,cogs:0.30,opex:0.30,fin:0.30},
 rate:{flt:0.60,base:0.0275},
 scenarios:{
  Mild:{vol:-.02, mat:.03, crude:.10, infl:.003, fx:-.01, rate:0,
        note:"Loan and deposit growth 2% below the 6+6, deposit rates edge up and credit cost rises 10% from a low base."},
  Central:{vol:-.04, mat:.06, crude:.20, infl:.008, fx:-.02, rate:.0025,
        note:"Mid-point of the outlook: slower book growth, deposit competition and the OPR normalising to 3.00% early in 2027."},
  Severe:{vol:-.08, mat:.12, crude:.40, infl:.012, fx:-.04, rate:.005,
        note:"Loan demand stalls, deposit rates rise sharply and impairments climb as asset quality weakens."},
  Stagflation:{vol:-.08, mat:.12, crude:.40, infl:.025, fx:-.06, rate:.01,
        note:"Severe volumes and credit cost, with personnel and overhead inflation at 2.5% and the OPR up 100bp."}},
 scenarioNames:{Mild:"Soft growth", Severe:"Credit stress"},
 text:{"Volume share":"Volume share","Material share":"Funding-rate share","Crude pass-through":"Credit-cost pass-through",
       "Share of a crude move that reaches this line":"Share of a credit-cost move that reaches this line",
       "Share of this line that is material spend":"Share of this line that reprices with deposit and funding rates",
       "ID10 + MY10 over the GSE total":"regional subsidiaries over the group total, estimate","measured from the cube":"estimate","assumed same as opex":"estimate"},
 tour:{
  2:"Every assumption behind the scenario, on the left: book volume, deposit and funding rates, credit cost, personnel and overhead inflation, FX and the OPR. Each has a <b>switch</b> — turn assumptions off to see what volume alone, or volume plus funding rates, does to profit.<br><br>Dragging a slider adjusts the scenario you are on — its pill gets an orange dot and the note lists what changed.",
  7:"Everything so far has been <b>how big the shock is</b> — volume down 4%, funding rates up 6%. The other half is <b>how much of each line the shock reaches</b>, and that half is a planning estimate rather than cube data. Those are the factors, and they live in here.",
  8:"One row per posting line, four things you can change.<br><br><b>Volume share</b> — interest and financing income 1.0; profit distributed to depositors 0.8, because it grows with the deposit book.<br><br><b>Funding-rate share</b> — profit distributed on savings, current and term deposits and to investment account holders 1.0.<br><br><b>Credit-cost pass-through</b> — other overhead 0.5 and professional and recovery fees 0.4, as the chart has no impairment line.<br><br><b>Inflation share</b> — personnel, technology, establishment and other overhead 1.0.",
  9:"<b>Non-MYR shares</b> — the share of income and cost in the regional subsidiaries, set at 30%. <b>Repricing share and base rate</b> — 60% of funding reprices, against the 2.75% OPR. <b>Marginal tax rate</b> — applied to the change in profit; it covers Malaysian income tax, zakat and overseas taxation as booked in the 6+6."},
 method:
  "<b>Base ties to the cube.</b> Every subtotal is derived from the posting lines and profit is checked against account 99999 each time the page opens.<br><br>"+
  "<b>Volume</b> moves interest income, Islamic banking income and adjustments in full, and profit distributed to depositors and investment account holders at 0.8. <b>Deposit and funding rates</b> apply in full to the three depositor lines (51010, 52010, 53010). <b>Credit cost</b> passes 0.5 into other overhead and 0.4 into professional fees, because the chart has no impairment line. <b>Personnel and overhead inflation</b> applies to all overhead lines.<br><br>"+
  "<b>Currency.</b> Amounts are shown in RM as booked; no conversion is applied. The FX driver moves the 30% non-MYR share only.<br><br>"+
  "<b>Rates.</b> 60% of funding reprices against the 2.75% OPR.<br><br>"+
  "<b>Not modelled:</b> impairment and recoveries as separate lines, capital ratios and liquidity requirements."
};
