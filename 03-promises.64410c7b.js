var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("iQIUW");l.Notify.init({width:"500px",fontSize:"25px",position:"center-top",opacity:.7,timeout:1500});const a={form:document.querySelector(".form"),btnSubmit:document.querySelector('[type="submit"]')};a.form.elements.delay.value="1000",a.form.elements.step.value="1000",a.form.elements.amount.value="3",a.form.addEventListener("submit",(function(e){e.preventDefault();const t=a.form.elements.delay.value,n=a.form.elements.step.value,o=a.form.elements.amount.value;if(function({delayValue:e,stepValue:t,amountValue:n}){let o=!1;e<0&&(l.Notify.warning("Delay cannot be less than 0"),o=!0);t<0&&(l.Notify.warning("Step cannot be less than 0"),o=!0);n<1&&(l.Notify.warning("Amount must be more than 0"),o=!0);return o}({delayValue:t,stepValue:n,amountValue:o}))return;console.log(`delay: ${t} step: ${n}  amount: ${o}`),a.btnSubmit.disabled=!0}));
//# sourceMappingURL=03-promises.64410c7b.js.map
