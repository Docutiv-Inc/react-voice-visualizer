(function(){"use strict";(e=>{try{if(typeof window>"u")return;var i=document.createElement("style");i.appendChild(document.createTextNode(e)),document.head.appendChild(i)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})(".voice-visualizer__buttons-container{display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:15px;flex-wrap:wrap;margin-bottom:40px}.voice-visualizer__btn-center{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#fff;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s}.voice-visualizer__btn-center:disabled{opacity:.85;cursor:default}.voice-visualizer__btn-center:hover{background-color:#eaeaea;border:4px solid #9f9f9f}.voice-visualizer__btn-center>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause{background-color:#ff3030}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause:hover{background-color:#ff4f4f}.voice-visualizer__btn-center.voice-visualizer__btn-center-pause>img{height:50%;max-height:16px}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent{border-color:transparent}.voice-visualizer__btn-center.voice-visualizer__btn-center--border-transparent:hover{background-color:#fff}.voice-visualizer__btn-left{box-sizing:border-box;flex-shrink:0;width:60px;height:60px;padding:0;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#ff3030;border:4px solid #c5c5c5;outline:none;cursor:pointer;transition:border-color .3s,background-color .3s,opacity .3s}.voice-visualizer__btn-container{min-width:100px;display:flex;justify-content:flex-end}.voice-visualizer__btn-left:hover{background-color:#ff4f4f}.voice-visualizer__btn-left:disabled{opacity:.6;background-color:#ff3030;cursor:default}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone{background-color:#fff}.voice-visualizer__btn-left.voice-visualizer__btn-left-microphone>img{width:auto;height:50%;max-height:30px}.voice-visualizer__btn-left>img{width:auto;height:50%;max-height:16px}.voice-visualizer__btn-left:hover{border:4px solid #9f9f9f}.voice-visualizer__btn{box-sizing:border-box;min-width:100px;min-height:60px;padding:5px 20px;border-radius:40px;font-size:15px;background-color:#f0f0f0;transition:background-color .3s,opacity .3s}.voice-visualizer__btn:disabled{opacity:.8;background-color:#f0f0f0;cursor:default}.voice-visualizer__btn:hover{background-color:#bebebe}.voice-visualizer__canvas-container{position:relative;width:fit-content;margin:0 auto;overflow:hidden}.voice-visualizer__canvas-container canvas{display:block}.voice-visualizer__canvas-microphone-btn{position:absolute;top:50%;left:50%;width:auto;max-width:12%;min-width:24px;height:50%;max-height:100px;background-color:transparent;border:none;outline:none;transform:translate(-50%,-50%)}.voice-visualizer__canvas-microphone-icon{width:100%;height:100%;will-change:transform;transition:transform .3s}.voice-visualizer__canvas-microphone-btn:hover .voice-visualizer__canvas-microphone-icon{transform:scale(1.03)}.voice-visualizer__canvas-audio-wave-icon{position:absolute;top:50%;left:50%;width:auto;max-width:40%;height:40%;max-height:100px;transform:translate(-118%,-50%) scale(-1)}.voice-visualizer__canvas-audio-wave-icon2{transform:translate(18%,-50%)}.voice-visualizer__canvas-audio-processing{position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%)}.voice-visualizer__progress-indicator-hovered{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#85858599}.voice-visualizer__progress-indicator-hovered-time{position:absolute;top:3%;left:1px;width:fit-content;margin:0;padding:0 7px;opacity:.8;font-size:12px;border-radius:0 4px 4px 0;background-color:#575757;text-align:left}.voice-visualizer__progress-indicator-hovered-time.voice-visualizer__progress-indicator-hovered-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__progress-indicator{position:absolute;top:0;pointer-events:none;height:100%;width:1px;background-color:#efefef}.voice-visualizer__progress-indicator-time{position:absolute;top:3%;left:1px;width:fit-content;box-sizing:border-box;min-width:37px;margin:0;padding:0 7px;font-size:12px;border-radius:0 4px 4px 0;text-align:left;color:#000;font-weight:500;background-color:#efefef}.voice-visualizer__progress-indicator-time.voice-visualizer__progress-indicator-time-left{left:unset;right:1px;border-radius:4px 0 0 4px}.voice-visualizer__audio-info-container{box-sizing:border-box;height:55px;display:flex;align-items:center;justify-content:center;gap:30px}.voice-visualizer__audio-info-time{margin:15px 0;min-width:38px;text-align:left}.voice-visualizer__visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:4px solid #c5c5c5;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.voice-visualizer__relative{position:relative}.voice-visualizer__spinner-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;display:flex;justify-content:center;align-items:center}.voice-visualizer__spinner{flex-shrink:0;width:100%;height:100%;border:4px solid rgba(197,197,197,.5);border-radius:50%;border-top-color:#b7b7b7;animation:voice-visualizer__spin 1s ease-in-out infinite;-webkit-animation:voice-visualizer__spin 1s ease-in-out infinite}@keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}@-webkit-keyframes voice-visualizer__spin{to{transform:rotate(360deg)}}")})();
import { jsx as o, jsxs as ne, Fragment as Qe } from "react/jsx-runtime";
import { useState as u, useRef as N, useCallback as nt, useLayoutEffect as et, useEffect as Z } from "react";
const Be = ({
  canvas: t,
  backgroundColor: e
}) => {
  const r = t.height, n = t.width, i = Math.round(n / 2), h = t.getContext("2d");
  return h ? (h.clearRect(0, 0, n, r), e !== "transparent" && (h.fillStyle = e, h.fillRect(0, 0, n, r)), { context: h, height: r, width: n, halfWidth: i }) : null;
}, Fe = ({
  context: t,
  color: e,
  rounded: r,
  x: n,
  y: i,
  w: h,
  h: A
}) => {
  t.fillStyle = e, t.beginPath(), t.roundRect ? (t.roundRect(n, i, h, A, r), t.fill()) : t.fillRect(n, i, h, A);
}, ct = ({
  barsData: t,
  canvas: e,
  barWidth: r,
  gap: n,
  backgroundColor: i,
  mainBarColor: h,
  secondaryBarColor: A,
  currentAudioTime: v = 0,
  rounded: L,
  duration: p
}) => {
  const y = Be({ canvas: e, backgroundColor: i });
  if (!y)
    return;
  const { context: D, height: z } = y, j = v / p;
  t.forEach((m, w) => {
    const f = w / t.length, a = j > f;
    Fe({
      context: D,
      color: a ? A : h,
      rounded: L,
      x: w * (r + n * r),
      y: z / 2 - m.max,
      h: m.max * 2,
      w: r
    });
  });
};
function it({
  context: t,
  color: e,
  rounded: r,
  width: n,
  height: i,
  barWidth: h
}) {
  Fe({
    context: t,
    color: e,
    rounded: r,
    x: n / 2 + h / 2,
    y: i / 2 - 1,
    h: 2,
    w: n - (n / 2 + h / 2)
  });
}
const st = ({
  audioData: t,
  unit: e,
  index: r,
  index2: n,
  canvas: i,
  isRecordingInProgress: h,
  isPausedRecording: A,
  picks: v,
  backgroundColor: L,
  barWidth: p,
  mainBarColor: y,
  secondaryBarColor: D,
  rounded: z,
  animateCurrentPick: j,
  fullscreen: m
}) => {
  const w = Be({ canvas: i, backgroundColor: L });
  if (!w)
    return;
  const { context: f, height: a, width: C, halfWidth: F } = w;
  if (t != null && t.length && h) {
    const _ = Math.max(...t);
    if (!A) {
      if (n.current >= p) {
        n.current = 0;
        const T = (a - _ / 258 * a) / a * 100, Q = (-a + _ / 258 * a * 2) / a * 100, ie = r.current === p ? {
          startY: T,
          barHeight: Q
        } : null;
        r.current >= e ? r.current = p : r.current += p, v.length > (m ? C : F) / p && v.pop(), v.unshift(ie);
      }
      n.current += 1;
    }
    !m && ce(), j && Fe({
      context: f,
      rounded: z,
      color: y,
      x: m ? C : F,
      y: a - _ / 258 * a,
      h: -a + _ / 258 * a * 2,
      w: p
    });
    let U = (m ? C : F) - n.current;
    v.forEach((T) => {
      T && Fe({
        context: f,
        color: y,
        rounded: z,
        x: U,
        y: T.startY * a / 100 > a / 2 - 1 ? a / 2 - 1 : T.startY * a / 100,
        h: T.barHeight * a / 100 > 2 ? T.barHeight * a / 100 : 2,
        w: p
      }), U -= p;
    });
  } else
    v.length = 0;
  function ce() {
    it({
      context: f,
      color: D,
      rounded: z,
      width: C,
      height: a,
      barWidth: p
    });
  }
}, tt = (t) => {
  const e = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), n = t % 60, i = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return e > 0 ? `${String(e).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}:${String(i).charAt(0)}` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}`;
}, at = (t) => {
  const e = Math.floor(t / 1e3), r = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), i = e % 60;
  return r > 0 ? `${String(r).padStart(2, "0")}:${String(n).padStart(
    2,
    "0"
  )}:${String(i).padStart(2, "0")}` : `${String(n).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
};
function Ve(t) {
  if (typeof t == "string") {
    const e = Number(t);
    if (!Number.isNaN(e))
      return `${Math.trunc(e / 2) * 2}px`;
  }
  return t;
}
const ot = ({
  bufferData: t,
  height: e,
  width: r,
  barWidth: n,
  gap: i
}) => {
  const h = r / (n + i * n), A = Math.floor(t.length / h), v = e / 2;
  let L = [], p = 0;
  for (let y = 0; y < h; y++) {
    const D = [];
    let z = 0;
    for (let m = 0; m < A && y * A + m < t.length; m++) {
      const w = t[y * A + m];
      w > 0 && (D.push(w), z++);
    }
    const j = D.reduce((m, w) => m + w, 0) / z;
    j > p && (p = j), L.push({ max: j });
  }
  if (v * 0.95 > p * v) {
    const y = v * 0.95 / p;
    L = L.map((D) => ({
      max: D.max > 0.01 ? D.max * y : 1
    }));
  }
  return L;
}, ut = (t) => {
  if (!t)
    return "";
  const e = t.match(/audio\/([^;]+)/);
  return e && e.length >= 2 ? `.${e[1]}` : "";
}, ht = (t) => {
  const e = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), n = t % 60, i = Math.floor(
    (n - Math.floor(n)) * 1e3
  );
  return e > 0 ? `${String(e).padStart(2, "0")}:${String(r).padStart(
    2,
    "0"
  )}:${String(Math.floor(n)).padStart(2, "0")}}h` : r > 0 ? `${String(r).padStart(2, "0")}:${String(
    Math.floor(n)
  ).padStart(2, "0")}m` : `${String(Math.floor(n)).padStart(2, "0")}:${String(
    i
  ).charAt(0)}${String(i).charAt(1)}s`;
}, lt = (t) => {
  onmessage = (e) => {
    postMessage(t(e.data));
  };
};
function mt({
  fn: t,
  initialValue: e,
  onMessageReceived: r
}) {
  const [n, i] = u(e);
  return {
    result: n,
    setResult: i,
    run: (A) => {
      const v = new Worker(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        URL.createObjectURL(new Blob([`(${lt})(${t})`]))
      );
      v.onmessage = (L) => {
        L.data && (i(L.data), r && r(), v.terminate());
      }, v.onerror = (L) => {
        console.error(L.message), v.terminate();
      }, v.postMessage(A);
    }
  };
}
const vt = (t, e = 250) => {
  const r = N();
  return nt(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...n) => {
      const i = () => {
        clearTimeout(r.current), t(...n);
      };
      clearTimeout(r.current), r.current = setTimeout(i, e);
    },
    [t, e]
  );
};
function dt(t) {
  const e = N(t);
  return et(() => {
    e.current = t;
  }, [t]), e;
}
const zt = ({
  color: t = "#000000",
  stroke: e = 2,
  className: r
}) => /* @__PURE__ */ o(
  "svg",
  {
    viewBox: "0 0 23 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    children: /* @__PURE__ */ o(
      "path",
      {
        d: "M1.1 16.72c0 3 .96 5.8 3.61 7.95a9.96 9.96 0 0 0 6.5 2.17m0 0v4.34h4.34-8.67m4.34-4.34c2.35 0 4.42-.48 6.5-2.17a9.87 9.87 0 0 0 3.61-7.95M11.22 1.82c-1.45 0-2.5.37-3.3.93a5.6 5.6 0 0 0-1.84 2.4c-.9 2.06-1.1 4.77-1.1 7.24 0 2.46.2 5.17 1.1 7.24a5.6 5.6 0 0 0 1.84 2.4c.8.55 1.85.92 3.3.92 1.44 0 2.5-.37 3.29-.93a5.6 5.6 0 0 0 1.84-2.4c.9-2.06 1.1-4.77 1.1-7.23 0-2.47-.2-5.18-1.1-7.24a5.6 5.6 0 0 0-1.84-2.4 5.52 5.52 0 0 0-3.3-.93Z",
        stroke: t,
        strokeWidth: e,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), qe = ({
  color: t = "#FFFFFF",
  reflect: e
}) => /* @__PURE__ */ o(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.92 17.54 48.27 14.92",
    className: `voice-visualizer__canvas-audio-wave-icon ${e ? "voice-visualizer__canvas-audio-wave-icon2" : ""}`,
    children: /* @__PURE__ */ o(
      "path",
      {
        d: "M.92 24.63h.21v.75H.92zm.42-1.39h.21v3.52h-.21zm.43.68h.21v2.17h-.21zM2.2 22h.21v6.01H2.2zm.43-1.27h.21v8.55h-.21zm.43 2.07h.21v4.4h-.21zm.43 1.22h.21v1.97h-.21zm.43.47h.21v1.03h-.21zm.43-1.66h.21v4.35h-.21zm.43-1.74h.21v7.82h-.21zm.43 1.94h.21v3.94h-.21zm.43 1.07h.21v1.81h-.21zm.42-.94h.21v3.68h-.21zm.43.91h.21v1.86h-.21zm.43-.23h.21v2.33h-.21zm.43.46h.21v1.4h-.21zm.43-.7h.21v2.8h-.21zm.43-1.6h.21v6.01h-.21zm.43-2.23h.21v10.46h-.21zm.43-1.4h.21v13.26h-.21zm.43.62h.21v12.02H9.5zm.43 1.64h.21v8.75h-.21zm.43 1.37h.21v6.01h-.21zm.43-1.87H11v9.74h-.21zm.42 1.32h.21v7.1h-.21zm.43-2.64h.21v12.38h-.21zm.43 1.61h.21v9.17h-.21zM12.5 22h.21v6.01h-.21zm.43 1.32h.21v3.37h-.21zm.43-2.51h.21v8.39h-.21zm.43.59H14v7.2h-.21zm.43 1.79h.21v3.62h-.21zm.43.41h.21v2.8h-.21zm.43.57h.21v1.66h-.21zm.43-1.11h.21v3.88h-.21zm.42-2.98h.21v9.84h-.21zm.43 1.06h.21v7.72h-.21zm.43 3.19H17v1.35h-.21zm.86-2.33h.21v6.01h-.21zm-.43 1.4h.21v3.21h-.21zm1.29.15h.21v2.9h-.21zm.43.68h.21v1.55h-.21zm-.86-.76h.21v3.05h-.21zm1.29-.05h.21v3.16h-.21zm.43-.64h.21v4.45h-.21zm.43.38h.21v3.68h-.21zm.42-.49h.21v4.66h-.21zm.43 1.32h.21v2.02h-.21zm.43.37h.21v1.29h-.21zm.43.31h.21v.67h-.21zm.43-.39h.21v1.45h-.21zm.43-1.35h.21v4.14h-.21zm.86.73h.21v2.69h-.21zm-.43.44h.21v1.81h-.21zm1.29-3.45h.21v8.7h-.21zm.43 1.71h.21v5.28h-.21zm-.86-2.3h.21v9.89h-.21zm1.29 3.36h.21v3.16h-.21zM25.8 22h.21v6.01h-.21zm.43 1.42h.21v3.16h-.21zm.43.88h.21v1.4h-.21zm.43-.93h.21v3.26h-.21zm.43-1.37h.21v6.01h-.21zm.43-.93h.21v7.87h-.21zm.43-.76h.21v9.38h-.21zm.43 1.69h.21v6.01h-.21zm.86 1.92h.21v2.17h-.21zm-.43-.6h.21v3.37h-.21zm1.28.05h.21v3.26h-.21zm.43.67h.21v1.91h-.21zm-.85-.51h.21v2.95h-.21zm1.28-.13h.21v3.21h-.21zm.43-1.4h.21v6.01h-.21zm.43-.99h.21v7.98h-.21zm.43 1.77h.21v4.45h-.21zm.43-1.22h.21v6.89h-.21zm.43 1.6h.21v3.68h-.21zm.43-.28h.21v4.25h-.21zm.43-.6h.21v5.44h-.21zm.43-.28h.21v6.01h-.21zm.85 2.02h.21v1.97h-.21zm-.43-.57h.21v3.11h-.21zm1.29.93h.21v1.24h-.21zm.43-.65h.21v2.54h-.21zm-.86-.28h.21v3.11h-.21zm1.29.83h.21v1.45h-.21zm.43-.99h.21v3.42h-.21zm.43-.1h.21v3.62h-.21zm.43-.7h.21v5.02h-.21zm.43.8h.21v3.42h-.21zm.43-1.29h.21v6.01h-.21zm.42-1.71h.21v9.43h-.21zm.43 2.38h.21v4.66h-.21zm.43.65h.21v3.37h-.21zm.86.08h.21v3.21h-.21zm-.43.54h.21v2.12h-.21zm1.29-.05h.21v2.23h-.21zm.43.28h.21v1.66h-.21zm-.86.16h.21v1.35h-.21zm1.29.21h.21v.93h-.21zm.43-6.04h.21v13h-.21zm.43.8h.21v11.4h-.21zm.43-1.76h.21v14.92h-.21zm.42 1.09h.21v12.74h-.21zm.43 1.17h.21v10.41h-.21zm.43 1.32h.21v7.77h-.21zm.43 1.6h.21v4.56h-.21zm.43 1.17h.21v2.23h-.21zm.86-.08h.21v2.38h-.21zm-.43-.34h.21v3.05h-.21zm1.29-.1h.21v3.26h-.21zm.43.93h.21v1.4h-.21zm-.86-.02h.21v1.45h-.21z",
        fill: t
      }
    )
  }
), Xe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEuMSAxNi43MmMwIDMgLjk2IDUuOCAzLjYxIDcuOTVhOS45NiA5Ljk2IDAgMCAwIDYuNSAyLjE3bTAgMHY0LjM0aDQuMzQtOC42N200LjM0LTQuMzRjMi4zNSAwIDQuNDItLjQ4IDYuNS0yLjE3YTkuODcgOS44NyAwIDAgMCAzLjYxLTcuOTVNMTEuMjIgMS44MmMtMS40NSAwLTIuNS4zNy0zLjMuOTNhNS42IDUuNiAwIDAgMC0xLjg0IDIuNGMtLjkgMi4wNi0xLjEgNC43Ny0xLjEgNy4yNCAwIDIuNDYuMiA1LjE3IDEuMSA3LjI0YTUuNiA1LjYgMCAwIDAgMS44NCAyLjRjLjguNTUgMS44NS45MiAzLjMuOTIgMS40NCAwIDIuNS0uMzcgMy4yOS0uOTNhNS42IDUuNiAwIDAgMCAxLjg0LTIuNGMuOS0yLjA2IDEuMS00Ljc3IDEuMS03LjIzIDAtMi40Ny0uMi01LjE4LTEuMS03LjI0YTUuNiA1LjYgMCAwIDAtMS44NC0yLjQgNS41MiA1LjUyIDAgMCAwLTMuMy0uOTNaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", ft = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE4Ljc1IDYuMTZjNC4zMSAyLjYgNi40NiAzLjkgNi40NiA1Ljg0IDAgMS45NS0yLjE1IDMuMjQtNi40NiA1Ljg0bC00Ljg0IDIuOTJjLTQuMzEgMi42LTYuNDYgMy44OS04LjA4IDIuOTItMS42Mi0uOTgtMS42Mi0zLjU3LTEuNjItOC43NlY5LjA4YzAtNS4xOSAwLTcuNzggMS42Mi04Ljc2IDEuNjItLjk3IDMuNzcuMzMgOC4wOCAyLjkybDQuODQgMi45MloiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", Ke = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE0IDMuNWEzLjUgMy41IDAgMSAxIDcgMHYyMmEzLjUgMy41IDAgMSAxLTcgMHYtMjJaIiBmaWxsPSIjZmZmIi8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjkiIHJ4PSIzLjUiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", Mt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iLjIxIiB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHJ4PSI1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", It = ({
  controls: {
    audioRef: t,
    audioData: e,
    isRecordingInProgress: r,
    recordedBlob: n,
    duration: i,
    currentAudioTime: h,
    audioSrc: A,
    bufferFromRecordedBlob: v,
    togglePauseResume: L,
    startRecording: p,
    stopRecording: y,
    saveAudioFile: D,
    isAvailableRecordedAudio: z,
    isPausedRecordedAudio: j,
    isPausedRecording: m,
    isProcessingStartRecording: w,
    isProcessingRecordedAudio: f,
    isCleared: a,
    formattedDuration: C,
    formattedRecordingTime: F,
    formattedRecordedAudioCurrentTime: ce,
    clearCanvas: _,
    setCurrentAudioTime: U,
    isProcessingOnResize: T,
    _setIsProcessingOnResize: Q,
    _setIsProcessingAudioOnComplete: ie
  },
  width: Me = "100%",
  height: V = 200,
  speed: pe = 3,
  backgroundColor: P = "transparent",
  mainBarColor: O = "#FFFFFF",
  secondaryBarColor: q = "#5e5e5e",
  barWidth: ge = 2,
  gap: Ie = 1,
  rounded: se = 5,
  isControlPanelShown: ae = !0,
  isDownloadAudioButtonShown: oe = !1,
  animateCurrentPick: X = !0,
  fullscreen: K = !1,
  onlyRecording: k = !1,
  isDefaultUIShown: we = !0,
  defaultMicrophoneIconColor: De = O,
  defaultAudioWaveIconColor: Te = O,
  mainContainerClassName: be,
  canvasContainerClassName: Le,
  isProgressIndicatorShown: ue = !k,
  progressIndicatorClassName: _e,
  isProgressIndicatorTimeShown: he = !0,
  progressIndicatorTimeClassName: ke,
  isProgressIndicatorOnHoverShown: Ee = !k,
  progressIndicatorOnHoverClassName: xe,
  isProgressIndicatorTimeOnHoverShown: $e = !0,
  progressIndicatorTimeOnHoverClassName: g,
  isAudioProcessingTextShown: le = !0,
  audioProcessingTextClassName: E,
  controlButtonsClassName: Y
}) => {
  const [G, x] = u(0), [d, H] = u(0), [$, l] = u(0), [me, Ye] = u(0), [ve, He] = u(!1), [Pe, Se] = u(window.innerWidth), [Ne, Oe] = u(!1), de = Pe < 768, ze = Math.trunc(pe), B = Math.trunc(Ie), R = Math.trunc(
    de && B > 0 ? ge + 1 : ge
  ), Ae = R + B * R, I = N(null), Re = N([]), fe = N(ze), ee = N(R), Ge = N(R), te = N(null), ye = dt(Pe), {
    result: re,
    setResult: c,
    run: s
  } = mt({
    fn: ot,
    initialValue: [],
    onMessageReceived: W
  }), S = vt(M);
  Z(() => {
    M();
    const b = () => {
      ye.current !== window.innerWidth && (z ? (Se(window.innerWidth), Q(!0), Oe(!0), S()) : (Se(window.innerWidth), M()));
    };
    return window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b);
    };
  }, [Me, z]), et(() => {
    I.current && ((fe.current >= ze || !e.length) && (fe.current = e.length ? 0 : ze, st({
      audioData: e,
      unit: Ae,
      index: ee,
      index2: Ge,
      canvas: I.current,
      picks: Re.current,
      isRecordingInProgress: r,
      isPausedRecording: m,
      backgroundColor: P,
      mainBarColor: O,
      secondaryBarColor: q,
      barWidth: R,
      rounded: se,
      animateCurrentPick: X,
      fullscreen: K
    })), fe.current += 1);
  }, [
    I.current,
    e,
    R,
    P,
    O,
    q,
    se,
    K,
    we,
    me
  ]), Z(() => {
    var b, J;
    if (z)
      return ve ? (b = I.current) == null || b.addEventListener("mouseleave", Ze) : (J = I.current) == null || J.addEventListener("mouseenter", Ue), () => {
        var je, Je;
        ve ? (je = I.current) == null || je.removeEventListener("mouseleave", Ze) : (Je = I.current) == null || Je.removeEventListener("mouseenter", Ue);
      };
  }, [ve, z]), Z(() => {
    var J;
    if (!v || !I.current || r || Ne)
      return;
    if (k) {
      _();
      return;
    }
    Re.current = [];
    const b = v.getChannelData(0);
    return s({
      bufferData: b,
      height: $,
      width: me,
      barWidth: R,
      gap: B
    }), (J = I.current) == null || J.addEventListener("mousemove", Ce), () => {
      var je;
      (je = I.current) == null || je.removeEventListener(
        "mousemove",
        Ce
      );
    };
  }, [
    v,
    d,
    $,
    Ie,
    ge,
    Ne
  ]), Z(() => {
    if (!(k || !(re != null && re.length) || !I.current || f)) {
      if (a) {
        c([]);
        return;
      }
      ct({
        barsData: re,
        canvas: I.current,
        barWidth: R,
        gap: B,
        backgroundColor: P,
        mainBarColor: O,
        secondaryBarColor: q,
        currentAudioTime: h,
        rounded: se,
        duration: i
      });
    }
  }, [
    re,
    h,
    a,
    se,
    P,
    O,
    q
  ]), Z(() => {
    f && I.current && Be({
      canvas: I.current,
      backgroundColor: P
    });
  }, [f]);
  function M() {
    if (!te.current || !I.current)
      return;
    fe.current = ze;
    const b = Math.trunc(
      te.current.clientHeight * window.devicePixelRatio / 2
    ) * 2;
    H(te.current.clientWidth), l(b), Ye(
      Math.round(
        te.current.clientWidth * window.devicePixelRatio
      )
    ), Oe(!1);
  }
  function W() {
    Q(!1), ie(!1), t != null && t.current && !T && (t.current.src = A);
  }
  const Ue = () => {
    He(!0);
  }, Ze = () => {
    He(!1);
  }, Ce = (b) => {
    x(b.offsetX);
  }, rt = (b) => {
    if (t != null && t.current && I.current) {
      const J = i / d * (b.clientX - I.current.getBoundingClientRect().left);
      t.current.currentTime = J, U(J);
    }
  }, We = h / i * d;
  return /* @__PURE__ */ ne("div", { className: `voice-visualizer ${be ?? ""}`, children: [
    /* @__PURE__ */ ne(
      "div",
      {
        className: `voice-visualizer__canvas-container ${Le ?? ""}`,
        ref: te,
        style: { width: Ve(Me) },
        children: [
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: I,
              width: me,
              height: $,
              onClick: rt,
              style: {
                height: Ve(V),
                width: d
              },
              children: "Your browser does not support HTML5 Canvas."
            }
          ),
          we && a && /* @__PURE__ */ ne(Qe, { children: [
            /* @__PURE__ */ o(qe, { color: Te }),
            /* @__PURE__ */ o(qe, { color: Te, reflect: !0 }),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: p,
                className: "voice-visualizer__canvas-microphone-btn",
                children: /* @__PURE__ */ o(
                  zt,
                  {
                    color: De,
                    stroke: 0.5,
                    className: "voice-visualizer__canvas-microphone-icon"
                  }
                )
              }
            )
          ] }),
          le && f && /* @__PURE__ */ o(
            "p",
            {
              className: `voice-visualizer__canvas-audio-processing ${E ?? ""}`,
              style: { color: O },
              children: "Processing Audio..."
            }
          ),
          ve && z && !f && !de && Ee && /* @__PURE__ */ o(
            "div",
            {
              className: `voice-visualizer__progress-indicator-hovered ${xe ?? ""}`,
              style: {
                left: G
              },
              children: $e && /* @__PURE__ */ o(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-hovered-time 
                    ${d - G < 70 ? "voice-visualizer__progress-indicator-hovered-time-left" : ""} 
                    ${g ?? ""}`,
                  children: tt(
                    i / d * G
                  )
                }
              )
            }
          ),
          ue && z && !f && i ? /* @__PURE__ */ o(
            "div",
            {
              className: `voice-visualizer__progress-indicator ${_e ?? ""}`,
              style: {
                left: We < d - 1 ? We : d - 1
              },
              children: he && /* @__PURE__ */ o(
                "p",
                {
                  className: `voice-visualizer__progress-indicator-time ${d - h * d / i < 70 ? "voice-visualizer__progress-indicator-time-left" : ""} ${ke ?? ""}`,
                  children: ce
                }
              )
            }
          ) : null
        ]
      }
    ),
    ae && /* @__PURE__ */ ne(Qe, { children: [
      /* @__PURE__ */ ne("div", { className: "voice-visualizer__audio-info-container", children: [
        r && /* @__PURE__ */ o("p", { className: "voice-visualizer__audio-info-time", children: F }),
        i && !f ? /* @__PURE__ */ o("p", { children: C }) : null
      ] }),
      /* @__PURE__ */ ne("div", { className: "voice-visualizer__buttons-container", children: [
        r && /* @__PURE__ */ o("div", { className: "voice-visualizer__btn-container", children: /* @__PURE__ */ o(
          "button",
          {
            className: `voice-visualizer__btn-left ${m ? "voice-visualizer__btn-left-microphone" : ""}`,
            onClick: L,
            children: /* @__PURE__ */ o(
              "img",
              {
                src: m ? Xe : Ke,
                alt: m ? "Play" : "Pause"
              }
            )
          }
        ) }),
        !a && /* @__PURE__ */ o(
          "button",
          {
            className: `voice-visualizer__btn-left ${r || w ? "voice-visualizer__visually-hidden" : ""}`,
            onClick: L,
            disabled: f,
            children: /* @__PURE__ */ o(
              "img",
              {
                src: j ? ft : Ke,
                alt: j ? "Play" : "Pause"
              }
            )
          }
        ),
        a && /* @__PURE__ */ ne(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__relative ${w ? "voice-visualizer__btn-center--border-transparent" : ""}`,
            onClick: p,
            disabled: w,
            children: [
              w && /* @__PURE__ */ o("div", { className: "voice-visualizer__spinner-wrapper", children: /* @__PURE__ */ o("div", { className: "voice-visualizer__spinner" }) }),
              /* @__PURE__ */ o("img", { src: Xe, alt: "Microphone" })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            className: `voice-visualizer__btn-center voice-visualizer__btn-center-pause ${r ? "" : "voice-visualizer__visually-hidden"}`,
            onClick: y,
            children: /* @__PURE__ */ o("img", { src: Mt, alt: "Stop" })
          }
        ),
        !a && /* @__PURE__ */ o(
          "button",
          {
            onClick: _,
            className: `voice-visualizer__btn ${Y ?? ""}`,
            disabled: f,
            children: "Clear"
          }
        ),
        oe && n && /* @__PURE__ */ o(
          "button",
          {
            onClick: D,
            className: `voice-visualizer__btn ${Y ?? ""}`,
            disabled: f,
            children: "Download Audio"
          }
        )
      ] })
    ] })
  ] });
};
function wt({
  inputDeviceId: t,
  streamConfig: e,
  onStartRecording: r,
  onStopRecording: n,
  onPausedRecording: i,
  onResumedRecording: h,
  onClearCanvas: A,
  onEndAudioPlayback: v,
  onStartAudioPlayback: L,
  onPausedAudioPlayback: p,
  onResumedAudioPlayback: y,
  onErrorPlayingAudio: D
} = {}) {
  const [z, j] = u(!1), [m, w] = u(!1), [f, a] = u(null), [C, F] = u(new Uint8Array(0)), [ce, _] = u(!1), [U, T] = u(null), [Q, ie] = u(null), [Me, V] = u(0), [pe, P] = u(0), [O, q] = u(0), [ge, Ie] = u(""), [se, ae] = u(!0), [oe, X] = u(0), [K, k] = u(!0), [we, De] = u(!1), [Te, be] = u(!1), [Le, ue] = u(null), [_e, he] = u(!1), [ke, Ee] = u(0), [xe, $e] = u(0), g = N(null), le = N(""), E = N(null), Y = N(null), G = N(null), x = N(null), d = N(null), H = N(null), $ = N(null), l = N(null), me = !!(Q && !ce), Ye = ht(O), ve = at(Me), He = tt(oe), Pe = we || ce;
  Z(() => {
    if (!z || m)
      return;
    const s = setInterval(() => {
      const S = performance.now();
      V((M) => M + (S - pe)), P(S);
    }, 1e3);
    return () => clearInterval(s);
  }, [pe, m, z]), Z(() => {
    if (Le) {
      ee();
      return;
    }
  }, [Le]), Z(() => () => {
    ee();
  }, []), Z(() => (K || window.addEventListener("beforeunload", Se), () => {
    window.removeEventListener("beforeunload", Se);
  }), [K]);
  const Se = (c) => {
    c.preventDefault(), c.returnValue = "";
  }, Ne = async (c) => {
    if (c)
      try {
        if (c.size === 0)
          throw new Error("Error: The audio blob is empty");
        const s = URL.createObjectURL(c);
        Ie(s);
        const S = await c.arrayBuffer(), W = await new AudioContext().decodeAudioData(S);
        ie(W), q(W.duration - 0.06), ue(null);
      } catch (s) {
        console.error("Error processing the audio blob:", s), ue(
          s instanceof Error ? s : new Error("Error processing the audio blob")
        );
      }
  }, Oe = (c) => {
    c instanceof Blob && (ee(), be(!0), k(!1), _(!0), j(!1), V(0), w(!1), l.current = new Audio(), T(c), Ne(c));
  }, de = (c) => {
    if (!(e != null && e.usePCM) || !e.onPCMAvailable || m)
      return;
    const s = c.inputBuffer, S = s.getChannelData(0), M = new Float32Array(S), W = !z || m, Ue = e.pcmSampleRate || s.sampleRate, Ze = {
      recordingId: le.current,
      chunkSequence: xe,
      sampleRate: Ue,
      isLastChunk: W
    };
    e.onPCMAvailable(M, Ze), $e((Ce) => Ce + 1);
  }, ze = () => {
    he(!0), le.current = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, Ee(0), $e(0), navigator.mediaDevices.getUserMedia({
      audio: t ? { deviceId: t } : !0
    }).then((c) => {
      if (k(!1), he(!1), j(!0), P(performance.now()), a(c), E.current = new window.AudioContext(), Y.current = E.current.createAnalyser(), G.current = new Uint8Array(
        Y.current.frequencyBinCount
      ), x.current = E.current.createMediaStreamSource(c), x.current.connect(Y.current), e != null && e.usePCM && e.onPCMAvailable) {
        const s = e.pcmBufferSize || 4096;
        d.current = E.current.createScriptProcessor(
          s,
          1,
          // input channels
          1
          // output channels
        ), x.current.connect(d.current), d.current.connect(
          E.current.destination
        ), d.current.addEventListener(
          "audioprocess",
          de
        );
      }
      g.current = new MediaRecorder(c), g.current.addEventListener(
        "dataavailable",
        Ae
      ), e != null && e.enabled && e.timeslice ? g.current.start(e.timeslice) : g.current.start(), r && r(), B();
    }).catch((c) => {
      he(!1), ue(
        c instanceof Error ? c : new Error("Error starting audio recording")
      );
    });
  }, B = () => {
    Y.current.getByteTimeDomainData(G.current), F(new Uint8Array(G.current)), H.current = requestAnimationFrame(B);
  }, R = (c, s = !1) => {
    var S;
    if (!(!e || !e.enabled || !e.onChunkAvailable) && c.size > 0) {
      const M = {
        recordingId: le.current,
        chunkSequence: ke,
        mimeType: ((S = g.current) == null ? void 0 : S.mimeType) || "audio/webm",
        isLastChunk: s
      };
      e.onChunkAvailable(c, M), Ee((W) => W + 1);
    }
  }, Ae = (c) => {
    if (e != null && e.enabled && c.data.size > 0) {
      const s = !g.current || g.current.state === "inactive";
      R(c.data, s);
    }
    g.current || (l.current = new Audio(), T(c.data), Ne(c.data));
  }, I = () => {
    l.current && (X(l.current.currentTime), $.current = requestAnimationFrame(I));
  }, Re = () => {
    z || _e || (K || ee(), ze());
  }, fe = () => {
    var c;
    if (z) {
      if (j(!1), e != null && e.usePCM && e.onPCMAvailable && d.current) {
        const s = e.pcmSampleRate || ((c = E.current) == null ? void 0 : c.sampleRate) || 44100, S = {
          recordingId: le.current,
          chunkSequence: xe,
          sampleRate: s,
          isLastChunk: !0
        };
        e.onPCMAvailable(new Float32Array(0), S), d.current.removeEventListener(
          "audioprocess",
          de
        ), x.current && x.current.disconnect(d.current), d.current.disconnect();
      }
      g.current && (g.current.stop(), g.current.removeEventListener(
        "dataavailable",
        Ae
      )), f == null || f.getTracks().forEach((s) => s.stop()), H.current && cancelAnimationFrame(H.current), x.current && x.current.disconnect(), E.current && E.current.state !== "closed" && E.current.close(), _(!0), V(0), w(!1), n && n();
    }
  }, ee = () => {
    H.current && (cancelAnimationFrame(H.current), H.current = null), $.current && (cancelAnimationFrame($.current), $.current = null), g.current && (g.current.removeEventListener(
      "dataavailable",
      Ae
    ), g.current.stop(), g.current = null), d.current && (d.current.removeEventListener(
      "audioprocess",
      de
    ), x.current && x.current.disconnect(d.current), d.current.disconnect(), d.current = null), f == null || f.getTracks().forEach((c) => c.stop()), l != null && l.current && (l.current.removeEventListener("ended", ye), l.current.pause(), l.current.src = "", l.current = null), E.current = null, Y.current = null, G.current = null, x.current = null, a(null), he(!1), j(!1), be(!1), _(!1), T(null), ie(null), V(0), P(0), q(0), Ie(""), X(0), ae(!0), w(!1), De(!1), F(new Uint8Array(0)), ue(null), k(!0), A && A();
  }, Ge = () => {
    if (l.current && l.current.paused) {
      const c = l.current.play();
      c !== void 0 && c.catch((s) => {
        console.error(s), D && D(
          s instanceof Error ? s : new Error("Error playing audio")
        );
      });
    }
  }, te = () => {
    var c, s, S;
    if (z) {
      w((M) => !M), ((c = g.current) == null ? void 0 : c.state) === "recording" ? ((s = g.current) == null || s.pause(), V((M) => M + (performance.now() - pe)), H.current && cancelAnimationFrame(H.current), i && i()) : (H.current = requestAnimationFrame(B), (S = g.current) == null || S.resume(), P(performance.now()), h && h());
      return;
    }
    if (l.current && me)
      if (l.current.paused)
        requestAnimationFrame(I), Ge(), l.current.addEventListener("ended", ye), ae(!1), L && oe === 0 && L(), y && oe !== 0 && y();
      else {
        $.current && cancelAnimationFrame($.current), l.current.removeEventListener("ended", ye), l.current.pause(), ae(!0);
        const M = l.current.currentTime;
        X(M), l.current.currentTime = M, p && p();
      }
  }, ye = () => {
    $.current && cancelAnimationFrame($.current), ae(!0), X(0), l.current && (l.current.currentTime = 0), v && v();
  }, re = () => {
    if (!U)
      return;
    const c = ut(
      U.type || "audio/webm"
    ), s = `recording-${(/* @__PURE__ */ new Date()).toISOString()}.${c}`, S = URL.createObjectURL(U), M = document.createElement("a");
    document.body.appendChild(M), M.style.display = "none", M.href = S, M.download = s, M.click(), window.URL.revokeObjectURL(S);
  };
  return {
    audioRef: l,
    isRecordingInProgress: z,
    isPausedRecording: m,
    audioData: C,
    recordingTime: Me,
    mediaRecorder: g.current,
    duration: O,
    currentAudioTime: oe,
    audioSrc: ge,
    isPausedRecordedAudio: se,
    isProcessingRecordedAudio: Pe,
    isCleared: K,
    isAvailableRecordedAudio: me,
    recordedBlob: U,
    bufferFromRecordedBlob: Q,
    formattedDuration: Ye,
    formattedRecordingTime: ve,
    formattedRecordedAudioCurrentTime: He,
    startRecording: Re,
    togglePauseResume: te,
    stopRecording: fe,
    saveAudioFile: re,
    clearCanvas: ee,
    setCurrentAudioTime: X,
    error: Le,
    isProcessingOnResize: we,
    isProcessingStartRecording: _e,
    isPreloadedBlob: Te,
    setPreloadedAudioBlob: Oe,
    _setIsProcessingAudioOnComplete: _,
    _setIsProcessingOnResize: De
  };
}
export {
  It as VoiceVisualizer,
  wt as useVoiceVisualizer
};
