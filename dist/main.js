!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=({element:e,attributes:t,content:n}={})=>{let r=document.createElement(e);if(t)for(const[e,n]of Object.entries(t))r.setAttribute(e,n);return n instanceof HTMLElement?r.appendChild(n):n&&(r.innerHTML=n),r},o=()=>{const e=document.querySelector("div.page-content");e&&e.parentNode.removeChild(e)},c=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","page-content");const n=r({element:"img",attributes:{src:"./static/img/restaurant.jpg",class:"cover-img"}}),o=r({element:"div",attributes:{class:"centered border rounded p-3 title-card"}}),c=r({element:"h1",attributes:{class:"title-color"},content:r({element:"strong",content:r({element:"u",content:"Tyler's Bistro"})})}),l=r({element:"h2",attributes:{class:"title-color"},content:"Asian Fusion Cuisine"}),s=r({element:"p",attributes:{class:"title-color"},content:r({element:"em",content:"Rated #1 on Yelp and TripAdvisor"})});o.appendChild(c),o.appendChild(l),o.appendChild(s),t.appendChild(n),t.appendChild(o),e.appendChild(t)};c();const l=document.getElementById("home"),s=document.getElementById("menu"),i=document.getElementById("contact");let a=l;function d(e){e.classList.toggle("tab-select")}function m(e,t){return!e|e!=t&&(e&&d(e),d(t),e=t),e}d(a),l.addEventListener("click",(function(){a=m(a,l),o(),c()})),s.addEventListener("click",()=>{a=m(a,s),o(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","page-content"),t.innerHTML='\n  <img src="./static/img/restaurant.jpg" class="cover-img">\n  <div class="centered">\n    <table class="table">\n      <thead>\n        <tr>\n          <th scope="col">#</th>\n          <th scope="col">Menu Item</th>\n          <th scope="col">Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope="row">1</th>\n          <td><em>Pho</em></td>\n          <td>$7</td>\n        </tr>\n        <tr>\n          <th scope="row">2</th>\n          <td><em>Stir-fried Rice</em></td>\n          <td>$8</td>\n        </tr>\n        <tr>\n          <th scope="row">3</th>\n          <td><em>Chicken Stir Fry</em></td>\n          <td>$10</td>\n        </tr>\n        <tr>\n          <th scope="row">4</th>\n          <td><em>Vegetable Stir Fry</em></td>\n          <td>$10</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>',e.appendChild(t)})()}),i.addEventListener("click",()=>{a=m(a,i),o(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","page-content"),t.innerHTML='\n  <img src="./static/img/restaurant.jpg" class="cover-img">\n  <form class="centered message-form p-2 border rounded">\n    <legend><em>Send us a message!</em></legend>\n    <div class="form-row">\n      <div class="form-group col-md-6">\n        <label for="first-name">First Name</label>\n        <input type="text" class="form-control" id="first-name">\n      </div>\n      <div class="form-group col-md-6">\n        <label for="last-name">Last Name</label>\n        <input type="text" class="form-control" id="last-name">\n      </div>\n    </div>\n    <div class="form-row">\n      <div class="form-group col">\n        <label for="email">Email</label>\n        <input type="email" class="form-control" id="email">\n      </div>\n    </div>\n    <div class="form-row">\n      <div class="form-group col">\n        <label for="message">Message</label>\n        <textarea class="form-control" id="message" rows="4"></textarea>\n      </div>\n    </div>\n    <button type="submit" class="btn btn-info">Send</button>\n  </form>\n  ',e.appendChild(t)})()})}]);