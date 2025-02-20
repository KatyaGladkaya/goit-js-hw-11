import{a as f,i as d,S as p}from"./assets/vendor-YHhhcpQd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const h=e=>f.get("https://pixabay.com/api/",{params:{key:"48887234-fe7a8c0ecfa7b9a43b5097f7a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>n.data.hits).catch(n=>{throw console.error("Error fetching data: ",n),n});function c(e){d.error({title:"Error",message:e})}function m(e){e.innerHTML=""}function y(e){const r=document.createElement("div");return r.classList.add("gallery-item"),r.innerHTML=`
    <a href="${e.largeImageURL}" target="_blank">
      <img src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <div class="info">
      <p>Likes: ${e.likes}</p>
      <p>Views: ${e.views}</p>
      <p>Comments: ${e.comments}</p>
      <p>Downloads: ${e.downloads}</p>
    </div>
  `,r}function g(e,r){e.forEach(a=>{const n=y(a);r.appendChild(n)})}let i;const L=document.querySelector(".search-form"),b=document.querySelector(".search-input"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");function w(){u.style.display="block"}function q(){u.style.display="none"}L.addEventListener("submit",function(e){e.preventDefault();const r=b.value.trim();if(!r){c("Please enter a search query.");return}w(),m(l),h(r).then(function(a){a.length===0?c("Sorry, there are no images matching your search query. Please try again!"):g(a,l),i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(function(a){c("Failed to fetch images. Please try again later.")}).finally(function(){q()})});
//# sourceMappingURL=index.js.map
