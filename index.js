import{a as p,S as b,i as d}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();p.defaults.baseURL="https://pixabay.com/api/";async function f(o,t){const s=await p.get("",{params:{q:o,key:"49577455-ade522c1ef99167d118a0e5b7",image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}});if(s.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.data}function w(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(){document.querySelector(".loader").classList.add("load")}function n(){document.querySelector(".loader").classList.remove("load")}let u;function y(o,t){const s=document.querySelector(".gallery"),i=o.map(e=>`<li class="gallery-item">
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
            </li >`).join("");t>1&&u.destroy(),s.insertAdjacentHTML("beforeend",i),u=new b(".gallery a"),u.refresh()}function h(){document.querySelector("button[type='button']").classList.remove("visually-hidden")}function L(){document.querySelector("button[type='button']").classList.add("visually-hidden")}const m=document.querySelector("input"),v=document.querySelector(".form");let l,a=1;v.addEventListener("submit",o=>{o.preventDefault(),l=m.value.trim(),m.value="",L(),l!=""?(w(),g(),a=1,f(l,a).then(t=>{n(),y(t.hits,a),h()}).catch(t=>{n(),d.show({title:"Error",message:t.message,color:"red",position:"topRight"})})):d.show({title:"Error",message:"Input field is empty. Please provide search instructions.",color:"red",position:"topRight"})});const S=document.querySelector("button[type='button']");S.addEventListener("click",o=>{o.preventDefault(),a+=1,L(),g(),f(l,a).then(t=>{n(),y(t.hits,a);const i=document.querySelector(".gallery-item").getBoundingClientRect();if(window.scrollBy({top:i.height*2,left:0,behavior:"smooth"}),Math.ceil(t.totalHits/15)==a)throw new Error("We're sorry, but you've reached the end of search results.");h()}).catch(t=>{n(),d.show({title:"Error",message:t.message,color:"red",position:"topRight"})})});
//# sourceMappingURL=index.js.map
