var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const l={width:"500px",fontSize:"25px",position:"center-top",opacity:.7,timeout:1500},r={form:document.querySelector(".form"),btnSubmit:document.querySelector('[type="submit"]')};let a=0;function u(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{a+=1,setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();const t=+r.form.elements.delay.value,n=+r.form.elements.step.value,o=+r.form.elements.amount.value;if(function({delayValue:e,stepValue:t,amountValue:n}){let o=!1;e<0&&(i.Notify.warning("Delay cannot be less than 0",l),o=!0);t<0&&(i.Notify.warning("Step cannot be less than 0",l),o=!0);n<1&&(i.Notify.warning("Amount must be more than 0",l),o=!0);return o}({delayValue:t,stepValue:n,amountValue:o}))return;r.btnSubmit.disabled=!0;let s=1,d=t;for(let e=0;e<o;e+=1)s=e+1,d=t+n*e,u(s,d).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})).finally((()=>{a-=1,r.btnSubmit.disabled=0!==a}))}));
//# sourceMappingURL=03-promises.a3fde474.js.map
