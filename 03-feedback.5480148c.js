function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(x,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=p();if(j(e))return T(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function T(e){return u=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:T(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h={inputForm:y.children[0].children[0],textAreaForm:y.children[1].children[0]};y.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),y.addEventListener("input",e(t)((function(e){j={email:h.inputForm.value,message:h.textAreaForm.value},e.target.name===h.inputForm.name&&(j.email=h.inputForm.value);j.message=h.textAreaForm.value,console.log(j),localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));let j={};
//# sourceMappingURL=03-feedback.5480148c.js.map
