// ═══════════════════════════════════════════
//  FLIGHT & SKINS — SHARED SCORING LOGIC
//  Loaded by both golf-scorer.html (PC) and
//  player.html (mobile) so the handicap math
//  and default course data can never quietly
//  drift out of sync between the two.
// ═══════════════════════════════════════════

// Strokes a player receives on a given hole (0-indexed), given that
// hole's stroke-index array and the round's hole count.
function strokesOn(hdcp, hole, si, numHoles){
  const s = (si && si[hole]) ? si[hole] : 0;
  if(!s) return 0;
  const n = numHoles || 18;
  return Math.floor(hdcp/n) + ((hdcp%n)>=s?1:0);
}

// Standard-course default pars + stroke indexes, sliced to n holes.
function defaultParsAndSI(n){
  const p=[4,4,3,4,5,3,4,5,4,4,4,3,5,4,4,3,5,4];
  const s=[1,7,15,11,3,17,5,9,13,2,8,16,12,4,18,6,10,14];
  n = n||18;
  return {pars:p.slice(0,n), si:s.slice(0,n)};
}
