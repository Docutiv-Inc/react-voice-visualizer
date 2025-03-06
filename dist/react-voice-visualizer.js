(function(){"use strict";(e=>{try{if(typeof window>"u")return;var i=document.createElement("style");i.appendChild(document.createTextNode(e)),document.head.appendChild(i)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".voice-visualizer__buttons-container{display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:15px;flex-wrap:wrap;margin-bottom:40px}.voice-visualizer__btn-center{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#fff;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s}.voice-visualizer__btn-center:disabled{opacity:.85;cursor:default}.voice-visualizer__btn-center:hover{background-color:#eaeaea;border:4px solid #9f9f9f}.voice-visualizer__btn-center>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause{background-color:#ff3030}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause:hover{background-color:#ff4f4f}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause>img{height:50%;max-height:16px}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent{border-color:transparent}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent:hover{background-color:#fff}.voice-visualizer__btn-left{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#ff3030;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s,opacity .3s}.voice-visualizer__btn-container{min-width:100px;display:flex;justify-content:flex-end}.voice-visualizer__btn-left:hover{background-color:#ff4f4f}.voice-visualizer__btn-left:disabled{opacity:.6;background-color:#ff3030;cursor:default}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone{background-color:#fff}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-left>img{width:auto;height:50%;max-height:16px}.voice-visualizer__btn-left:hover{border:4px solid #9f9f9f}.voice-visualizer__btn{box-sizing:border-box;min-width:100px;min-height:60px;padding:5px 20px;border-radius:40px;font-size:15px;background-color:#f0f0f0;transition:background-color .3s,opacity .3s}.voice-visualizer__btn:disabled{opacity:.8;background-color:#f0f0f0;cursor:default}.voice-visualizer__btn:hover{background-color:#bebebe}.voice-visualizer__canvas-container{position:relative;width:fit-content;margin:0 auto;overflow:hidden}.voice-visualizer__canvas-container canvas{display:block}.voice-visualizer__canvas-microphone-btn{position:absolute;top:50%;left:50%;width:auto;max-width:12%;min-width:24px;height:50%;max-height:100px;background-color:transparent;border:none;outline:none;transform:translate(-50%,-50%)}.voice-visualizer__canvas-microphone-icon{width:100%;height:100%;will-change:transform;transition:transform .3s}.voice-visualizer__canvas-microphone-btn:hover .voice-visualizer__canvas-microphone-icon{transform:scale(1.03)}.voice-visualizer__canvas-audio-wave-icon{position:absolute;top:50%;left:50%;width:auto;max-width:40%;height:40%;max-height:100px;transform:translate(-118%,-50%) scale(-1)}.voice-visualizer__canvas-audio-wave-icon2{transform:translate(18%,-50%)}.voice-visualizer__canvas-audio-processing{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.voice-visualizer__progress-indicator-hovered{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#85858599}.voice-visualizer__progress-indicator-hovered-time{position:absolute;top:3%;left:1px;width:fit-content;margin:0;padding:0 7px;opacity:.8;font-size:12px;border-radius:0 4px 4px 0;background-color:#575757;text-align:left}.voice-visualizer__progress-indicator-hovered-time.voice-visualizer__progress-indicator-hovered-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__progress-indicator{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#efefef}.voice-visualizer__progress-indicator-time{position:absolute;top:3%;left:1px;width:fit-content;box-sizing:border-box;min-width:37px;margin:0;padding:0 7px;font-size:12px;border-radius:0 4px 4px 0;text-align:left;color:#000;font-weight:500;background-color:#efefef}.voice-visualizer__progress-indicator-time.voice-visualizer__progress-indicator-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__audio-info-container{box-sizing:border-box;height:55px;display:flex;align-items:center;justify-content:center;gap:30px}.voice-visualizer__audio-info-time{margin:15px 0;min-width:38px;text-align:left}.voice-visualizer__visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:4px solid #c5c5c5;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.voice-visualizer__relative{position:relative}.voice-visualizer__spinner-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;display:flex;justify-content:center;align-items:center}.voice-visualizer__spinner{flex-shrink:0;width:100%;height:100%;border:4px solid rgba(197,197,197,.5);border-radius:50%;border-top-color:#b7b7b7;animation:voice-visualizer__spin 1s ease-in-out infinite;-webkit-animation:voice-visualizer__spin 1s ease-in-out infinite}@keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}@-webkit-keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}")})();
import { jsx as a, jsxs as ee, Fragment as We } from "react/jsx-runtime";
import { useState as l, useRef as N, useCallback as nt, useLayoutEffect as qe, useEffect as O } from "react";
const Fe = ({
  canvas: e,
  backgroundColor: t
}) => {
  const r = e.height, n = e.width, c = Math.round(n / 2), u = e.getContext("2d");
  return u ? (u.clearRect(0, 0, n, r), t !== "transparent" && (u.fillStyle = t, u.fillRect(0, 0, n, r)), { context: u, height: r, width: n, halfWidth: c }) : null;
}, $e = ({
  context: e,
  color: t,
  rounded: r,
  x: n,
  y: c,
  w: u,
  h: w
}) => {
  e.fillStyle = t, e.beginPath(), e.roundRect ? (e.roundRect(n, c, u, w, r), e.fill()) : e.fillRect(n, c, u, w);
}, it = ({
  barsData: e,
  canvas: t,
  barWidth: r,
  gap: n,
  backgroundColor: c,
  mainBarColor: u,
  secondaryBarColor: w,
  currentAudioTime: m = 0,
  rounded: I,
  duration: f
}) => {
  const L = Fe({ canvas: t, backgroundColor: c });
  if (!L)
    return;
  const { context: y, height: z } = L, A = m / f;
  e.forEach((v, M) => {
    const d = M / e.length, o = A > d;
    $e({
      context: y,
      color: o ? w : u,
      rounded: I,
      x: M * (r + n * r),
      y: z / 2 - v.max,
      h: v.max * 2,
      w: r
    });
  });
};
function ct({
  context: e,
  color: t,
  rounded: r,
  width: n,
  height: c,
  barWidth: u
}) {
  $e({
    context: e,
    color: t,
    rounded: r,
    x: n / 2 + u / 2,
    y: c / 2 - 1,
    h: 2,
    w: n - (n / 2 + u / 2)
  });
}
const st = ({
  audioData: e,
  unit: t,
  index: r,
  index2: n,
  canvas: c,
  isRecordingInProgress: u,
  isPausedRecording: w,
  picks: m,
  backgroundColor: I,
  barWidth: f,
  mainBarColor: L,
  secondaryBarColor: y,
  rounded: z,
  animateCurrentPick: A,
  fullscreen: v
}) => {
  const M = Fe({ canvas: c, backgroundColor: I });
  if (!M)
    return;
  const { context: d, height: o, width: Z, halfWidth: U } = M;
  if (e != null && e.length && u) {
    const _ = Math.max(...e);
    if (!w) {
      if (n.current >= f) {
        n.current = 0;
        const j = (o - _ / 258 * o) / o * 100, B = (-o + _ / 258 * o * 2) / o * 100, ne = r.current === f ? {
          startY: j,
          barHeight: B
        } : null;
        r.current >= t ? r.current = f : r.current += f, m.length > (v ? Z : U) / f && m.pop(), m.unshift(ne);
      }
      n.current += 1;
    }
    !v && te(), A && $e({
      context: d,
      rounded: z,
      color: L,
      x: v ? Z : U,
      y: o - _ / 258 * o,
      h: -o + _ / 258 * o * 2,
      w: f
    });
    let re = (v ? Z : U) - n.current;
    m.forEach((j) => {
      j && $e({
        context: d,
        color: L,
        rounded: z,
        x: re,
        y: j.startY * o / 100 > o / 2 - 1 ? o / 2 - 1 : j.startY * o / 100,
        h: j.barHeight * o / 100 > 2 ? j.barHeight * o / 100 : 2,
        w: f
      }), re -= f;
    });
  } else
    m.length = 0;
  function te() {
    ct({
      context: d,
      color: y,
      rounded: z,
      width: Z,
      height: o,
      barWidth: f
    });
  }
}, Xe = (e) => {
  const t = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60, c = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}:${String(c).charAt(0)}` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}`;
}, ot = (e) => {
  const t = Math.floor(e / 1e3), r = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), c = t % 60;
  return r > 0 ? `${String(r).padStart(2, "0")}:${String(n).padStart(
    2,
    "0"
  )}:${String(c).padStart(2, "0")}` : `${String(n).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
};
function ke(e) {
  if (typeof e == "string") {
    const t = Number(e);
    if (!Number.isNaN(t))
      return `${Math.trunc(t / 2) * 2}px`;
  }
  return e;
}
const at = ({
  bufferData: e,
  height: t,
  width: r,
  barWidth: n,
  gap: c
}) => {
  const u = r / (n + c * n), w = Math.floor(e.length / u), m = t / 2;
  let I = [], f = 0;
  for (let L = 0; L < u; L++) {
    const y = [];
    let z = 0;
    for (let v = 0; v < w && L * w + v < e.length; v++) {
      const M = e[L * w + v];
      M > 0 && (y.push(M), z++);
    }
    const A = y.reduce((v, M) => v + M, 0) / z;
    A > f && (f = A), I.push({ max: A });
  }
  if (m * 0.95 > f * m) {
    const L = m * 0.95 / f;
    I = I.map((y) => ({
      max: y.max > 0.01 ? y.max * L : 1
    }));
  }
  return I;
}, ut = (e) => {
  if (!e)
    return "";
  const t = e.match(/audio\/([^;]+)/);
  return t && t.length >= 2 ? `.${t[1]}` : "";
}, ht = (e) => {
  const t = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60, c = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return t > 0 ? `${String(t).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}}h` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}m` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    c
  ).charAt(0)}${String(c).charAt(1)}s`;
}, lt = (e) => {
  onmessage = (t) => {
    postMessage(e(t.data));
  };
};
function mt({
  fn: e,
  initialValue: t,
  onMessageReceived: r
}) {
  const [n, c] = l(t);
  return {
    result: n,
    setResult: c,
    run: (w) => {
      const m = new Worker(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        URL.createObjectURL(new Blob([`(${lt})(${e})`]))
      );
      m.onmessage = (I) => {
        I.data && (c(I.data), r && r(), m.terminate());
      }, m.onerror = (I) => {
        console.error(I.message), m.terminate();
      }, m.postMessage(w);
    }
  };
}
const vt = (e, t = 250) => {
  const r = N();
  return nt(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...n) => {
      const c = () => {
        clearTimeout(r.current), e(...n);
      };
      clearTimeout(r.current), r.current = setTimeout(c, t);
    },
    [e, t]
  );
};
function dt(e) {
  const t = N(e);
  return qe(() => {
    t.current = e;
  }, [e]), t;
}
const ft = ({
  color: e = "#000000",
  stroke: t = 2,
  className: r
}) => /* @__PURE__ */ a(
  "svg",
  {
    viewBox: "0 0 23 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    children: /* @__PURE__ */ a(
      "path",
      {
        d: "M1.1 16.72c0 3 .96 5.8 3.61 7.95a9.96 9.96 0 0 0 6.5 2.17m0 0v4.34h4.34-8.67m4.34-4.34c2.35 0 4.42-.48 6.5-2.17a9.87 9.87 0 0 0 3.61-7.95M11.22 1.82c-1.45 0-2.5.37-3.3.93a5.6 5.6 0 0 0-1.84 2.4c-.9 2.06-1.1 4.77-1.1 7.24 0 2.46.2 5.17 1.1 7.24a5.6 5.6 0 0 0 1.84 2.4c.8.55 1.85.92 3.3.92 1.44 0 2.5-.37 3.29-.93a5.6 5.6 0 0 0 1.84-2.4c.9-2.06 1.1-4.77 1.1-7.23 0-2.47-.2-5.18-1.1-7.24a5.6 5.6 0 0 0-1.84-2.4 5.52 5.52 0 0 0-3.3-.93Z",
        stroke: e,
        strokeWidth: t,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Je = ({
  color: e = "#FFFFFF",
  reflect: t
}) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.92 17.54 48.27 14.92",
    className: `voice-visualizer__canvas-audio-wave-icon ${t ? "voice-visualizer__canvas-audio-wave-icon2" : ""}`,
    children: /* @__PURE__ */ a(
      "path",
      {
        d: "M.92 24.63h.21v.75H.92zm.42-1.39h.21v3.52h-.21zm.43.68h.21v2.17h-.21zM2.2 22h.21v6.01H2.2zm.43-1.27h.21v8.55h-.21zm.43 2.07h.21v4.4h-.21zm.43 1.22h.21v1.97h-.21zm.43.47h.21v1.03h-.21zm.43-1.66h.21v4.35h-.21zm.43-1.74h.21v7.82h-.21zm.43 1.94h.21v3.94h-.21zm.43 1.07h.21v1.81h-.21zm.42-.94h.21v3.68h-.21zm.43.91h.21v1.86h-.21zm.43-.23h.21v2.33h-.21zm.43.46h.21v1.4h-.21zm.43-.7h.21v2.8h-.21zm.43-1.6h.21v6.01h-.21zm.43-2.23h.21v10.46h-.21zm.43-1.4h.21v13.26h-.21zm.43.62h.21v12.02H9.5zm.43 1.64h.21v8.75h-.21zm.43 1.37h.21v6.01h-.21zm.43-1.87H11v9.74h-.21zm.42 1.32h.21v7.1h-.21zm.43-2.64h.21v12.38h-.21zm.43 1.61h.21v9.17h-.21zM12.5 22h.21v6.01h-.21zm.43 1.32h.21v3.37h-.21zm.43-2.51h.21v8.39h-.21zm.43.59H14v7.2h-.21zm.43 1.79h.21v3.62h-.21zm.43.41h.21v2.8h-.21zm.43.57h.21v1.66h-.21zm.43-1.11h.21v3.88h-.21zm.42-2.98h.21v9.84h-.21zm.43 1.06h.21v7.72h-.21zm.43 3.19H17v1.35h-.21zm.86-2.33h.21v6.01h-.21zm-.43 1.4h.21v3.21h-.21zm1.29.15h.21v2.9h-.21zm.43.68h.21v1.55h-.21zm-.86-.76h.21v3.05h-.21zm1.29-.05h.21v3.16h-.21zm.43-.64h.21v4.45h-.21zm.43.38h.21v3.68h-.21zm.42-.49h.21v4.66h-.21zm.43 1.32h.21v2.02h-.21zm.43.37h.21v1.29h-.21zm.43.31h.21v.67h-.21zm.43-.39h.21v1.45h-.21zm.43-1.35h.21v4.14h-.21zm.86.73h.21v2.69h-.21zm-.43.44h.21v1.81h-.21zm1.29-3.45h.21v8.7h-.21zm.43 1.71h.21v5.28h-.21zm-.86-2.3h.21v9.89h-.21zm1.29 3.36h.21v3.16h-.21zM25.8 22h.21v6.01h-.21zm.43 1.42h.21v3.16h-.21zm.43.88h.21v1.4h-.21zm.43-.93h.21v3.26h-.21zm.43-1.37h.21v6.01h-.21zm.43-.93h.21v7.87h-.21zm.43-.76h.21v9.38h-.21zm.43 1.69h.21v6.01h-.21zm.86 1.92h.21v2.17h-.21zm-.43-.6h.21v3.37h-.21zm1.28.05h.21v3.26h-.21zm.43.67h.21v1.91h-.21zm-.85-.51h.21v2.95h-.21zm1.28-.13h.21v3.21h-.21zm.43-1.4h.21v6.01h-.21zm.43-.99h.21v7.98h-.21zm.43 1.77h.21v4.45h-.21zm.43-1.22h.21v6.89h-.21zm.43 1.6h.21v3.68h-.21zm.43-.28h.21v4.25h-.21zm.43-.6h.21v5.44h-.21zm.43-.28h.21v6.01h-.21zm.85 2.02h.21v1.97h-.21zm-.43-.57h.21v3.11h-.21zm1.29.93h.21v1.24h-.21zm.43-.65h.21v2.54h-.21zm-.86-.28h.21v3.11h-.21zm1.29.83h.21v1.45h-.21zm.43-.99h.21v3.42h-.21zm.43-.1h.21v3.62h-.21zm.43-.7h.21v5.02h-.21zm.43.8h.21v3.42h-.21zm.43-1.29h.21v6.01h-.21zm.42-1.71h.21v9.43h-.21zm.43 2.38h.21v4.66h-.21zm.43.65h.21v3.37h-.21zm.86.08h.21v3.21h-.21zm-.43.54h.21v2.12h-.21zm1.29-.05h.21v2.23h-.21zm.43.28h.21v1.66h-.21zm-.86.16h.21v1.35h-.21zm1.29.21h.21v.93h-.21zm.43-6.04h.21v13h-.21zm.43.8h.21v11.4h-.21zm.43-1.76h.21v14.92h-.21zm.42 1.09h.21v12.74h-.21zm.43 1.17h.21v10.41h-.21zm.43 1.32h.21v7.77h-.21zm.43 1.6h.21v4.56h-.21zm.43 1.17h.21v2.23h-.21zm.86-.08h.21v2.38h-.21zm-.43-.34h.21v3.05h-.21zm1.29-.1h.21v3.26h-.21zm.43.93h.21v1.4h-.21zm-.86-.02h.21v1.45h-.21z",
        fill: e
      }
    )
  }
), Qe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEuMSAxNi43MmMwIDMgLjk2IDUuOCAzLjYxIDcuOTVhOS45NiA5Ljk2IDAgMCAwIDYuNSAyLjE3bTAgMHY0LjM0aDQuMzQtOC42N200LjM0LTQuMzRjMi4zNSAwIDQuNDItLjQ4IDYuNS0yLjE3YTkuODcgOS44NyAwIDAgMCAzLjYxLTcuOTVNMTEuMjIgMS44MmMtMS40NSAwLTIuNS4zNy0zLjMuOTNhNS42IDUuNiAwIDAgMC0xLjg0IDIuNGMtLjkgMi4wNi0xLjEgNC43Ny0xLjEgNy4yNCAwIDIuNDYuMiA1LjE3IDEuMSA3LjI0YTUuNiA1LjYgMCAwIDAgMS44NCAyLjRjLjguNTUgMS44NS45MiAzLjMuOTIgMS40NCAwIDIuNS0uMzcgMy4yOS0uOTNhNS42IDUuNiAwIDAgMCAxLjg0LTIuNGMuOS0yLjA2IDEuMS00Ljc3IDEuMS03LjIzIDAtMi40Ny0uMi01LjE4LTEuMS03LjI0YTUuNiA1LjYgMCAwIDAtMS44NC0yLjQgNS41MiA1LjUyIDAgMCAwLTMuMy0uOTNaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", zt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE4Ljc1IDYuMTZjNC4zMSAyLjYgNi40NiAzLjkgNi40NiA1Ljg0IDAgMS45NS0yLjE1IDMuMjQtNi40NiA1Ljg0bC00Ljg0IDIuOTJjLTQuMzEgMi42LTYuNDYgMy44OS04LjA4IDIuOTItMS42Mi0uOTgtMS42Mi0zLjU3LTEuNjItOC43NlY5LjA4YzAtNS4xOSAwLTcuNzggMS42Mi04Ljc2IDEuNjItLjk3IDMuNzcuMzMgOC4wOCAyLjkybDQuODQgMi45MloiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", Ve = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE0IDMuNWEzLjUgMy41IDAgMSAxIDcgMHYyMmEzLjUgMy41IDAgMSAxLTcgMHYtMjJaIiBmaWxsPSIjZmZmIi8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjkiIHJ4PSIzLjUiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", gt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iLjIxIiB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHJ4PSI1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", It = ({
  controls: {
    audioRef: e,
    audioData: t,
    isRecordingInProgress: r,
    recordedBlob: n,
    duration: c,
    currentAudioTime: u,
    audioSrc: w,
    bufferFromRecordedBlob: m,
    togglePauseResume: I,
    startRecording: f,
    stopRecording: L,
    saveAudioFile: y,
    isAvailableRecordedAudio: z,
    isPausedRecordedAudio: A,
    isPausedRecording: v,
    isProcessingStartRecording: M,
    isProcessingRecordedAudio: d,
    isCleared: o,
    formattedDuration: Z,
    formattedRecordingTime: U,
    formattedRecordedAudioCurrentTime: te,
    clearCanvas: _,
    setCurrentAudioTime: re,
    isProcessingOnResize: j,
    _setIsProcessingOnResize: B,
    _setIsProcessingAudioOnComplete: ne
  },
  width: de = "100%",
  height: W = 200,
  speed: fe = 3,
  backgroundColor: E = "transparent",
  mainBarColor: x = "#FFFFFF",
  secondaryBarColor: k = "#5e5e5e",
  barWidth: F = 2,
  gap: ze = 1,
  rounded: ie = 5,
  isControlPanelShown: ce = !0,
  isDownloadAudioButtonShown: se = !1,
  animateCurrentPick: J = !0,
  fullscreen: Q = !1,
  onlyRecording: Y = !1,
  isDefaultUIShown: ge = !0,
  defaultMicrophoneIconColor: Se = x,
  defaultAudioWaveIconColor: Ne = x,
  mainContainerClassName: Ae,
  canvasContainerClassName: Me,
  isProgressIndicatorShown: oe = !Y,
  progressIndicatorClassName: ye,
  isProgressIndicatorTimeShown: ae = !0,
  progressIndicatorTimeClassName: He,
  isProgressIndicatorOnHoverShown: je = !Y,
  progressIndicatorOnHoverClassName: g,
  isProgressIndicatorTimeOnHoverShown: Te = !0,
  progressIndicatorTimeOnHoverClassName: C,
  isAudioProcessingTextShown: V = !0,
  audioProcessingTextClassName: ue,
  controlButtonsClassName: G
}) => {
  const [T, $] = l(0), [s, De] = l(0), [pe, Ce] = l(0), [Ie, Oe] = l(0), [q, we] = l(!1), [_e, be] = l(window.innerWidth), [he, Ee] = l(!1), le = _e < 768, X = Math.trunc(fe), me = Math.trunc(ze), H = Math.trunc(
    le && me > 0 ? F + 1 : F
  ), K = H + me * H, p = N(null), xe = N([]), P = N(X), Ze = N(H), i = N(H), h = N(null), b = dt(_e), {
    result: S,
    setResult: ve,
    run: Ke
  } = mt({
    fn: at,
    initialValue: [],
    onMessageReceived: tt
  }), et = vt(Ue);
  O(() => {
    Ue();
    const D = () => {
      b.current !== window.innerWidth && (z ? (be(window.innerWidth), B(!0), Ee(!0), et()) : (be(window.innerWidth), Ue()));
    };
    return window.addEventListener("resize", D), () => {
      window.removeEventListener("resize", D);
    };
  }, [de, z]), qe(() => {
    p.current && ((P.current >= X || !t.length) && (P.current = t.length ? 0 : X, st({
      audioData: t,
      unit: K,
      index: Ze,
      index2: i,
      canvas: p.current,
      picks: xe.current,
      isRecordingInProgress: r,
      isPausedRecording: v,
      backgroundColor: E,
      mainBarColor: x,
      secondaryBarColor: k,
      barWidth: H,
      rounded: ie,
      animateCurrentPick: J,
      fullscreen: Q
    })), P.current += 1);
  }, [
    p.current,
    t,
    H,
    E,
    x,
    k,
    ie,
    Q,
    ge,
    Ie
  ]), O(() => {
    var D, R;
    if (z)
      return q ? (D = p.current) == null || D.addEventListener("mouseleave", Ge) : (R = p.current) == null || R.addEventListener("mouseenter", Ye), () => {
        var Le, Be;
        q ? (Le = p.current) == null || Le.removeEventListener("mouseleave", Ge) : (Be = p.current) == null || Be.removeEventListener("mouseenter", Ye);
      };
  }, [q, z]), O(() => {
    var R;
    if (!m || !p.current || r || he)
      return;
    if (Y) {
      _();
      return;
    }
    xe.current = [];
    const D = m.getChannelData(0);
    return Ke({
      bufferData: D,
      height: pe,
      width: Ie,
      barWidth: H,
      gap: me
    }), (R = p.current) == null || R.addEventListener("mousemove", Pe), () => {
      var Le;
      (Le = p.current) == null || Le.removeEventListener(
        "mousemove",
        Pe
      );
    };
  }, [
    m,
    s,
    pe,
    ze,
    F,
    he
  ]), O(() => {
    if (!(Y || !(S != null && S.length) || !p.current || d)) {
      if (o) {
        ve([]);
        return;
      }
      it({
        barsData: S,
        canvas: p.current,
        barWidth: H,
        gap: me,
        backgroundColor: E,
        mainBarColor: x,
        secondaryBarColor: k,
        currentAudioTime: u,
        rounded: ie,
        duration: c
      });
    }
  }, [
    S,
    u,
    o,
    ie,
    E,
    x,
    k
  ]), O(() => {
    d && p.current && Fe({
      canvas: p.current,
      backgroundColor: E
    });
  }, [d]);
  function Ue() {
    if (!h.current || !p.current)
      return;
    P.current = X;
    const D = Math.trunc(
      h.current.clientHeight * window.devicePixelRatio / 2
    ) * 2;
    De(h.current.clientWidth), Ce(D), Oe(
      Math.round(
        h.current.clientWidth * window.devicePixelRatio
      )
    ), Ee(!1);
  }
  function tt() {
    B(!1), ne(!1), e != null && e.current && !j && (e.current.src = w);
  }
  const Ye = () => {
    we(!0);
  }, Ge = () => {
    we(!1);
  }, Pe = (D) => {
    $(D.offsetX);
  }, rt = (D) => {
    if (e != null && e.current && p.current) {
      const R = c / s * (D.clientX - p.current.getBoundingClientRect().left);
      e.current.currentTime = R, re(R);
    }
  }, Re = u / c * s;
  return /* @__PURE__ */ ee("div", { className: `voice-visualizer ${Ae ?? ""}`, children: [
    /* @__PURE__ */ ee(
      "div",
      {
        className: `voice-visualizer__canvas-container ${Me ?? ""}`,
        ref: h,
        style: { width: ke(de) },
        children: [
          /* @__PURE__ */ a(
            "canvas",
            {
              ref: p,
              width: Ie,
              height: pe,
              onClick: rt,
              style: {
                height: ke(W),
                width: s
              },
              children: "Your browser does not support HTML5 Canvas."
            }
          ),
          ge && o && /* @__PURE__ */ ee(We, { children: [
            /* @__PURE__ */ a(Je, { color: Ne }),
            /* @__PURE__ */ a(Je, { color: Ne, reflect: !0 }),
            /* @__PURE__ */ a(
              "button",
              {
                onClick: f,
                className: "voice-visualizer__canvas-microphone-btn",
                children: /* @__PURE__ */ a(
                  ft,
                  {
                    color: Se,
                    stroke: 0.5,
                    className: "voice-visualizer__canvas-microphone-icon"
                  }
                )
              }
            )
          ] }),
          V && d && /* @__PURE__ */ a(
            "p",
            {
              className: `voice-visualizer__canvas-audio-processing ${ue ?? ""}`,
              style: { color: x },
              children: "Processing Audio..."
            }
          ),
          q && z && !d && !le && je && /* @__PURE__ */ a(
            "div",
            {
              className: `voice-visualizer__progress-indicator-hovered ${g ?? ""}`,
              style: {
                left: T
              },
              children: Te && /* @__PURE__ */ a(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-hovered-time 
                    ${s - T < 70 ? "voice-visualizer__progress-indicator-hovered-time-left" : ""} 
                    ${C ?? ""}`,
                  children: Xe(
                    c / s * T
                  )
                }
              )
            }
          ),
          oe && z && !d && c ? /* @__PURE__ */ a(
            "div",
            {
              className: `voice-visualizer__progress-indicator ${ye ?? ""}`,
              style: {
                left: Re < s - 1 ? Re : s - 1
              },
              children: ae && /* @__PURE__ */ a(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-time ${s - u * s / c < 70 ? "voice-visualizer__progress-indicator-time-left" : ""} ${He ?? ""}`,
                  children: te
                }
              )
            }
          ) : null
        ]
      }
    ),
    ce && /* @__PURE__ */ ee(We, { children: [
      /* @__PURE__ */ ee("div", { className: "voice-visualizer__audio-info-container", children: [
        r && /* @__PURE__ */ a("p", { className: "voice-visualizer__audio-info-time", children: U }),
        c && !d ? /* @__PURE__ */ a("p", { children: Z }) : null
      ] }),
      /* @__PURE__ */ ee("div", { className: "voice-visualizer__buttons-container", children: [
        r && /* @__PURE__ */ a("div", { className: "voice-visualizer__btn-container", children: /* @__PURE__ */ a(
          "button",
          {
            className: `voice-visualizer__btn-left ${v ? "voice-visualizer__btn-left-microphone" : ""}`,
            onClick: I,
            children: /* @__PURE__ */ a(
              "img",
              {
                src: v ? Qe : Ve,
                alt: v ? "Play" : "Pause"
              }
            )
          }
        ) }),
        !o && /* @__PURE__ */ a(
          "button",
          {
            className: `voice-visualizer__btn-left ${r || M ? "voice-visualizer__visually-hidden" : ""}`,
            onClick: I,
            disabled: d,
            children: /* @__PURE__ */ a(
              "img",
              {
                src: A ? zt : Ve,
                alt: A ? "Play" : "Pause"
              }
            )
          }
        ),
        o && /* @__PURE__ */ ee(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__relative ${M ? "voice-visualizer__btn-center--border-transparent" : ""}`,
            onClick: f,
            disabled: M,
            children: [
              M && /* @__PURE__ */ a("div", { className: "voice-visualizer__spinner-wrapper", children: /* @__PURE__ */ a("div", { className: "voice-visualizer__spinner" }) }),
              /* @__PURE__ */ a("img", { src: Qe, alt: "Microphone" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__btn-center-pause ${r ? "" : "voice-visualizer__visually-hidden"}`,
            onClick: L,
            children: /* @__PURE__ */ a("img", { src: gt, alt: "Stop" })
          }
        ),
        !o && /* @__PURE__ */ a(
          "button",
          {
            onClick: _,
            className: `voice-visualizer__btn ${G ?? ""}`,
            disabled: d,
            children: "Clear"
          }
        ),
        se && n && /* @__PURE__ */ a(
          "button",
          {
            onClick: y,
            className: `voice-visualizer__btn ${G ?? ""}`,
            disabled: d,
            children: "Download Audio"
          }
        )
      ] })
    ] })
  ] });
};
function wt({
  inputDeviceId: e,
  streamConfig: t,
  onStartRecording: r,
  onStopRecording: n,
  onPausedRecording: c,
  onResumedRecording: u,
  onClearCanvas: w,
  onEndAudioPlayback: m,
  onStartAudioPlayback: I,
  onPausedAudioPlayback: f,
  onResumedAudioPlayback: L,
  onErrorPlayingAudio: y
} = {}) {
  const [z, A] = l(!1), [v, M] = l(!1), [d, o] = l(null), [Z, U] = l(new Uint8Array(0)), [te, _] = l(!1), [re, j] = l(null), [B, ne] = l(null), [de, W] = l(0), [fe, E] = l(0), [x, k] = l(0), [F, ze] = l(""), [ie, ce] = l(!0), [se, J] = l(0), [Q, Y] = l(!0), [ge, Se] = l(!1), [Ne, Ae] = l(!1), [Me, oe] = l(null), [ye, ae] = l(!1), [He, je] = l(0), g = N(null), Te = N(""), C = N(null), V = N(null), ue = N(null), G = N(null), T = N(null), $ = N(null), s = N(null), De = !!(B && !te), pe = ht(x), Ce = ot(de), Ie = Xe(se), Oe = ge || te;
  O(() => {
    if (!z || v)
      return;
    const h = setInterval(() => {
      const b = performance.now();
      W((S) => S + (b - fe)), E(b);
    }, 1e3);
    return () => clearInterval(h);
  }, [fe, v, z]), O(() => {
    if (Me) {
      K();
      return;
    }
  }, [Me]), O(() => () => {
    K();
  }, []), O(() => (Q || window.addEventListener("beforeunload", q), () => {
    window.removeEventListener("beforeunload", q);
  }), [Q]);
  const q = (i) => {
    i.preventDefault(), i.returnValue = "";
  }, we = async (i) => {
    if (i)
      try {
        if (i.size === 0)
          throw new Error("Error: The audio blob is empty");
        const h = URL.createObjectURL(i);
        ze(h);
        const b = await i.arrayBuffer(), ve = await new AudioContext().decodeAudioData(b);
        ne(ve), k(ve.duration - 0.06), oe(null);
      } catch (h) {
        console.error("Error processing the audio blob:", h), oe(
          h instanceof Error ? h : new Error("Error processing the audio blob")
        );
      }
  }, _e = (i) => {
    i instanceof Blob && (K(), Ae(!0), Y(!1), _(!0), A(!1), W(0), M(!1), s.current = new Audio(), j(i), we(i));
  }, be = () => {
    ae(!0), Te.current = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, je(0), navigator.mediaDevices.getUserMedia({
      audio: e ? { deviceId: e } : !0
    }).then((i) => {
      Y(!1), ae(!1), A(!0), E(performance.now()), o(i), C.current = new window.AudioContext(), V.current = C.current.createAnalyser(), ue.current = new Uint8Array(
        V.current.frequencyBinCount
      ), G.current = C.current.createMediaStreamSource(i), G.current.connect(V.current), g.current = new MediaRecorder(i), g.current.addEventListener(
        "dataavailable",
        le
      ), t != null && t.enabled && t.timeslice ? g.current.start(t.timeslice) : g.current.start(), r && r(), he();
    }).catch((i) => {
      ae(!1), oe(
        i instanceof Error ? i : new Error("Error starting audio recording")
      );
    });
  }, he = () => {
    V.current.getByteTimeDomainData(ue.current), U(new Uint8Array(ue.current)), T.current = requestAnimationFrame(he);
  }, Ee = (i, h = !1) => {
    var b;
    if (!(!t || !t.enabled || !t.onChunkAvailable) && i.size > 0) {
      const S = {
        recordingId: Te.current,
        chunkSequence: He,
        mimeType: ((b = g.current) == null ? void 0 : b.mimeType) || "audio/webm",
        isLastChunk: h
      };
      t.onChunkAvailable(i, S), je((ve) => ve + 1);
    }
  }, le = (i) => {
    if (t != null && t.enabled && i.data.size > 0) {
      const h = !g.current || g.current.state === "inactive";
      Ee(i.data, h);
    }
    g.current || (s.current = new Audio(), j(i.data), we(i.data));
  }, X = () => {
    s.current && (J(s.current.currentTime), $.current = requestAnimationFrame(X));
  }, me = () => {
    z || ye || (Q || K(), be());
  }, H = () => {
    z && (A(!1), g.current && (g.current.stop(), g.current.removeEventListener(
      "dataavailable",
      le
    )), d == null || d.getTracks().forEach((i) => i.stop()), T.current && cancelAnimationFrame(T.current), G.current && G.current.disconnect(), C.current && C.current.state !== "closed" && C.current.close(), _(!0), W(0), M(!1), n && n());
  }, K = () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), $.current && (cancelAnimationFrame($.current), $.current = null), g.current && (g.current.removeEventListener(
      "dataavailable",
      le
    ), g.current.stop(), g.current = null), d == null || d.getTracks().forEach((i) => i.stop()), s != null && s.current && (s.current.removeEventListener("ended", P), s.current.pause(), s.current.src = "", s.current = null), C.current = null, V.current = null, ue.current = null, G.current = null, o(null), ae(!1), A(!1), Ae(!1), _(!1), j(null), ne(null), W(0), E(0), k(0), ze(""), J(0), ce(!0), M(!1), Se(!1), U(new Uint8Array(0)), oe(null), Y(!0), w && w();
  }, p = () => {
    if (s.current && s.current.paused) {
      const i = s.current.play();
      i !== void 0 && i.catch((h) => {
        console.error(h), y && y(
          h instanceof Error ? h : new Error("Error playing audio")
        );
      });
    }
  }, xe = () => {
    var i, h, b;
    if (z) {
      M((S) => !S), ((i = g.current) == null ? void 0 : i.state) === "recording" ? ((h = g.current) == null || h.pause(), W((S) => S + (performance.now() - fe)), T.current && cancelAnimationFrame(T.current), c && c()) : (T.current = requestAnimationFrame(he), (b = g.current) == null || b.resume(), E(performance.now()), u && u());
      return;
    }
    if (s.current && De)
      if (s.current.paused)
        requestAnimationFrame(X), p(), s.current.addEventListener("ended", P), ce(!1), I && se === 0 && I(), L && se !== 0 && L();
      else {
        $.current && cancelAnimationFrame($.current), s.current.removeEventListener("ended", P), s.current.pause(), ce(!0);
        const S = s.current.currentTime;
        J(S), s.current.currentTime = S, f && f();
      }
  }, P = () => {
    $.current && cancelAnimationFrame($.current), ce(!0), s != null && s.current && (s.current.currentTime = 0, J(0), m && m());
  }, Ze = () => {
    var h;
    if (!F)
      return;
    const i = document.createElement("a");
    i.href = F, i.download = `recorded_audio${ut(
      (h = g.current) == null ? void 0 : h.mimeType
    )}`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(F);
  };
  return {
    audioRef: s,
    isRecordingInProgress: z,
    isPausedRecording: v,
    audioData: Z,
    recordingTime: de,
    isProcessingRecordedAudio: Oe,
    recordedBlob: re,
    mediaRecorder: g.current,
    duration: x,
    currentAudioTime: se,
    audioSrc: F,
    isPausedRecordedAudio: ie,
    bufferFromRecordedBlob: B,
    isCleared: Q,
    isAvailableRecordedAudio: De,
    formattedDuration: pe,
    formattedRecordingTime: Ce,
    formattedRecordedAudioCurrentTime: Ie,
    startRecording: me,
    togglePauseResume: xe,
    stopRecording: H,
    saveAudioFile: Ze,
    clearCanvas: K,
    setCurrentAudioTime: J,
    error: Me,
    isProcessingOnResize: ge,
    isProcessingStartRecording: ye,
    isPreloadedBlob: Ne,
    setPreloadedAudioBlob: _e,
    _setIsProcessingAudioOnComplete: _,
    _setIsProcessingOnResize: Se
  };
}
export {
  It as VoiceVisualizer,
  wt as useVoiceVisualizer
};
