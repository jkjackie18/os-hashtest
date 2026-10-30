// Revenue Analysis theme template - copy to themes/<name>.js (lower case, letters/digits/_), set Theme=<name> on the
// Web Content component, upload next to revenue.html. Everything here is optional: missing parts fall back to defaults.
window.THEME = {
  name: "Customer name",              // header line above the title
  view: "Banking",                    // "<view> · product view" over the 3D / photo panel
  top: "family",                      // KPI tile "Top <top> · Top country"
  gp: "Gross profit margin",          // margin tile labels (the account description from OneStream wins when present)
  np: "Net profit margin",
  // levels: ["division","product family","category","product"], all: "All divisions",   // group pages only
  keep: ["BANK"],                     // colour sets kept bright in the 3D models: BANK, POWER, TEL, FB
  // famc: { PRD110: ["#2f7cf6","#1d5fd6","#1748a8","#e3eeff"] },   // fixed colours per product family (else by order)
  // 3D model per product member (UD3 name -> model key below). Members not listed use the generic models.
  map: { PRD100: "bank", PRD110: "deposits" },
  models3d: {                         // model key -> drawing using the page's low-poly helpers (BV, PW, TC, FV, FB, TV, sub, box, cyl ...)
    bank: A => BV.bank(A),
    deposits: A => { sub(BV.piggy, A, -10, 0, 0, 1, 0); sub(BV.coinPile, A, 26, -6, 0, 1, 0); }
  },
  // Photo backdrop: one zone per product family (in order), polygon in photo pixels, card position, category pins.
  photo: { W: 1180, H: 539, src: "data:image/jpeg;base64,..." },
  zones: [ { poly: [[100,100],[400,100],[400,300],[100,300]], card: [250,90], cats: [[200,200],[300,220],[260,260]] } ],
  icons: [ '<path d="M3 21h18M5 21V8l7-5 7 5v13" stroke-linejoin="round"/>' ]   // 24x24 SVG path per zone
};
