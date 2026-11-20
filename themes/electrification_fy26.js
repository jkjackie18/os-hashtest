// FY26 EOY Scenarios driver theme: Electrification & grid solutions (engineering and project companies building power
// distribution for data centres, utility substations, EV charging and renewables - CSE Global-style planning). SGD reporting
// with large USD (Americas) and AUD operations, switchgear / transformer / cable spend, copper and steel, field labour.
// drivers: names / hints / slider ranges (%, rate in bp); lines: weights [volume, materials, metals, inflation]
// page hooks (fy_theme_ccy.js): ccy, restate, method, factorNames, ne (+neNotes), rate, tour, text, scenarioNames.
window.FY26THEME={
 key:"electrification",
 ccy:"SGD",
 restate:1,               // cube amounts shown in SGD as booked (no conversion)
 drivers:{
  vol:   {n:"Project volume (order book conversion)", label:"Project volume", min:-25, max:15, step:0.5,
         hint:"Revenue recognised on projects against the 6+6: data centre power distribution, utility substations, EV charging and renewables. Moves revenue in full and the project-linked share of equipment, field labour and site costs. Customer capex delays and slower site access land here."},
  mat:   {n:"Equipment and component pricing", label:"Equipment & components", min:-10, max:20, step:0.5,
         hint:"Price of switchgear, transformers, power distribution units, enclosures, cable and other bought-in equipment (51010). Long lead-time items re-priced after the order was won land here."},
  crude: {n:"Copper and steel prices (cable, busbars, enclosures)", label:"Copper & steel", min:-20, max:40, step:1,
         hint:"Metal content in cable, busway, busbars, transformer windings and steel enclosures. Passes 0.30 into equipment and materials: the share not covered by price-adjustment clauses in the contracts."},
  infl:  {n:"Field labour and subcontractor inflation", label:"Labour & subcontract", min:0, max:6, step:0.1,
         hint:"Incremental Q4 inflation above plan on engineers, technicians and subcontracted installation labour, plus maintenance, facilities and other overhead."},
  fx:    {n:"USD and AUD vs SGD", label:"FX vs SGD", min:-15, max:10, step:0.5,
         hint:"Move of the overseas operations' currencies (mainly USD in the Americas, AUD in Australia) against SGD; applies to the foreign share set in Model factors. Positive = they strengthen, which raises both revenue and cost when translated into SGD."},
  rate:  {n:"Interest rate (SORA)", label:"SORA", min:-100, max:200, step:25,
         hint:"Scales finance costs by the repricing share of borrowings. 3-month compounded SORA was about 1.35% in mid-November 2026."}},
 lines:{"41000":[1,0,0,0], "49000":[1,0,0,0],
        "51010":[1,1,.30,0], "52010":[.7,0,0,1], "53010":[.5,0,0,.5], "59010":[0,0,0,0],
        "61000":[0,0,0,1], "62000":[0,0,0,1], "63000":[.2,0,0,1], "64000":[0,0,0,1],
        "65000":[.3,.2,0,.8], "66000":[0,0,0,1], "66500":[0,0,0,1], "67000":[.2,0,0,1],
        "67500":[0,0,0,1], "69000":[.1,0,0,1], "79999":[0,0,0,0], "85999":[0,0,0,0]},
 factorNames:["Volume share","Equipment share","Metals pass-through","Inflation share"],
 ne:{rev:0.65,cogs:0.65,opex:0.45,fin:0.30},
 neNotes:{rev:"Americas (USD) and Australia (AUD) projects, estimate",cogs:"equipment and field labour bought locally overseas, estimate",opex:"overseas offices, estimate",fin:"borrowings mostly in SGD, estimate"},
 rate:{flt:0.70,base:0.0135},
 scenarios:{
  Mild:{vol:-.04, mat:.02, crude:.05, infl:.004, fx:-.01, rate:0,
        note:"A few projects slip into next year as customers re-phase sites; equipment prices a little firmer, copper up 5% and USD slightly weaker against SGD."},
  Central:{vol:-.07, mat:.03, crude:.10, infl:.008, fx:-.02, rate:-.0025,
        note:"Mid-point of the outlook: data centre and utility demand holds but site start-ups and permits delay recognition; copper and steel up 10%, USD 2% weaker, SORA 25bp lower."},
  Severe:{vol:-.18, mat:.05, crude:.15, infl:.012, fx:-.04, rate:0,
        note:"Hyperscale data centre capex is paused and utility tenders slip: project volume down 18% while equipment and metals stay high and USD weakens 4%."},
  Stagflation:{vol:-.12, mat:.07, crude:.25, infl:.025, fx:-.03, rate:.005,
        note:"Weak project volume with labour and subcontract inflation at 2.5%, copper and steel up 25% and SORA 50bp higher."}},
 scenarioNames:{Mild:"Project delays", Severe:"Data centre capex pause"},
 text:{"Volume share":"Volume share","Material share":"Equipment share","Crude pass-through":"Metals pass-through",
       "Share of this line that moves with volume":"Share of this line that moves with project volume",
       "Share of a crude move that reaches this line":"Share of a copper / steel price move that reaches this line",
       "Share of this line that is material spend":"Share of this line that is bought-in equipment and materials",
       "ID10 + MY10 over the GSE total":"overseas share of the business, estimate","measured from the cube":"estimate","assumed same as opex":"borrowings mostly in SGD"},
 tour:{
  2:"Every assumption behind the scenario, on the left: project volume, equipment and component pricing, copper and steel, labour and subcontract inflation, USD and AUD against SGD, and SORA. Each has a <b>switch</b> — turn assumptions off to see what project volume alone, or volume plus equipment, does to profit.<br><br>Dragging a slider adjusts the scenario you are on — its pill gets an orange dot and the note lists what changed.",
  7:"Everything so far has been <b>how big the shock is</b> — projects down 7%, copper up 10%. The other half is <b>how much of each line the shock reaches</b>, and that half is a planning estimate rather than cube data. Those are the factors, and they live in here.",
  8:"One row per posting line, four things you can change.<br><br><b>Volume share</b> — revenue 1.0; equipment and materials 1.0; field labour 0.7 and site costs 0.5, because part of the engineering team is paid whatever the project load.<br><br><b>Equipment share</b> — equipment and materials (switchgear, transformers, cable, enclosures) 1.0.<br><br><b>Metals pass-through</b> — equipment and materials 0.30: the copper and steel not recovered through price-adjustment clauses.<br><br><b>Inflation share</b> — labour, subcontract, facilities and overhead 1.0.",
  9:"<b>Foreign shares</b> — about 65% of revenue and cost of sales comes from the Americas (USD) and Australia (AUD), and 45% of overhead. These are estimates, so change them to the actual mix.<br><br><b>Repricing share and base rate</b> — 70% of borrowings reprice against SORA at 1.35%. <b>Marginal tax rate</b> — applied to the change in profit, as booked in the 6+6."},
 method:
  "<b>Base ties to the cube.</b> Every subtotal is derived from the posting lines and profit is checked against account 99999 each time the page opens.<br><br>"+
  "<b>Planning logic.</b> An electrification contractor recognises revenue as projects progress, buys most of the equipment it installs and staffs sites with its own engineers and subcontractors. <b>Project volume</b> moves revenue and equipment in full, field labour (0.7) and site costs (0.5) partly. <b>Equipment pricing</b> applies in full to equipment and materials. <b>Copper and steel</b> pass 0.30 into equipment and materials, the share not covered by price-adjustment clauses. <b>Labour and subcontract inflation</b> applies to labour, facilities and overhead.<br><br>"+
  "<b>Currency.</b> Amounts are shown in SGD as booked; no conversion is applied. The FX driver moves the overseas share of each line (positive = USD and AUD strengthen, so revenue and cost both rise in SGD).<br><br>"+
  "<b>Finance costs.</b> 70% of borrowings reprice against SORA at 1.35% (mid-November 2026).<br><br>"+
  "<b>Not modelled:</b> new order wins beyond the order book, contract variations and claims, project margin fade, capital spend and acquisitions."
};
