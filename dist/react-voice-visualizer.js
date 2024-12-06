(function(){"use strict";(e=>{try{if(typeof window>"u")return;var i=document.createElement("style");i.appendChild(document.createTextNode(e)),document.head.appendChild(i)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".voice-visualizer__buttons-container{display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:15px;flex-wrap:wrap;margin-bottom:40px}.voice-visualizer__btn-center{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#fff;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s}.voice-visualizer__btn-center:disabled{opacity:.85;cursor:default}.voice-visualizer__btn-center:hover{background-color:#eaeaea;border:4px solid #9f9f9f}.voice-visualizer__btn-center>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause{background-color:#ff3030}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause:hover{background-color:#ff4f4f}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause>img{height:50%;max-height:16px}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent{border-color:transparent}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent:hover{background-color:#fff}.voice-visualizer__btn-left{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#ff3030;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s,opacity .3s}.voice-visualizer__btn-container{min-width:100px;display:flex;justify-content:flex-end}.voice-visualizer__btn-left:hover{background-color:#ff4f4f}.voice-visualizer__btn-left:disabled{opacity:.6;background-color:#ff3030;cursor:default}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone{background-color:#fff}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-left>img{width:auto;height:50%;max-height:16px}.voice-visualizer__btn-left:hover{border:4px solid #9f9f9f}.voice-visualizer__btn{box-sizing:border-box;min-width:100px;min-height:60px;padding:5px 20px;border-radius:40px;font-size:15px;background-color:#f0f0f0;transition:background-color .3s,opacity .3s}.voice-visualizer__btn:disabled{opacity:.8;background-color:#f0f0f0;cursor:default}.voice-visualizer__btn:hover{background-color:#bebebe}.voice-visualizer__canvas-container{position:relative;width:fit-content;margin:0 auto;overflow:hidden}.voice-visualizer__canvas-container canvas{display:block}.voice-visualizer__canvas-microphone-btn{position:absolute;top:50%;left:50%;width:auto;max-width:12%;min-width:24px;height:50%;max-height:100px;background-color:transparent;border:none;outline:none;transform:translate(-50%,-50%)}.voice-visualizer__canvas-microphone-icon{width:100%;height:100%;will-change:transform;transition:transform .3s}.voice-visualizer__canvas-microphone-btn:hover .voice-visualizer__canvas-microphone-icon{transform:scale(1.03)}.voice-visualizer__canvas-audio-wave-icon{position:absolute;top:50%;left:50%;width:auto;max-width:40%;height:40%;max-height:100px;transform:translate(-118%,-50%) scale(-1)}.voice-visualizer__canvas-audio-wave-icon2{transform:translate(18%,-50%)}.voice-visualizer__canvas-audio-processing{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.voice-visualizer__progress-indicator-hovered{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#85858599}.voice-visualizer__progress-indicator-hovered-time{position:absolute;top:3%;left:1px;width:fit-content;margin:0;padding:0 7px;opacity:.8;font-size:12px;border-radius:0 4px 4px 0;background-color:#575757;text-align:left}.voice-visualizer__progress-indicator-hovered-time.voice-visualizer__progress-indicator-hovered-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__progress-indicator{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#efefef}.voice-visualizer__progress-indicator-time{position:absolute;top:3%;left:1px;width:fit-content;box-sizing:border-box;min-width:37px;margin:0;padding:0 7px;font-size:12px;border-radius:0 4px 4px 0;text-align:left;color:#000;font-weight:500;background-color:#efefef}.voice-visualizer__progress-indicator-time.voice-visualizer__progress-indicator-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__audio-info-container{box-sizing:border-box;height:55px;display:flex;align-items:center;justify-content:center;gap:30px}.voice-visualizer__audio-info-time{margin:15px 0;min-width:38px;text-align:left}.voice-visualizer__visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:4px solid #c5c5c5;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.voice-visualizer__relative{position:relative}.voice-visualizer__spinner-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;display:flex;justify-content:center;align-items:center}.voice-visualizer__spinner{flex-shrink:0;width:100%;height:100%;border:4px solid rgba(197,197,197,.5);border-radius:50%;border-top-color:#b7b7b7;animation:voice-visualizer__spin 1s ease-in-out infinite;-webkit-animation:voice-visualizer__spin 1s ease-in-out infinite}@keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}@-webkit-keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}")})();
import { jsx as u, jsxs as ee, Fragment as Pe } from "react/jsx-runtime";
import { useState as l, useRef as S, useCallback as nt, useLayoutEffect as Je, useEffect as U } from "react";
const Oe = ({
  canvas: e,
  backgroundColor: t
}) => {
  const r = e.height, n = e.width, c = Math.round(n / 2), h = e.getContext("2d");
  return h ? (h.clearRect(0, 0, n, r), t !== "transparent" && (h.fillStyle = t, h.fillRect(0, 0, n, r)), { context: h, height: r, width: n, halfWidth: c }) : null;
}, Ee = ({
  context: e,
  color: t,
  rounded: r,
  x: n,
  y: c,
  w: h,
  h: w
}) => {
  e.fillStyle = t, e.beginPath(), e.roundRect ? (e.roundRect(n, c, h, w, r), e.fill()) : e.fillRect(n, c, h, w);
}, it = ({
  barsData: e,
  canvas: t,
  barWidth: r,
  gap: n,
  backgroundColor: c,
  mainBarColor: h,
  secondaryBarColor: w,
  currentAudioTime: m = 0,
  rounded: g,
  duration: d
}) => {
  const L = Oe({ canvas: t, backgroundColor: c });
  if (!L)
    return;
  const { context: I, height: z } = L, N = m / d;
  e.forEach((v, f) => {
    const M = f / e.length, o = N > M;
    Ee({
      context: I,
      color: o ? w : h,
      rounded: g,
      x: f * (r + n * r),
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
  barWidth: h
}) {
  Ee({
    context: e,
    color: t,
    rounded: r,
    x: n / 2 + h / 2,
    y: c / 2 - 1,
    h: 2,
    w: n - (n / 2 + h / 2)
  });
}
const st = ({
  audioData: e,
  unit: t,
  index: r,
  index2: n,
  canvas: c,
  isRecordingInProgress: h,
  isPausedRecording: w,
  picks: m,
  backgroundColor: g,
  barWidth: d,
  mainBarColor: L,
  secondaryBarColor: I,
  rounded: z,
  animateCurrentPick: N,
  fullscreen: v
}) => {
  const f = Oe({ canvas: c, backgroundColor: g });
  if (!f)
    return;
  const { context: M, height: o, width: x, halfWidth: F } = f;
  if (e != null && e.length && h) {
    const H = Math.max(...e);
    if (!w) {
      if (n.current >= d) {
        n.current = 0;
        const y = (o - H / 258 * o) / o * 100, Q = (-o + H / 258 * o * 2) / o * 100, te = r.current === d ? {
          startY: y,
          barHeight: Q
        } : null;
        r.current >= t ? r.current = d : r.current += d, m.length > (v ? x : F) / d && m.pop(), m.unshift(te);
      }
      n.current += 1;
    }
    !v && Y(), N && Ee({
      context: M,
      rounded: z,
      color: L,
      x: v ? x : F,
      y: o - H / 258 * o,
      h: -o + H / 258 * o * 2,
      w: d
    });
    let G = (v ? x : F) - n.current;
    m.forEach((y) => {
      y && Ee({
        context: M,
        color: L,
        rounded: z,
        x: G,
        y: y.startY * o / 100 > o / 2 - 1 ? o / 2 - 1 : y.startY * o / 100,
        h: y.barHeight * o / 100 > 2 ? y.barHeight * o / 100 : 2,
        w: d
      }), G -= d;
    });
  } else
    m.length = 0;
  function Y() {
    ct({
      context: M,
      color: I,
      rounded: z,
      width: x,
      height: o,
      barWidth: d
    });
  }
}, Qe = (e) => {
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
function Re(e) {
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
  const h = r / (n + c * n), w = Math.floor(e.length / h), m = t / 2;
  let g = [], d = 0;
  for (let L = 0; L < h; L++) {
    const I = [];
    let z = 0;
    for (let v = 0; v < w && L * w + v < e.length; v++) {
      const f = e[L * w + v];
      f > 0 && (I.push(f), z++);
    }
    const N = I.reduce((v, f) => v + f, 0) / z;
    N > d && (d = N), g.push({ max: N });
  }
  if (m * 0.95 > d * m) {
    const L = m * 0.95 / d;
    g = g.map((I) => ({
      max: I.max > 0.01 ? I.max * L : 1
    }));
  }
  return g;
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
      m.onmessage = (g) => {
        g.data && (c(g.data), r && r(), m.terminate());
      }, m.onerror = (g) => {
        console.error(g.message), m.terminate();
      }, m.postMessage(w);
    }
  };
}
const vt = (e, t = 250) => {
  const r = S();
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
  const t = S(e);
  return Je(() => {
    t.current = e;
  }, [e]), t;
}
const ft = ({
  color: e = "#000000",
  stroke: t = 2,
  className: r
}) => /* @__PURE__ */ u(
  "svg",
  {
    viewBox: "0 0 23 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    children: /* @__PURE__ */ u(
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
), Be = ({
  color: e = "#FFFFFF",
  reflect: t
}) => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.92 17.54 48.27 14.92",
    className: `voice-visualizer__canvas-audio-wave-icon ${t ? "voice-visualizer__canvas-audio-wave-icon2" : ""}`,
    children: /* @__PURE__ */ u(
      "path",
      {
        d: "M.92 24.63h.21v.75H.92zm.42-1.39h.21v3.52h-.21zm.43.68h.21v2.17h-.21zM2.2 22h.21v6.01H2.2zm.43-1.27h.21v8.55h-.21zm.43 2.07h.21v4.4h-.21zm.43 1.22h.21v1.97h-.21zm.43.47h.21v1.03h-.21zm.43-1.66h.21v4.35h-.21zm.43-1.74h.21v7.82h-.21zm.43 1.94h.21v3.94h-.21zm.43 1.07h.21v1.81h-.21zm.42-.94h.21v3.68h-.21zm.43.91h.21v1.86h-.21zm.43-.23h.21v2.33h-.21zm.43.46h.21v1.4h-.21zm.43-.7h.21v2.8h-.21zm.43-1.6h.21v6.01h-.21zm.43-2.23h.21v10.46h-.21zm.43-1.4h.21v13.26h-.21zm.43.62h.21v12.02H9.5zm.43 1.64h.21v8.75h-.21zm.43 1.37h.21v6.01h-.21zm.43-1.87H11v9.74h-.21zm.42 1.32h.21v7.1h-.21zm.43-2.64h.21v12.38h-.21zm.43 1.61h.21v9.17h-.21zM12.5 22h.21v6.01h-.21zm.43 1.32h.21v3.37h-.21zm.43-2.51h.21v8.39h-.21zm.43.59H14v7.2h-.21zm.43 1.79h.21v3.62h-.21zm.43.41h.21v2.8h-.21zm.43.57h.21v1.66h-.21zm.43-1.11h.21v3.88h-.21zm.42-2.98h.21v9.84h-.21zm.43 1.06h.21v7.72h-.21zm.43 3.19H17v1.35h-.21zm.86-2.33h.21v6.01h-.21zm-.43 1.4h.21v3.21h-.21zm1.29.15h.21v2.9h-.21zm.43.68h.21v1.55h-.21zm-.86-.76h.21v3.05h-.21zm1.29-.05h.21v3.16h-.21zm.43-.64h.21v4.45h-.21zm.43.38h.21v3.68h-.21zm.42-.49h.21v4.66h-.21zm.43 1.32h.21v2.02h-.21zm.43.37h.21v1.29h-.21zm.43.31h.21v.67h-.21zm.43-.39h.21v1.45h-.21zm.43-1.35h.21v4.14h-.21zm.86.73h.21v2.69h-.21zm-.43.44h.21v1.81h-.21zm1.29-3.45h.21v8.7h-.21zm.43 1.71h.21v5.28h-.21zm-.86-2.3h.21v9.89h-.21zm1.29 3.36h.21v3.16h-.21zM25.8 22h.21v6.01h-.21zm.43 1.42h.21v3.16h-.21zm.43.88h.21v1.4h-.21zm.43-.93h.21v3.26h-.21zm.43-1.37h.21v6.01h-.21zm.43-.93h.21v7.87h-.21zm.43-.76h.21v9.38h-.21zm.43 1.69h.21v6.01h-.21zm.86 1.92h.21v2.17h-.21zm-.43-.6h.21v3.37h-.21zm1.28.05h.21v3.26h-.21zm.43.67h.21v1.91h-.21zm-.85-.51h.21v2.95h-.21zm1.28-.13h.21v3.21h-.21zm.43-1.4h.21v6.01h-.21zm.43-.99h.21v7.98h-.21zm.43 1.77h.21v4.45h-.21zm.43-1.22h.21v6.89h-.21zm.43 1.6h.21v3.68h-.21zm.43-.28h.21v4.25h-.21zm.43-.6h.21v5.44h-.21zm.43-.28h.21v6.01h-.21zm.85 2.02h.21v1.97h-.21zm-.43-.57h.21v3.11h-.21zm1.29.93h.21v1.24h-.21zm.43-.65h.21v2.54h-.21zm-.86-.28h.21v3.11h-.21zm1.29.83h.21v1.45h-.21zm.43-.99h.21v3.42h-.21zm.43-.1h.21v3.62h-.21zm.43-.7h.21v5.02h-.21zm.43.8h.21v3.42h-.21zm.43-1.29h.21v6.01h-.21zm.42-1.71h.21v9.43h-.21zm.43 2.38h.21v4.66h-.21zm.43.65h.21v3.37h-.21zm.86.08h.21v3.21h-.21zm-.43.54h.21v2.12h-.21zm1.29-.05h.21v2.23h-.21zm.43.28h.21v1.66h-.21zm-.86.16h.21v1.35h-.21zm1.29.21h.21v.93h-.21zm.43-6.04h.21v13h-.21zm.43.8h.21v11.4h-.21zm.43-1.76h.21v14.92h-.21zm.42 1.09h.21v12.74h-.21zm.43 1.17h.21v10.41h-.21zm.43 1.32h.21v7.77h-.21zm.43 1.6h.21v4.56h-.21zm.43 1.17h.21v2.23h-.21zm.86-.08h.21v2.38h-.21zm-.43-.34h.21v3.05h-.21zm1.29-.1h.21v3.26h-.21zm.43.93h.21v1.4h-.21zm-.86-.02h.21v1.45h-.21z",
        fill: e
      }
    )
  }
), We = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEuMSAxNi43MmMwIDMgLjk2IDUuOCAzLjYxIDcuOTVhOS45NiA5Ljk2IDAgMCAwIDYuNSAyLjE3bTAgMHY0LjM0aDQuMzQtOC42N200LjM0LTQuMzRjMi4zNSAwIDQuNDItLjQ4IDYuNS0yLjE3YTkuODcgOS44NyAwIDAgMCAzLjYxLTcuOTVNMTEuMjIgMS44MmMtMS40NSAwLTIuNS4zNy0zLjMuOTNhNS42IDUuNiAwIDAgMC0xLjg0IDIuNGMtLjkgMi4wNi0xLjEgNC43Ny0xLjEgNy4yNCAwIDIuNDYuMiA1LjE3IDEuMSA3LjI0YTUuNiA1LjYgMCAwIDAgMS44NCAyLjRjLjguNTUgMS44NS45MiAzLjMuOTIgMS40NCAwIDIuNS0uMzcgMy4yOS0uOTNhNS42IDUuNiAwIDAgMCAxLjg0LTIuNGMuOS0yLjA2IDEuMS00Ljc3IDEuMS03LjIzIDAtMi40Ny0uMi01LjE4LTEuMS03LjI0YTUuNiA1LjYgMCAwIDAtMS44NC0yLjQgNS41MiA1LjUyIDAgMCAwLTMuMy0uOTNaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", zt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE4Ljc1IDYuMTZjNC4zMSAyLjYgNi40NiAzLjkgNi40NiA1Ljg0IDAgMS45NS0yLjE1IDMuMjQtNi40NiA1Ljg0bC00Ljg0IDIuOTJjLTQuMzEgMi42LTYuNDYgMy44OS04LjA4IDIuOTItMS42Mi0uOTgtMS42Mi0zLjU3LTEuNjItOC43NlY5LjA4YzAtNS4xOSAwLTcuNzggMS42Mi04Ljc2IDEuNjItLjk3IDMuNzcuMzMgOC4wOCAyLjkybDQuODQgMi45MloiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", ke = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE0IDMuNWEzLjUgMy41IDAgMSAxIDcgMHYyMmEzLjUgMy41IDAgMSAxLTcgMHYtMjJaIiBmaWxsPSIjZmZmIi8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjkiIHJ4PSIzLjUiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", gt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iLjIxIiB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHJ4PSI1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", It = ({
  controls: {
    audioRef: e,
    audioData: t,
    isRecordingInProgress: r,
    recordedBlob: n,
    duration: c,
    currentAudioTime: h,
    audioSrc: w,
    bufferFromRecordedBlob: m,
    togglePauseResume: g,
    startRecording: d,
    stopRecording: L,
    saveAudioFile: I,
    isAvailableRecordedAudio: z,
    isPausedRecordedAudio: N,
    isPausedRecording: v,
    isProcessingStartRecording: f,
    isProcessingRecordedAudio: M,
    isCleared: o,
    formattedDuration: x,
    formattedRecordingTime: F,
    formattedRecordedAudioCurrentTime: Y,
    clearCanvas: H,
    setCurrentAudioTime: G,
    isProcessingOnResize: y,
    _setIsProcessingOnResize: Q,
    _setIsProcessingAudioOnComplete: te
  },
  width: P = "100%",
  height: ve = 200,
  speed: re = 3,
  backgroundColor: R = "transparent",
  mainBarColor: _ = "#FFFFFF",
  secondaryBarColor: $ = "#5e5e5e",
  barWidth: ne = 2,
  gap: Ne = 1,
  rounded: O = 5,
  isControlPanelShown: ie = !0,
  isDownloadAudioButtonShown: V = !1,
  animateCurrentPick: ce = !0,
  fullscreen: se = !1,
  onlyRecording: q = !1,
  isDefaultUIShown: de = !0,
  defaultMicrophoneIconColor: Ce = _,
  defaultAudioWaveIconColor: fe = _,
  mainContainerClassName: ze,
  canvasContainerClassName: oe,
  isProgressIndicatorShown: Ae = !q,
  progressIndicatorClassName: ae,
  isProgressIndicatorTimeShown: p = !0,
  progressIndicatorTimeClassName: Z,
  isProgressIndicatorOnHoverShown: X = !q,
  progressIndicatorOnHoverClassName: ue,
  isProgressIndicatorTimeOnHoverShown: K = !0,
  progressIndicatorTimeOnHoverClassName: T,
  isAudioProcessingTextShown: E = !0,
  audioProcessingTextClassName: a,
  controlButtonsClassName: ge
}) => {
  const [Me, be] = l(0), [D, xe] = l(0), [he, je] = l(0), [pe, He] = l(0), [B, le] = l(!1), [Ie, ye] = l(window.innerWidth), [De, W] = l(!1), Te = Ie < 768, me = Math.trunc(re), k = Math.trunc(Ne), C = Math.trunc(
    Te && k > 0 ? ne + 1 : ne
  ), i = C + k * C, s = S(null), b = S([]), A = S(me), _e = S(C), Ve = S(C), we = S(null), qe = dt(Ie), {
    result: Le,
    setResult: Xe,
    run: Ke
  } = mt({
    fn: at,
    initialValue: [],
    onMessageReceived: tt
  }), et = vt($e);
  U(() => {
    $e();
    const j = () => {
      qe.current !== window.innerWidth && (z ? (ye(window.innerWidth), Q(!0), W(!0), et()) : (ye(window.innerWidth), $e()));
    };
    return window.addEventListener("resize", j), () => {
      window.removeEventListener("resize", j);
    };
  }, [P, z]), Je(() => {
    s.current && ((A.current >= me || !t.length) && (A.current = t.length ? 0 : me, st({
      audioData: t,
      unit: i,
      index: _e,
      index2: Ve,
      canvas: s.current,
      picks: b.current,
      isRecordingInProgress: r,
      isPausedRecording: v,
      backgroundColor: R,
      mainBarColor: _,
      secondaryBarColor: $,
      barWidth: C,
      rounded: O,
      animateCurrentPick: ce,
      fullscreen: se
    })), A.current += 1);
  }, [
    s.current,
    t,
    C,
    R,
    _,
    $,
    O,
    se,
    de,
    pe
  ]), U(() => {
    var j, J;
    if (z)
      return B ? (j = s.current) == null || j.addEventListener("mouseleave", Ue) : (J = s.current) == null || J.addEventListener("mouseenter", Ze), () => {
        var Se, Ge;
        B ? (Se = s.current) == null || Se.removeEventListener("mouseleave", Ue) : (Ge = s.current) == null || Ge.removeEventListener("mouseenter", Ze);
      };
  }, [B, z]), U(() => {
    var J;
    if (!m || !s.current || r || De)
      return;
    if (q) {
      H();
      return;
    }
    b.current = [];
    const j = m.getChannelData(0);
    return Ke({
      bufferData: j,
      height: he,
      width: pe,
      barWidth: C,
      gap: k
    }), (J = s.current) == null || J.addEventListener("mousemove", Fe), () => {
      var Se;
      (Se = s.current) == null || Se.removeEventListener(
        "mousemove",
        Fe
      );
    };
  }, [
    m,
    D,
    he,
    Ne,
    ne,
    De
  ]), U(() => {
    if (!(q || !(Le != null && Le.length) || !s.current || M)) {
      if (o) {
        Xe([]);
        return;
      }
      it({
        barsData: Le,
        canvas: s.current,
        barWidth: C,
        gap: k,
        backgroundColor: R,
        mainBarColor: _,
        secondaryBarColor: $,
        currentAudioTime: h,
        rounded: O,
        duration: c
      });
    }
  }, [
    Le,
    h,
    o,
    O,
    R,
    _,
    $
  ]), U(() => {
    M && s.current && Oe({
      canvas: s.current,
      backgroundColor: R
    });
  }, [M]);
  function $e() {
    if (!we.current || !s.current)
      return;
    A.current = me;
    const j = Math.trunc(
      we.current.clientHeight * window.devicePixelRatio / 2
    ) * 2;
    xe(we.current.clientWidth), je(j), He(
      Math.round(
        we.current.clientWidth * window.devicePixelRatio
      )
    ), W(!1);
  }
  function tt() {
    Q(!1), te(!1), e != null && e.current && !y && (e.current.src = w);
  }
  const Ze = () => {
    le(!0);
  }, Ue = () => {
    le(!1);
  }, Fe = (j) => {
    be(j.offsetX);
  }, rt = (j) => {
    if (e != null && e.current && s.current) {
      const J = c / D * (j.clientX - s.current.getBoundingClientRect().left);
      e.current.currentTime = J, G(J);
    }
  }, Ye = h / c * D;
  return /* @__PURE__ */ ee("div", { className: `voice-visualizer ${ze ?? ""}`, children: [
    /* @__PURE__ */ ee(
      "div",
      {
        className: `voice-visualizer__canvas-container ${oe ?? ""}`,
        ref: we,
        style: { width: Re(P) },
        children: [
          /* @__PURE__ */ u(
            "canvas",
            {
              ref: s,
              width: pe,
              height: he,
              onClick: rt,
              style: {
                height: Re(ve),
                width: D
              },
              children: "Your browser does not support HTML5 Canvas."
            }
          ),
          de && o && /* @__PURE__ */ ee(Pe, { children: [
            /* @__PURE__ */ u(Be, { color: fe }),
            /* @__PURE__ */ u(Be, { color: fe, reflect: !0 }),
            /* @__PURE__ */ u(
              "button",
              {
                onClick: d,
                className: "voice-visualizer__canvas-microphone-btn",
                children: /* @__PURE__ */ u(
                  ft,
                  {
                    color: Ce,
                    stroke: 0.5,
                    className: "voice-visualizer__canvas-microphone-icon"
                  }
                )
              }
            )
          ] }),
          E && M && /* @__PURE__ */ u(
            "p",
            {
              className: `voice-visualizer__canvas-audio-processing ${a ?? ""}`,
              style: { color: _ },
              children: "Processing Audio..."
            }
          ),
          B && z && !M && !Te && X && /* @__PURE__ */ u(
            "div",
            {
              className: `voice-visualizer__progress-indicator-hovered ${ue ?? ""}`,
              style: {
                left: Me
              },
              children: K && /* @__PURE__ */ u(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-hovered-time 
                    ${D - Me < 70 ? "voice-visualizer__progress-indicator-hovered-time-left" : ""} 
                    ${T ?? ""}`,
                  children: Qe(
                    c / D * Me
                  )
                }
              )
            }
          ),
          Ae && z && !M && c ? /* @__PURE__ */ u(
            "div",
            {
              className: `voice-visualizer__progress-indicator ${ae ?? ""}`,
              style: {
                left: Ye < D - 1 ? Ye : D - 1
              },
              children: p && /* @__PURE__ */ u(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-time ${D - h * D / c < 70 ? "voice-visualizer__progress-indicator-time-left" : ""} ${Z ?? ""}`,
                  children: Y
                }
              )
            }
          ) : null
        ]
      }
    ),
    ie && /* @__PURE__ */ ee(Pe, { children: [
      /* @__PURE__ */ ee("div", { className: "voice-visualizer__audio-info-container", children: [
        r && /* @__PURE__ */ u("p", { className: "voice-visualizer__audio-info-time", children: F }),
        c && !M ? /* @__PURE__ */ u("p", { children: x }) : null
      ] }),
      /* @__PURE__ */ ee("div", { className: "voice-visualizer__buttons-container", children: [
        r && /* @__PURE__ */ u("div", { className: "voice-visualizer__btn-container", children: /* @__PURE__ */ u(
          "button",
          {
            className: `voice-visualizer__btn-left ${v ? "voice-visualizer__btn-left-microphone" : ""}`,
            onClick: g,
            children: /* @__PURE__ */ u(
              "img",
              {
                src: v ? We : ke,
                alt: v ? "Play" : "Pause"
              }
            )
          }
        ) }),
        !o && /* @__PURE__ */ u(
          "button",
          {
            className: `voice-visualizer__btn-left ${r || f ? "voice-visualizer__visually-hidden" : ""}`,
            onClick: g,
            disabled: M,
            children: /* @__PURE__ */ u(
              "img",
              {
                src: N ? zt : ke,
                alt: N ? "Play" : "Pause"
              }
            )
          }
        ),
        o && /* @__PURE__ */ ee(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__relative ${f ? "voice-visualizer__btn-center--border-transparent" : ""}`,
            onClick: d,
            disabled: f,
            children: [
              f && /* @__PURE__ */ u("div", { className: "voice-visualizer__spinner-wrapper", children: /* @__PURE__ */ u("div", { className: "voice-visualizer__spinner" }) }),
              /* @__PURE__ */ u("img", { src: We, alt: "Microphone" })
            ]
          }
        ),
        /* @__PURE__ */ u(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__btn-center-pause ${r ? "" : "voice-visualizer__visually-hidden"}`,
            onClick: L,
            children: /* @__PURE__ */ u("img", { src: gt, alt: "Stop" })
          }
        ),
        !o && /* @__PURE__ */ u(
          "button",
          {
            onClick: H,
            className: `voice-visualizer__btn ${ge ?? ""}`,
            disabled: M,
            children: "Clear"
          }
        ),
        V && n && /* @__PURE__ */ u(
          "button",
          {
            onClick: I,
            className: `voice-visualizer__btn ${ge ?? ""}`,
            disabled: M,
            children: "Download Audio"
          }
        )
      ] })
    ] })
  ] });
};
function wt({
  inputDeviceId: e,
  onStartRecording: t,
  onStopRecording: r,
  onPausedRecording: n,
  onResumedRecording: c,
  onClearCanvas: h,
  onEndAudioPlayback: w,
  onStartAudioPlayback: m,
  onPausedAudioPlayback: g,
  onResumedAudioPlayback: d,
  onErrorPlayingAudio: L
} = {}) {
  const [I, z] = l(!1), [N, v] = l(!1), [f, M] = l(null), [o, x] = l(new Uint8Array(0)), [F, Y] = l(!1), [H, G] = l(null), [y, Q] = l(null), [te, P] = l(0), [ve, re] = l(0), [R, _] = l(0), [$, ne] = l(""), [Ne, O] = l(!0), [ie, V] = l(0), [ce, se] = l(!0), [q, de] = l(!1), [Ce, fe] = l(!1), [ze, oe] = l(null), [Ae, ae] = l(!1), p = S(null), Z = S(null), X = S(null), ue = S(null), K = S(null), T = S(null), E = S(null), a = S(null), ge = !!(y && !F), Me = ht(R), be = ot(te), D = Qe(ie), xe = q || F;
  U(() => {
    if (!I || N)
      return;
    const s = setInterval(() => {
      const b = performance.now();
      P((A) => A + (b - ve)), re(b);
    }, 1e3);
    return () => clearInterval(s);
  }, [ve, N, I]), U(() => {
    if (ze) {
      W();
      return;
    }
  }, [ze]), U(() => () => {
    W();
  }, []), U(() => (ce || window.addEventListener("beforeunload", he), () => {
    window.removeEventListener("beforeunload", he);
  }), [ce]);
  const he = (i) => {
    i.preventDefault(), i.returnValue = "";
  }, je = async (i) => {
    if (i)
      try {
        if (i.size === 0)
          throw new Error("Error: The audio blob is empty");
        const s = URL.createObjectURL(i);
        ne(s);
        const b = await i.arrayBuffer(), _e = await new AudioContext().decodeAudioData(b);
        Q(_e), _(_e.duration - 0.06), oe(null);
      } catch (s) {
        console.error("Error processing the audio blob:", s), oe(
          s instanceof Error ? s : new Error("Error processing the audio blob")
        );
      }
  }, pe = (i) => {
    i instanceof Blob && (W(), fe(!0), se(!1), Y(!0), z(!1), P(0), v(!1), a.current = new Audio(), G(i), je(i));
  }, He = () => {
    ae(!0), navigator.mediaDevices.getUserMedia({
      audio: e ? { deviceId: e } : !0
    }).then((i) => {
      se(!1), ae(!1), z(!0), re(performance.now()), M(i), Z.current = new window.AudioContext(), X.current = Z.current.createAnalyser(), ue.current = new Uint8Array(
        X.current.frequencyBinCount
      ), K.current = Z.current.createMediaStreamSource(i), K.current.connect(X.current), p.current = new MediaRecorder(i), p.current.addEventListener(
        "dataavailable",
        le
      ), p.current.start(), t && t(), B();
    }).catch((i) => {
      ae(!1), oe(
        i instanceof Error ? i : new Error("Error starting audio recording")
      );
    });
  }, B = () => {
    X.current.getByteTimeDomainData(ue.current), x(new Uint8Array(ue.current)), T.current = requestAnimationFrame(B);
  }, le = (i) => {
    p.current && (p.current = null, a.current = new Audio(), G(i.data), je(i.data));
  }, Ie = () => {
    a.current && (V(a.current.currentTime), E.current = requestAnimationFrame(Ie));
  }, ye = () => {
    I || Ae || (ce || W(), He());
  }, De = () => {
    I && (z(!1), p.current && (p.current.stop(), p.current.removeEventListener(
      "dataavailable",
      le
    )), f == null || f.getTracks().forEach((i) => i.stop()), T.current && cancelAnimationFrame(T.current), K.current && K.current.disconnect(), Z.current && Z.current.state !== "closed" && Z.current.close(), Y(!0), P(0), v(!1), r && r());
  }, W = () => {
    T.current && (cancelAnimationFrame(T.current), T.current = null), E.current && (cancelAnimationFrame(E.current), E.current = null), p.current && (p.current.removeEventListener(
      "dataavailable",
      le
    ), p.current.stop(), p.current = null), f == null || f.getTracks().forEach((i) => i.stop()), a != null && a.current && (a.current.removeEventListener("ended", k), a.current.pause(), a.current.src = "", a.current = null), Z.current = null, X.current = null, ue.current = null, K.current = null, M(null), ae(!1), z(!1), fe(!1), Y(!1), G(null), Q(null), P(0), re(0), _(0), ne(""), V(0), O(!0), v(!1), de(!1), x(new Uint8Array(0)), oe(null), se(!0), h && h();
  }, Te = () => {
    if (a.current && a.current.paused) {
      const i = a.current.play();
      i !== void 0 && i.catch((s) => {
        console.error(s), L && L(
          s instanceof Error ? s : new Error("Error playing audio")
        );
      });
    }
  }, me = () => {
    var i, s, b;
    if (I) {
      v((A) => !A), ((i = p.current) == null ? void 0 : i.state) === "recording" ? ((s = p.current) == null || s.pause(), P((A) => A + (performance.now() - ve)), T.current && cancelAnimationFrame(T.current), n && n()) : (T.current = requestAnimationFrame(B), (b = p.current) == null || b.resume(), re(performance.now()), c && c());
      return;
    }
    if (a.current && ge)
      if (a.current.paused)
        requestAnimationFrame(Ie), Te(), a.current.addEventListener("ended", k), O(!1), m && ie === 0 && m(), d && ie !== 0 && d();
      else {
        E.current && cancelAnimationFrame(E.current), a.current.removeEventListener("ended", k), a.current.pause(), O(!0);
        const A = a.current.currentTime;
        V(A), a.current.currentTime = A, g && g();
      }
  }, k = () => {
    E.current && cancelAnimationFrame(E.current), O(!0), a != null && a.current && (a.current.currentTime = 0, V(0), w && w());
  }, C = () => {
    var s;
    if (!$)
      return;
    const i = document.createElement("a");
    i.href = $, i.download = `recorded_audio${ut(
      (s = p.current) == null ? void 0 : s.mimeType
    )}`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL($);
  };
  return {
    audioRef: a,
    isRecordingInProgress: I,
    isPausedRecording: N,
    audioData: o,
    recordingTime: te,
    isProcessingRecordedAudio: xe,
    recordedBlob: H,
    mediaRecorder: p.current,
    duration: R,
    currentAudioTime: ie,
    audioSrc: $,
    isPausedRecordedAudio: Ne,
    bufferFromRecordedBlob: y,
    isCleared: ce,
    isAvailableRecordedAudio: ge,
    formattedDuration: Me,
    formattedRecordingTime: be,
    formattedRecordedAudioCurrentTime: D,
    startRecording: ye,
    togglePauseResume: me,
    stopRecording: De,
    saveAudioFile: C,
    clearCanvas: W,
    setCurrentAudioTime: V,
    error: ze,
    isProcessingOnResize: q,
    isProcessingStartRecording: Ae,
    isPreloadedBlob: Ce,
    setPreloadedAudioBlob: pe,
    _setIsProcessingAudioOnComplete: Y,
    _setIsProcessingOnResize: de
  };
}
export {
  It as VoiceVisualizer,
  wt as useVoiceVisualizer
};
