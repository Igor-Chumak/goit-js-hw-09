!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",""),t.btnStop.removeAttribute("disabled"),timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(timerId),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.a349cd57.js.map