"use strict";Object.defineProperty(exports,"__esModule",{value:!0});!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".App{text-align:center}.App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion:no-preference){.App-logo{animation:App-logo-float 3s ease-in-out infinite}}.App-header{align-items:center;display:flex;flex-direction:column;font-size:calc(10px + 2vmin);justify-content:center;min-height:100vh}.App-link{color:#704cb6}@keyframes App-logo-float{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}"),exports.Chat=function({title:e=""}){return React.createElement("div",{className:"App"},React.createElement("h1",null,e," Shivam"))};
