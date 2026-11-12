// FY26 EOY Scenarios driver theme: Semiconductor assembly & test (OSAT) - UTAC-style planning: USD revenue with a
// local-currency cost base (Singapore, Thailand, China, Indonesia), substrate / leadframe material spend, gold and copper
// in wire and leadframes, cleanroom labour and energy. Reusable for any OSAT. Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: weights [volume, materials, metals, inflation]
// page hooks (fy_theme_ccy.js): ccy, restate, method, factorNames, ne (+neNotes), rate, tour, text, scenarioNames.
window.FY26THEME={
 key:"semiconductor",
 ccy:"USD",
 restate:1,               // cube amounts shown in USD as booked (no conversion)
 drivers:{
  vol:   {n:"Unit volume (semiconductor demand cycle)", label:"Unit volume", min:-25, max:15, step:0.5,
         hint:"Units assembled and tested against the 6+6, driven by end-market demand (automotive, industrial, mobile, computing) and customers' inventory cycles. Moves revenue in full and the volume-linked share of materials, labour and utilities."},
  mat:   {n:"Substrate, leadframe and direct material pricing", label:"Materials", min:-10, max:20, step:0.5,
         hint:"Price of laminate substrates, copper leadframes, mould compound, solder balls and other direct materials (51010). Substrate tightness in an upturn lands here."},
  crude: {n:"Gold and copper prices (bond wire, leadframes, clips)", label:"Gold & copper", min:-20, max:40, step:1,
         hint:"Metal content in gold / copper bond wire, copper leadframes and power-package clips. Passes 0.35 into direct materials; the rest is contract pass-through to customers."},
  infl:  {n:"Labour and overhead inflation", label:"Labour & overhead", min:0, max:6, step:0.1,
         hint:"Incremental Q4 inflation above plan on cleanroom operators and engineers, maintenance and spares, facilities and other overhead."},
  fx:    {n:"Local currencies vs USD (SGD, THB, CNY, IDR)", label:"FX vs USD", min:-10, max:10, step:0.5,
         hint:"Move of the plant currencies against USD; applies to the non-USD share of cost set in Model factors. Positive = they strengthen, which raises the USD cost of local labour, utilities and overhead."},
  rate:  {n:"Interest rate (SOFR)", label:"SOFR", min:-100, max:150, step:25,
         hint:"Scales finance costs by the repricing share of debt. SOFR was about 3.9% in early November 2026."}},
 lines:{"41000":[1,0,0,0], "49000":[1,0,0,0],
        "51010":[1,1,.35,0], "52010":[.6,0,0,1], "53010":[.7,0,0,.5], "59010":[0,0,0,0],
        "61000":[0,0,0,1], "62000":[0,0,0,1], "63000":[.2,0,0,1], "64000":[0,0,0,1],
        "65000":[.3,.2,0,.8], "66000":[0,0,0,1], "66500":[0,0,0,1], "67000":[.2,0,0,1],
        "67500":[0,0,0,1], "69000":[.1,0,0,1], "79999":[0,0,0,0], "85999":[0,0,0,0]},
 factorNames:["Volume share","Materials share","Metals pass-through","Inflation share"],
 ne:{rev:0.05,cogs:0.55,opex:0.60,fin:0.10},
 neNotes:{rev:"revenue is billed in USD, estimate",cogs:"local labour, utilities and overhead in the plants, estimate",opex:"plant and regional overhead in local currency, estimate",fin:"debt mostly in USD"},
 rate:{flt:0.60,base:0.039},
 scenarios:{
  Mild:{vol:-.03, mat:.02, crude:.05, infl:.003, fx:.01, rate:0,
        note:"Units 3% below the 6+6 as customers trim orders; substrate prices a little firmer and gold up 5%."},
  Central:{vol:-.06, mat:.04, crude:.12, infl:.008, fx:.02, rate:-.0025,
        note:"Mid-point of the outlook: softer consumer and industrial demand offset partly by automotive and AI-related advanced packaging; metals up 12%, SOFR 25bp lower."},
  Severe:{vol:-.15, mat:.06, crude:.20, infl:.012, fx:.04, rate:0,
        note:"An inventory correction cuts units 15% while materials and metals stay high and plant currencies strengthen against USD."},
  Stagflation:{vol:-.12, mat:.08, crude:.25, infl:.025, fx:.06, rate:.005,
        note:"Weak volumes with labour and overhead inflation at 2.5%, metals up 25% and SOFR 50bp higher."}},
 scenarioNames:{Mild:"Soft demand", Severe:"Inventory correction"},
 text:{"Volume share":"Volume share","Material share":"Materials share","Crude pass-through":"Metals pass-through",
       "Share of this line that moves with volume":"Share of this line that moves with units assembled and tested",
       "Share of a crude move that reaches this line":"Share of a gold / copper price move that reaches this line",
       "Share of this line that is material spend":"Share of this line that is substrate, leadframe and other direct material",
       "ID10 + MY10 over the GSE total":"non-USD cost base in the plants, estimate","measured from the cube":"estimate","assumed same as opex":"debt mostly in USD"},
 tour:{
  2:"Every assumption behind the scenario, on the left: unit volume, substrate and leadframe pricing, gold and copper, labour and overhead inflation, plant currencies against USD and SOFR. Each has a <b>switch</b> — turn assumptions off to see what volume alone, or volume plus materials, does to profit.<br><br>Dragging a slider adjusts the scenario you are on — its pill gets an orange dot and the note lists what changed.",
  7:"Everything so far has been <b>how big the shock is</b> — units down 6%, gold up 12%. The other half is <b>how much of each line the shock reaches</b>, and that half is a planning estimate rather than cube data. Those are the factors, and they live in here.",
  8:"One row per posting line, four things you can change.<br><br><b>Volume share</b> — revenue 1.0; direct materials 1.0; direct labour 0.6 and utilities 0.7, because part of the cleanroom runs whatever the loading.<br><br><b>Materials share</b> — direct materials (substrates, leadframes, mould compound, solder balls) 1.0.<br><br><b>Metals pass-through</b> — direct materials 0.35: the gold and copper not passed on to customers.<br><br><b>Inflation share</b> — labour, maintenance, facilities and other overhead 1.0.",
  9:"<b>Non-USD shares</b> — revenue is billed in USD, but about 55% of cost of sales and 60% of overhead are in SGD, THB, CNY and IDR. These are estimates, so change them to your plant mix.<br><br><b>Repricing share and base rate</b> — 60% of debt reprices against SOFR at 3.9%. <b>Marginal tax rate</b> — applied to the change in profit, as booked in the 6+6."},
 method:
  "<b>Base ties to the cube.</b> Every subtotal is derived from the posting lines and profit is checked against account 99999 each time the page opens.<br><br>"+
  "<b>Planning logic.</b> An OSAT earns a USD price per unit assembled and tested, while most of its cost sits in local currency in the plants. <b>Unit volume</b> moves revenue and direct materials in full, and direct labour (0.6) and utilities (0.7) partly, since a cleanroom carries fixed staffing and energy. <b>Materials</b> apply in full to direct materials. <b>Gold and copper</b> pass 0.35 into direct materials, the share not recovered through customer pass-through clauses. <b>Labour and overhead inflation</b> applies to labour, maintenance, facilities and overhead.<br><br>"+
  "<b>Currency.</b> Amounts are shown in USD as booked; no conversion is applied. The FX driver moves only the non-USD cost share (positive = plant currencies strengthen and costs rise in USD).<br><br>"+
  "<b>Finance costs.</b> 60% of debt reprices against SOFR at 3.9% (early November 2026).<br><br>"+
  "<b>Not modelled:</b> capital spend on new lines, depreciation changes, customer price renegotiation and test-only versus turnkey mix shifts."
};
