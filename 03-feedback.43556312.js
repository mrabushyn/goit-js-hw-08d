function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,u,l,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function S(e){return f=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function j(){var e=g();if(h(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?d(n,i-(e-f)):n}(e))}function x(e){return u=void 0,v&&o?y(e):(o=r=void 0,a)}function T(){var e=g(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return S(l);if(s)return u=setTimeout(j,t),y(l)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=r=u=void 0},T.flush=function(){return void 0===u?a:x(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S={inputForm:y.children[0].children[0],textAreaForm:y.children[1].children[0]};let h,j;y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify({email:h,message:j})),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("email"),localStorage.removeItem("message"),e.currentTarget.reset()})),S.inputForm.addEventListener("input",e(t)((function(e){h=e.target.value,localStorage.setItem("email",h)}),500)),S.textAreaForm.addEventListener("input",e(t)((function(e){j=e.target.value,localStorage.setItem("message",j)}),500));const x=localStorage.getItem("email");x&&(S.inputForm.value=x);const T=localStorage.getItem("message");T&&(S.textAreaForm.value=T),console.log(localStorage);
//# sourceMappingURL=03-feedback.43556312.js.map
