import{a as m,S as L,i as u}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";async function f(o,t){const s=await m.get("",{params:{q:o,key:"49577455-ade522c1ef99167d118a0e5b7",image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}});if(s.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.data}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function p(){document.querySelector(".loader").classList.add("load")}function y(){document.querySelector(".loader").classList.remove("load")}let c;function g(o,t){const s=document.querySelector(".gallery"),i=o.map(e=>`<li class="gallery-item">
                <div class="image-container">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        data-source="${e.largeImageURL}"
                        alt="${e.tags}"
                        />
                    </a>
                </div>
                <ul class="info">
                    <li class="info-item">
                        <p class="info-tag">Likes</p>
                        <p>${e.likes}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Views</p>
                        <p>${e.views}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Comments</p>
                        <p>${e.comments}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Downloads</p>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
            </li >`).join("");t>1&&c.destroy(),s.insertAdjacentHTML("beforeend",i),c=new L(".gallery a"),c.refresh()}function h(){document.querySelector("button[type='button']").classList.remove("visually-hidden")}function w(){document.querySelector("button[type='button']").classList.add("visually-hidden")}const d=document.querySelector("input"),v=document.querySelector(".form");let l,a=1;v.addEventListener("submit",async o=>{if(o.preventDefault(),l=d.value.trim(),d.value="",w(),l!=""){b(),p(),a=1;try{const t=await f(l,a);if(g(t.hits,a),Math.ceil(t.totalHits/15)==a)throw new Error("We're sorry, but you've reached the end of search results.");h()}catch(t){u.show({title:"Error",message:t.message,color:"red",position:"topRight"})}finally{y()}}else u.show({title:"Error",message:"Input field is empty. Please provide search instructions.",color:"red",position:"topRight"})});const S=document.querySelector("button[type='button']");S.addEventListener("click",async o=>{o.preventDefault(),a+=1,w(),p();try{const t=await f(l,a);g(t.hits,a);const i=document.querySelector(".gallery-item").getBoundingClientRect();if(window.scrollBy({top:i.height*2,left:0,behavior:"smooth"}),Math.ceil(t.totalHits/15)==a)throw new Error("We're sorry, but you've reached the end of search results.");h()}catch(t){u.show({title:"Error",message:t.message,color:"red",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
