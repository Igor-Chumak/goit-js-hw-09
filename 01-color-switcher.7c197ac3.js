const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(()=>{t.btnStart.setAttribute("disabled",""),t.btnStop.removeAttribute("disabled"),e=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.7c197ac3.js.map
