var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,r,i,a,f,u,c=0,d=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(j,t),d?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function j(){var e=m();if(S(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return p?s(n,i-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function T(){var e=m(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(p)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=v(t)||0,g(n)&&(d=!!n.leading,i=(p="maxWait"in n)?l(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(m())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=g(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),b={inputForm:p.children[0].children[0],textAreaForm:p.children[1].children[0]};let y,h;p.addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify({email:y,message:h})),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("email"),localStorage.removeItem("message"),e.currentTarget.reset()}));const S=localStorage.getItem("email");S&&(b.inputForm.value=S);const j=localStorage.getItem("message");j&&(b.textAreaForm.value=j),console.log(localStorage);
//# sourceMappingURL=03-feedback.34094d83.js.map
