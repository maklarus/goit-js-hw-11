import{S as l}from"./assets/vendor-874053e3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=document.querySelector(".gallery");function u(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:c,downloads:a})=>`
      <li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${i}" alt="${e}" />
        </a>
        <div>
          <p>Likes</p>
          <p>${t}</p>
        </div>
        <div>
          <p>Views</p>
          <p>${s}</p>
        </div>
        <div>
          <p>Comments</p>
          <p>${c}</p>
        </div>
        <div>
          <p>Downloads</p>
          <p>${a}</p>
        </div>
      </li>`).join("");p.innerHTML=r}new l(".gallery a");const d="https://pixabay.com/api",f="42570593-7f6e60f401c84611dfc2b0674",m=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"}),h=o=>{fetch(`${d}/?key=${f}&q=${o}&${m}`).then(r=>r.json()).then(r=>u(r.hits))},y=document.querySelector("form"),g=document.querySelector('input[name="search"]');function v(o){o.preventDefault(),h(g.value)}y.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
