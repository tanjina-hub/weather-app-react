(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(4),r=t.n(c),s=(t(9),t(3)),o=t(0),i="5d73fab9fe16c2ce773f73c3773c3f9d",d="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({}),h=Object(s.a)(r,2),l=h[0],u=h[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(t,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){u(e),c(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var a=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(o.jsx)(h,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.0d60bba1.chunk.js.map