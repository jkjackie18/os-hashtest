// FY26 EOY Scenarios driver theme: Land transport authority (LTA-style planning: fare-box risk retained, operator contracts,
// rail licence charges, energy, manpower). Reusable for any land-transport authority. Loaded before the page script.
// drivers: names / hints / slider ranges (%, rate in bp); lines: weights [ridership, contracts, energy, inflation]
// scenarios: notes AND driver values; scenarioNames: relabel. Page hooks (fy_theme_ccy.js): ccy, restate, method,
// factorNames, ne (+neNotes), rate, tour (step bodies), text (phrase replacements on screen).
window.FY26THEME={
 key:"transport",
 ccy:"SGD",
 restate:1,               // cube amounts are shown as SGD as booked (no conversion)
 drivers:{
  vol:   {n:"Ridership (bus and rail journeys)", label:"Ridership", min:-15, max:8, step:0.5,
         hint:"Journeys against the 6+6. LTA keeps the fare box, so this moves bus and rail fare revenue and concessions/refunds. Operator service fees are paid per service run, not per passenger, so cost barely moves: a ridership shock lands almost fully on the surplus."},
  mat:   {n:"Operator contract and maintenance re-pricing", label:"Contracts & maintenance", min:-5, max:15, step:0.5,
         hint:"Indexation and re-tendering of bus and rail service contracts (service fees and incentives 51010), maintenance and upkeep contracts (52010) and half of infrastructure upkeep and materials (65000)."},
  crude: {n:"Energy tariff (traction power and fuel)", label:"Energy", min:-15, max:30, step:0.5,
         hint:"Electricity for trains, stations and e-bus charging, and fuel. Lands fully on utilities (53010), on the energy component of operator fees (15%) and on premises electricity (15% of premises and facilities)."},
  infl:  {n:"Manpower and construction cost inflation", label:"Manpower & construction", min:0, max:6, step:0.1,
         hint:"Incremental Q4 inflation above plan on employee compensation, agency fees and professional services, premises, IT and other operating expenditure."},
  fx:    {n:"FX vs SGD (overseas subsidiaries)", label:"FX vs SGD", min:-15, max:10, step:0.5,
         hint:"Move of the overseas consultancy subsidiaries' currencies against SGD; applies only to the small non-SGD share set in Model factors. Negative = they weaken."},
  rate:  {n:"Interest rate (SORA)", label:"SORA", min:-100, max:200, step:25,
         hint:"Scales finance costs by the repricing share of borrowings. 3-month compounded SORA was about 1.16% in Q3 2026 (MAS data)."}},
 lines:{"41000":[0.77,0,0,0], "49000":[1,0,0,0],
        "51010":[0,1,0.15,0], "52010":[0.1,1,0,0], "53010":[0.1,0,1,0], "59010":[0,0,0,0],
        "61000":[0,0,0,1], "62000":[0,0,0,1], "63000":[0,0,0,1], "64000":[0,0,0,1],
        "65000":[0,0.5,0,0.5], "66000":[0,0,0,1], "66500":[0,0,0,1], "67000":[0,0,0.15,1],
        "67500":[0,0,0,1], "69000":[0.1,0,0,1], "79999":[0,0,0,0], "85999":[0,0,0,0]},
 factorNames:["Ridership share","Contract & maintenance share","Energy pass-through","Inflation share"],
 ne:{rev:0.05,cogs:0.03,opex:0.05,fin:0},
 neNotes:{rev:"overseas consultancy subsidiaries, LTA estimate",cogs:"LTA estimate",opex:"LTA estimate",fin:"borrowing is in SGD"},
 rate:{flt:0.30,base:0.0116},
 scenarios:{
  Mild:{vol:-.02, mat:.02, crude:.05, infl:.003, fx:-.01, rate:0,
        note:"Journeys 2% below the 6+6 as the 27 Dec 2025 fare adjustment beds in; contract indexation at the low end, energy a little firmer."},
  Central:{vol:-.04, mat:.04, crude:.10, infl:.008, fx:-.02, rate:.0025,
        note:"Mid-point of the outlook: softer journeys, operator and maintenance contracts re-priced for the new lines, energy tariff up 10%. The landing zone to size Q4 actions against."},
  Severe:{vol:-.08, mat:.08, crude:.20, infl:.012, fx:-.04, rate:.005,
        note:"Journeys 8% below plan while contract re-pricing, maintenance catch-up and a 20% energy tariff rise hit together."},
  Stagflation:{vol:-.08, mat:.08, crude:.20, infl:.025, fx:-.06, rate:.01,
        note:"Severe journeys and contract costs, with manpower and construction inflation at 2.5% and SORA up 100bp."}},
 scenarioNames:{Mild:"Soft ridership", Severe:"Cost squeeze"},
 text:{"Volume share":"Ridership share","Material share":"Contract & maintenance share","Crude pass-through":"Energy pass-through",
       "Share of this line that moves with volume":"Share of this line that moves with journeys",
       "Share of a crude move that reaches this line":"Share of an energy tariff move that reaches this line",
       "Share of this line that is material spend":"Share of this line that is operator or maintenance contract spend",
       "ID10 + MY10 over the GSE total":"overseas consultancy subsidiaries, LTA estimate","measured from the cube":"LTA estimate","assumed same as opex":"borrowing is in SGD",
       "Non-SGD share of COGS":"Non-SGD share of direct service costs",
       "Net revenue":"Operating income","Gross margin":"Service margin","gross margin":"service margin","EBIT":"Operating surplus","Net income":"Net surplus","net income":"net surplus"},
 tour:{
  2:"Every assumption behind the scenario, on the left: ridership, operator contract and maintenance re-pricing, energy tariff, manpower and construction inflation, FX and SORA. Each has a <b>switch</b> — turn assumptions off to see what ridership alone, or ridership plus contract re-pricing, does to the surplus.<br><br>Dragging a slider adjusts the scenario you are on — its pill gets an orange dot and the note lists what changed.",
  7:"Everything so far has been <b>how big the shock is</b> — journeys down 4%, energy tariff up 10%. The other half is <b>how much of each line the shock reaches</b>, and that half is a planning estimate rather than cube data. Those are the factors, and they live in here.",
  8:"One row per posting line, four things you can change.<br><br><b>Ridership share</b> — how much of the line moves with journeys. Fare revenue is 0.77 (licence charges and management fees are contractual); concessions and refunds 1.0; operator service fees 0, because contracts pay per service run, not per passenger.<br><br><b>Contract &amp; maintenance share</b> — how much of the line is operator or maintenance contract spend: service fees and maintenance and upkeep 1.0, infrastructure upkeep 0.5.<br><br><b>Energy pass-through</b> — utilities 1.0 (traction power), operator fees 0.15, premises 0.15.<br><br><b>Inflation share</b> — manpower, professional services, premises and other expenditure 1.0; contract lines 0 so they are not counted twice.",
  9:"<b>Non-SGD shares</b> — the small part of income and cost in the overseas consultancy subsidiaries; LTA's own operations are in SGD. These are estimates, so change them if the subsidiaries grow.<br><br><b>Repricing share and average rate</b> — 30% of borrowings reprice; the base rate is SORA. <b>Marginal tax rate</b> — applied to the change in surplus; it covers the contribution to the Consolidated Fund and subsidiaries' income tax as booked in the 6+6."},
 method:
  "<b>Base ties to the cube.</b> Every subtotal is derived from the posting lines and the net surplus is checked against account 99999 each time the page opens.<br><br>"+
  "<b>Planning logic.</b> LTA retains fare revenue and pays public transport operators fixed service fees under its contracting models, so ridership risk sits with LTA while most cost is fixed by contract. A fall in journeys therefore moves fare revenue (0.77 of operating income; the rail asset renewal licence charge and the development management fee are contractual) and concessions and refunds, but almost no cost.<br><br>"+
  "<b>Contract and maintenance re-pricing</b> applies in full to service fees and incentives (51010) and maintenance and upkeep (52010), and to half of infrastructure upkeep and materials (65000). <b>Energy</b> lands fully on utilities (53010), 0.15 on operator fees and 0.15 on premises. <b>Manpower and construction inflation</b> applies to employee compensation and the other operating expenditure lines; contract lines carry 0 so they are not counted twice.<br><br>"+
  "<b>Currency.</b> Amounts are shown in SGD exactly as booked in the cube; no conversion is applied. The FX driver only moves the overseas subsidiaries' small share.<br><br>"+
  "<b>Finance costs.</b> 30% of borrowings reprice, against a SORA base of 1.16%.<br><br>"+
  "<b>Contribution and tax.</b> Incremental surplus is charged at the 6+6's effective rate, covering the contribution to the Consolidated Fund and subsidiaries' income tax. In LTA's statements the contribution has been nil while deficits carried forward last, so treat the after-tax figures with care.<br><br>"+
  "<b>Not modelled:</b> government operating, capital and bond interest grants (not posted to these accounts), COE and ERP collections, and capital spend on new lines."
};
