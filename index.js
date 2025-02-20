import{a as d,i as f,S as p}from"./assets/vendor-4dYZuk4Q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const m=async e=>{const t="48887234-fe7a8c0ecfa7b9a43b5097f7a",a="https://pixabay.com/api/";try{return(await d.get(a,{params:{key:t,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(s){throw console.error("Error fetching data: ",s),s}};function c(e){f.error({title:"Error",message:e})}function y(e){e.innerHTML=""}function h(e){const t=document.createElement("div");return t.classList.add("gallery-item"),t.innerHTML=`
    <a href="${e.largeImageURL}" target="_blank">
      <img src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <div class="info">
      <p>Likes: ${e.likes}</p>
      <p>Views: ${e.views}</p>
      <p>Comments: ${e.comments}</p>
      <p>Downloads: ${e.downloads}</p>
    </div>
  `,t}function g(e,t){e.forEach(a=>{const s=h(a);t.appendChild(s)})}let i;const L=document.querySelector(".search-form"),b=document.querySelector(".search-input"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");function w(){u.style.display="block"}function q(){u.style.display="none"}L.addEventListener("submit",async e=>{e.preventDefault();const t=b.value.trim();if(!t){c("Please enter a search query.");return}try{w(),y(l);const a=await m(t);a.length===0?c("Sorry, there are no images matching your search query. Please try again!"):g(a,l),i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})}catch{c("Failed to fetch images. Please try again later.")}finally{q()}});
//# sourceMappingURL=index.js.map
