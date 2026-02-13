import { useState, useCallback, useEffect, useRef } from "react";

// ─── Utility: random int in [a, b] ────────────────────────────────
const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

// ─── Fraction display helper ──────────────────────────────────────
function frac(n, d) {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d);
  n /= g; d /= g;
  if (d === 1) return `${n}`;
  return `${n}/${d}`;
}

// ─── Colour tokens ────────────────────────────────────────────────
const C = {
  bg: "#f8f9fa", card: "#ffffff", border: "#e0e0e0",
  accent: "#2563eb", accentLight: "#dbeafe",
  green: "#16a34a", greenBg: "#dcfce7",
  red: "#dc2626", redBg: "#fee2e2",
  text: "#1e293b", muted: "#64748b",
  orange: "#ea580c", orangeBg: "#fff7ed",
};

// ─── Shared button ────────────────────────────────────────────────
function Btn({ children, onClick, variant = "primary", disabled, style }) {
  const base = {
    padding: "10px 22px", borderRadius: 8, fontWeight: 600,
    fontSize: 15, cursor: disabled ? "not-allowed" : "pointer",
    border: "none", transition: "all .15s", opacity: disabled ? 0.5 : 1,
    fontFamily: "inherit", ...style,
  };
  const variants = {
    primary: { background: C.accent, color: "#fff" },
    secondary: { background: C.accentLight, color: C.accent },
    success: { background: C.green, color: "#fff" },
    ghost: { background: "transparent", color: C.accent, border: `1.5px solid ${C.border}` },
  };
  return <button style={{ ...base, ...variants[variant] }} onClick={onClick} disabled={disabled}>{children}</button>;
}

// ─── Score bar ────────────────────────────────────────────────────
function ScoreBar({ correct, total }) {
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ flex: 1, height: 10, background: C.border, borderRadius: 5, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: correct === total && total > 0 ? C.green : C.accent, transition: "width .4s", borderRadius: 5 }} />
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.muted, minWidth: 80, textAlign: "right" }}>
        {correct}/{total} ({pct}%)
      </span>
    </div>
  );
}

// ─── Feedback flash ───────────────────────────────────────────────
function Feedback({ result, message }) {
  if (!result) return null;
  const isCorrect = result === "correct";
  return (
    <div style={{
      padding: "12px 18px", borderRadius: 10, marginTop: 12,
      background: isCorrect ? C.greenBg : C.redBg,
      color: isCorrect ? C.green : C.red,
      fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 8,
      animation: "fadeIn .25s",
    }}>
      <span style={{ fontSize: 22 }}>{isCorrect ? "✓" : "✗"}</span>
      {message}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  1. SLOPE EXPLORER  (visual / interactive)
// ═══════════════════════════════════════════════════════════════════
function SlopeExplorer() {
  const canvasRef = useRef(null);
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const scale = 30;

    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = "#e8e8e8"; ctx.lineWidth = 1;
    for (let x = cx % scale; x < W; x += scale) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = cy % scale; y < H; y += scale) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();

    // Axis labels
    ctx.fillStyle = "#94a3b8"; ctx.font = "13px monospace"; ctx.textAlign = "center";
    for (let i = -Math.floor(cx / scale); i <= Math.floor(cx / scale); i++) {
      if (i === 0) continue;
      ctx.fillText(i, cx + i * scale, cy + 18);
    }
    ctx.textAlign = "right";
    for (let i = -Math.floor(cy / scale); i <= Math.floor(cy / scale); i++) {
      if (i === 0) continue;
      ctx.fillText(i, cx - 8, cy - i * scale + 5);
    }

    // Line
    const toCanvas = (px, py) => [cx + px * scale, cy - py * scale];
    const xMin = -cx / scale, xMax = cx / scale;
    const [x1c, y1c] = toCanvas(xMin, slope * xMin + intercept);
    const [x2c, y2c] = toCanvas(xMax, slope * xMax + intercept);

    ctx.strokeStyle = C.accent; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x1c, y1c); ctx.lineTo(x2c, y2c); ctx.stroke();

    // Rise/run triangle from origin-ish
    const baseX = 0;
    const baseY = slope * baseX + intercept;
    const runX = baseX + 1;
    const runY = baseY;
    const riseY = slope * runX + intercept;
    const [bxc, byc] = toCanvas(baseX, baseY);
    const [rxc, ryc] = toCanvas(runX, runY);
    const [txc, tyc] = toCanvas(runX, riseY);

    if (Math.abs(slope) > 0.01 && Math.abs(slope) < 20) {
      ctx.strokeStyle = C.orange; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
      ctx.beginPath(); ctx.moveTo(bxc, byc); ctx.lineTo(rxc, ryc); ctx.lineTo(txc, tyc); ctx.stroke();
      ctx.setLineDash([]);

      // Labels
      ctx.fillStyle = C.orange; ctx.font = "bold 13px sans-serif"; ctx.textAlign = "center";
      ctx.fillText("run = 1", (bxc + rxc) / 2, ryc + 18);
      ctx.textAlign = "left";
      ctx.fillText(`rise = ${slope >= 0 ? "+" : ""}${Number(slope.toFixed(2))}`, txc + 6, (ryc + tyc) / 2 + 4);
    }

    // Point on y-intercept
    const [icx, icy] = toCanvas(0, intercept);
    ctx.fillStyle = C.accent;
    ctx.beginPath(); ctx.arc(icx, icy, 6, 0, Math.PI * 2); ctx.fill();

  }, [slope, intercept]);

  return (
    <div>
      <p style={{ fontSize: 14, color: C.muted, marginBottom: 8 }}>
        Drag the sliders to see how <strong>slope</strong> and <strong>y-intercept</strong> change the line.
        The <span style={{ color: C.orange, fontWeight: 600 }}>orange triangle</span> shows <em>rise</em> over <em>run</em>.
      </p>
      <canvas ref={canvasRef} width={460} height={340}
        style={{ background: "#fff", borderRadius: 10, border: `1px solid ${C.border}`, display: "block", maxWidth: "100%" }} />
      <div style={{ marginTop: 14, display: "flex", gap: 24, flexWrap: "wrap" }}>
        <label style={{ fontSize: 14, fontWeight: 600 }}>
          Slope: <span style={{ color: C.accent }}>{slope >= 0 ? "+" : ""}{slope.toFixed(1)}</span>
          <input type="range" min={-5} max={5} step={0.25} value={slope}
            onChange={e => setSlope(Number(e.target.value))}
            style={{ display: "block", width: 200, accentColor: C.accent }} />
        </label>
        <label style={{ fontSize: 14, fontWeight: 600 }}>
          y-intercept: <span style={{ color: C.accent }}>{intercept >= 0 ? "+" : ""}{intercept.toFixed(0)}</span>
          <input type="range" min={-5} max={5} step={1} value={intercept}
            onChange={e => setIntercept(Number(e.target.value))}
            style={{ display: "block", width: 200, accentColor: C.accent }} />
        </label>
      </div>
      <p style={{ marginTop: 10, fontSize: 15, fontWeight: 600 }}>
        Equation: <span style={{ color: C.accent }}>y = {slope === 0 ? "" : slope === 1 ? "" : slope === -1 ? "−" : slope.toFixed(1)}{slope !== 0 ? "x" : ""}{intercept > 0 ? ` + ${intercept}` : intercept < 0 ? ` − ${Math.abs(intercept)}` : slope === 0 ? `${intercept}` : ""}</span>
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  2. SLOPE DRILL  (10 questions, immediate feedback)
// ═══════════════════════════════════════════════════════════════════
function genSlopeQ() {
  const x1 = randInt(-8, 5), y1 = randInt(-6, 6);
  let x2 = randInt(-5, 8);
  while (x2 === x1) x2 = randInt(-5, 8);
  const y2 = randInt(-6, 6);
  const rise = y2 - y1, run = x2 - x1;
  const g = gcd(rise, run);
  return { x1, y1, x2, y2, ansNum: rise / g, ansDen: run / g };
}

function SlopeDrill() {
  const [q, setQ] = useState(genSlopeQ);
  const [numInput, setNumInput] = useState("");
  const [denInput, setDenInput] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ c: 0, t: 0 });

  const check = () => {
    const uNum = parseInt(numInput), uDen = parseInt(denInput);
    if (isNaN(uNum) || isNaN(uDen) || uDen === 0) {
      setResult("incorrect");
      setScore(s => ({ c: s.c, t: s.t + 1 }));
      return;
    }
    // Compare fractions: uNum/uDen === ansNum/ansDen
    const correct = uNum * q.ansDen === q.ansNum * uDen;
    setResult(correct ? "correct" : "incorrect");
    setScore(s => ({ c: s.c + (correct ? 1 : 0), t: s.t + 1 }));
  };

  const next = () => {
    setQ(genSlopeQ()); setNumInput(""); setDenInput(""); setResult(null);
  };

  return (
    <div>
      <ScoreBar correct={score.c} total={score.t} />
      <p style={{ fontSize: 16, marginBottom: 4 }}>
        Find the slope of the line through <strong>({q.x1}, {q.y1})</strong> and <strong>({q.x2}, {q.y2})</strong>.
      </p>
      <p style={{ fontSize: 13, color: C.muted }}>Enter as a fraction (numerator / denominator). For integers, put 1 as denominator.</p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
        <span style={{ fontWeight: 600 }}>m = </span>
        <input type="number" value={numInput} onChange={e => setNumInput(e.target.value)} placeholder="rise"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        <span style={{ fontSize: 22, fontWeight: 300 }}>/</span>
        <input type="number" value={denInput} onChange={e => setDenInput(e.target.value)} placeholder="run"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        {!result && <Btn onClick={check}>Check</Btn>}
        {result && <Btn onClick={next} variant="secondary">Next →</Btn>}
      </div>
      <Feedback result={result}
        message={result === "correct" ? "Well done!" : `Answer: ${frac(q.ansNum, q.ansDen)}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  3. MIDPOINT DRILL
// ═══════════════════════════════════════════════════════════════════
function genMidQ() {
  // Use even sums so midpoints are integers (reduces frustration)
  let x1 = randInt(-8, 8), y1 = randInt(-8, 8);
  let x2 = randInt(-8, 8), y2 = randInt(-8, 8);
  // Force integer midpoints
  if ((x1 + x2) % 2 !== 0) x2 += 1;
  if ((y1 + y2) % 2 !== 0) y2 += 1;
  return { x1, y1, x2, y2, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
}

function MidpointDrill() {
  const [q, setQ] = useState(genMidQ);
  const [xIn, setXIn] = useState("");
  const [yIn, setYIn] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ c: 0, t: 0 });

  const check = () => {
    const ux = parseFloat(xIn), uy = parseFloat(yIn);
    const correct = ux === q.mx && uy === q.my;
    setResult(correct ? "correct" : "incorrect");
    setScore(s => ({ c: s.c + (correct ? 1 : 0), t: s.t + 1 }));
  };
  const next = () => { setQ(genMidQ()); setXIn(""); setYIn(""); setResult(null); };

  return (
    <div>
      <ScoreBar correct={score.c} total={score.t} />
      <p style={{ fontSize: 16 }}>
        Find the midpoint of <strong>({q.x1}, {q.y1})</strong> and <strong>({q.x2}, {q.y2})</strong>.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
        <span style={{ fontWeight: 600 }}>Midpoint = (</span>
        <input type="number" value={xIn} onChange={e => setXIn(e.target.value)} placeholder="x"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        <span>,</span>
        <input type="number" value={yIn} onChange={e => setYIn(e.target.value)} placeholder="y"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        <span style={{ fontWeight: 600 }}>)</span>
        {!result && <Btn onClick={check}>Check</Btn>}
        {result && <Btn onClick={next} variant="secondary">Next →</Btn>}
      </div>
      <Feedback result={result}
        message={result === "correct" ? "Spot on!" : `Answer: (${q.mx}, ${q.my})`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  4. PARALLEL / PERPENDICULAR DRILL
// ═══════════════════════════════════════════════════════════════════
function genParPerpQ() {
  const nums = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
  const dens = [1, 2, 3, 4, 5];
  const n1 = randChoice(nums), d1 = randChoice(dens);
  const g1 = gcd(n1, d1);
  const sn1 = n1 / g1, sd1 = d1 / g1;
  const kind = randChoice(["parallel", "perpendicular", "neither"]);
  let sn2, sd2;
  if (kind === "parallel") {
    // same slope, different representation maybe
    const k = randChoice([1, 2, 3]);
    sn2 = sn1 * k; sd2 = sd1 * k;
  } else if (kind === "perpendicular") {
    // negative reciprocal: -d1/n1
    sn2 = -sd1; sd2 = sn1;
    if (sd2 < 0) { sn2 = -sn2; sd2 = -sd2; }
  } else {
    // random different slope that's neither
    do {
      sn2 = randChoice(nums); sd2 = randChoice(dens);
    } while (
      sn2 * sd1 === sn1 * sd2 || // parallel
      sn1 * sn2 === -(sd1 * sd2)  // perpendicular
    );
  }
  const g2 = gcd(sn2, sd2);
  return { sn1, sd1, sn2: sn2 / g2, sd2: sd2 / g2, answer: kind };
}

function ParPerpDrill() {
  const [q, setQ] = useState(genParPerpQ);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ c: 0, t: 0 });

  const check = (choice) => {
    setSelected(choice);
    const correct = choice === q.answer;
    setResult(correct ? "correct" : "incorrect");
    setScore(s => ({ c: s.c + (correct ? 1 : 0), t: s.t + 1 }));
  };
  const next = () => { setQ(genParPerpQ()); setSelected(null); setResult(null); };

  const btnStyle = (choice) => ({
    padding: "12px 20px", borderRadius: 8, fontWeight: 600, fontSize: 15,
    cursor: result ? "default" : "pointer", border: "2px solid",
    transition: "all .15s", fontFamily: "inherit",
    background: result && choice === q.answer ? C.greenBg
      : result && choice === selected && choice !== q.answer ? C.redBg
      : selected === choice ? C.accentLight : "#fff",
    borderColor: result && choice === q.answer ? C.green
      : result && choice === selected && choice !== q.answer ? C.red
      : selected === choice ? C.accent : C.border,
    color: result && choice === q.answer ? C.green
      : result && choice === selected && choice !== q.answer ? C.red
      : C.text,
  });

  return (
    <div>
      <ScoreBar correct={score.c} total={score.t} />
      <p style={{ fontSize: 16 }}>
        Line 1 has slope <strong>{frac(q.sn1, q.sd1)}</strong>.
        Line 2 has slope <strong>{frac(q.sn2, q.sd2)}</strong>.
      </p>
      <p style={{ fontSize: 14, color: C.muted }}>Are these lines parallel, perpendicular, or neither?</p>
      <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
        {["parallel", "perpendicular", "neither"].map(c => (
          <button key={c} style={btnStyle(c)} onClick={() => !result && check(c)}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
        {result && <Btn onClick={next} variant="secondary">Next →</Btn>}
      </div>
      <Feedback result={result}
        message={result === "correct" ? "Correct!" :
          `They are ${q.answer}. ${q.answer === "parallel" ? "Same slope." :
          q.answer === "perpendicular" ? `Product = ${frac(q.sn1 * q.sn2, q.sd1 * q.sd2)} (need −1).` :
          "Different slopes and product ≠ −1."}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  5. PERPENDICULAR SLOPE DRILL
// ═══════════════════════════════════════════════════════════════════
function genPerpSlopeQ() {
  const nums = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
  const dens = [1, 2, 3, 4, 5];
  const n = randChoice(nums), d = randChoice(dens);
  const g = gcd(n, d);
  const sn = n / g, sd = d / g;
  // perp slope = -d/n
  let pn = -sd, pd = sn;
  if (pd < 0) { pn = -pn; pd = -pd; }
  return { sn, sd, pn, pd };
}

function PerpSlopeDrill() {
  const [q, setQ] = useState(genPerpSlopeQ);
  const [numIn, setNumIn] = useState("");
  const [denIn, setDenIn] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ c: 0, t: 0 });

  const check = () => {
    const un = parseInt(numIn), ud = parseInt(denIn);
    if (isNaN(un) || isNaN(ud) || ud === 0) {
      setResult("incorrect");
      setScore(s => ({ c: s.c, t: s.t + 1 }));
      return;
    }
    const correct = un * q.pd === q.pn * ud;
    setResult(correct ? "correct" : "incorrect");
    setScore(s => ({ c: s.c + (correct ? 1 : 0), t: s.t + 1 }));
  };
  const next = () => { setQ(genPerpSlopeQ()); setNumIn(""); setDenIn(""); setResult(null); };

  return (
    <div>
      <ScoreBar correct={score.c} total={score.t} />
      <p style={{ fontSize: 16 }}>
        A line has slope <strong>{frac(q.sn, q.sd)}</strong>.
        What is the slope of any line <em>perpendicular</em> to it?
      </p>
      <p style={{ fontSize: 13, color: C.muted }}>Remember: flip the fraction and change the sign.</p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
        <span style={{ fontWeight: 600 }}>m⊥ = </span>
        <input type="number" value={numIn} onChange={e => setNumIn(e.target.value)} placeholder="num"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        <span style={{ fontSize: 22, fontWeight: 300 }}>/</span>
        <input type="number" value={denIn} onChange={e => setDenIn(e.target.value)} placeholder="den"
          style={{ width: 60, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        {!result && <Btn onClick={check}>Check</Btn>}
        {result && <Btn onClick={next} variant="secondary">Next →</Btn>}
      </div>
      <Feedback result={result}
        message={result === "correct" ? "Nailed it!" : `Answer: ${frac(q.pn, q.pd)}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  6. DISTANCE DRILL
// ═══════════════════════════════════════════════════════════════════
function genDistQ() {
  // Use Pythagorean-triple-friendly points for cleaner answers
  const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];
  const [a, b, c] = randChoice(triples);
  const sign1 = randChoice([1, -1]), sign2 = randChoice([1, -1]);
  const x1 = randInt(-4, 4), y1 = randInt(-4, 4);
  return { x1, y1, x2: x1 + sign1 * a, y2: y1 + sign2 * b, dist: c };
}

function DistanceDrill() {
  const [q, setQ] = useState(genDistQ);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ c: 0, t: 0 });

  const check = () => {
    const u = parseFloat(input);
    const correct = Math.abs(u - q.dist) < 0.01;
    setResult(correct ? "correct" : "incorrect");
    setScore(s => ({ c: s.c + (correct ? 1 : 0), t: s.t + 1 }));
  };
  const next = () => { setQ(genDistQ()); setInput(""); setResult(null); };

  return (
    <div>
      <ScoreBar correct={score.c} total={score.t} />
      <p style={{ fontSize: 16 }}>
        Find the distance between <strong>({q.x1}, {q.y1})</strong> and <strong>({q.x2}, {q.y2})</strong>.
      </p>
      <p style={{ fontSize: 13, color: C.muted }}>These use Pythagorean triples — the answer is a whole number.</p>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
        <span style={{ fontWeight: 600 }}>d = </span>
        <input type="number" value={input} onChange={e => setInput(e.target.value)} placeholder="distance"
          style={{ width: 80, padding: "8px 10px", borderRadius: 6, border: `1.5px solid ${C.border}`, fontSize: 16, textAlign: "center" }} disabled={!!result} />
        {!result && <Btn onClick={check}>Check</Btn>}
        {result && <Btn onClick={next} variant="secondary">Next →</Btn>}
      </div>
      <Feedback result={result}
        message={result === "correct" ? "Perfect!" : `Answer: ${q.dist}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════════════════════════
const TABS = [
  { id: "explore", label: "Slope Explorer", icon: "📐" },
  { id: "slope", label: "Slope Drill", icon: "📈" },
  { id: "midpoint", label: "Midpoint Drill", icon: "🎯" },
  { id: "distance", label: "Distance Drill", icon: "📏" },
  { id: "parperp", label: "∥ or ⊥ ?", icon: "↗↘" },
  { id: "perpslope", label: "⊥ Slope Drill", icon: "🔄" },
];

export default function App() {
  const [tab, setTab] = useState("explore");

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Segoe UI', system-ui, sans-serif", color: C.text }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        input:focus { outline: none; border-color: ${C.accent} !important; box-shadow: 0 0 0 3px ${C.accentLight}; }
        button:hover:not(:disabled) { filter: brightness(1.05); transform: translateY(-1px); }
        input[type=range] { height: 6px; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: `1px solid ${C.border}`, padding: "18px 24px" }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px" }}>
          Line — Guided Practice &amp; Drills
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: 13, color: C.muted }}>
          Mr Downes Maths · Leaving Certificate Ordinary Level · Coordinate Geometry
        </p>
      </div>

      {/* Tab bar */}
      <div style={{
        display: "flex", gap: 4, padding: "10px 16px", background: "#fff",
        borderBottom: `1px solid ${C.border}`, overflowX: "auto", flexWrap: "wrap",
      }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "8px 14px", borderRadius: 8, border: "none",
            background: tab === t.id ? C.accent : "transparent",
            color: tab === t.id ? "#fff" : C.muted,
            fontWeight: 600, fontSize: 13, cursor: "pointer",
            transition: "all .15s", fontFamily: "inherit", whiteSpace: "nowrap",
          }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "20px 16px 60px" }}>
        <div style={{
          background: C.card, borderRadius: 14, padding: "24px",
          border: `1px solid ${C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,.04)",
        }}>
          {/* Drill instructions */}
          {tab !== "explore" && (
            <div style={{
              background: C.orangeBg, border: `1px solid #fed7aa`, borderRadius: 10,
              padding: "10px 14px", marginBottom: 16, fontSize: 13, color: C.orange, fontWeight: 500,
            }}>
              💡 <strong>Tip:</strong> {
                tab === "slope" ? "Use the formula: m = (y₂ − y₁) / (x₂ − x₁). Think about the sign before you calculate." :
                tab === "midpoint" ? "Add the x's together, divide by 2. Same for the y's. Think: is my answer between the two points?" :
                tab === "distance" ? "These all use Pythagorean triples. Find the horizontal and vertical distances first." :
                tab === "parperp" ? "Parallel → same slope. Perpendicular → slopes multiply to give −1." :
                "Flip the fraction and change the sign. If the slope is a/b, the perpendicular slope is −b/a."
              }
            </div>
          )}

          {tab === "explore" && <SlopeExplorer />}
          {tab === "slope" && <SlopeDrill />}
          {tab === "midpoint" && <MidpointDrill />}
          {tab === "distance" && <DistanceDrill />}
          {tab === "parperp" && <ParPerpDrill />}
          {tab === "perpslope" && <PerpSlopeDrill />}
        </div>

        {/* Pólya reminder */}
        <div style={{
          marginTop: 20, padding: "14px 18px", borderRadius: 10,
          background: "#fff", border: `1px solid ${C.border}`, fontSize: 13, color: C.muted,
        }}>
          <strong style={{ color: C.text }}>Pólya Check:</strong> Before pressing <em>Check</em>, ask yourself — 
          <em>does my answer make sense?</em> Is the slope positive when the line rises? 
          Is the midpoint between the two points? Is the distance positive?
        </div>
      </div>
    </div>
  );
}
