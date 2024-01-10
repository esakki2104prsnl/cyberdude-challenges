(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=["esakki2104prsnl","Vk2401","suriyamassmsd","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","jeya-rosini","swethadsalvatore","mshajid","muthuakalya","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp","muthukumarimoorthi"];function c(n){const r=new XMLHttpRequest;r.onreadystatechange=function(){if(this.readyState===4&&this.status===200){const s=JSON.parse(r.responseText),a=document.getElementById("card"),e=document.createElement("div"),t=document.createElement("div");e.className="user-card",e.innerHTML=`
    <img src="${s.avatar_url}"  alt="${s.login}-image" class="img">
      <h3 class="username">${s.name} </h3>
    <span class="role">Junior Full Stack Engineer</span>
       <span class="location">${s.location}</span>
       `,t.innerHTML=`
       <button
       class="button-style"
     >
       <a href="${s.html_url}" target="_blank">Github Home</a>
     </button>
     <button
       class="button-style"
     >
       <a href="${s.html_url}/cyberdude-challenges" target="_blank"
         >CyberDude Challenges</a
       >
     </button>
       `,a.append(e),e.append(t)}},r.open("GET",`https://api.github.com/users/${n}`),r.send()}i.forEach(n=>c(n));
