let pokemonRepository=function(){let t=[];function e(e){t.push(e)}async function n(t){let e=t.detailsUrl;try{const n=await fetch(e),o=await n.json();t.imageUrl=o.sprites.front_default,t.height=o.height,t.types=o.types}catch(t){console.error(t)}}function o(t){n(t).then((function(){!function(t){let e=$(".modal-title"),n=$(".modal-body"),o=$("<h2>"+t.name+"</h2>"),a=$("<p>"+t.height+"</p>"),i=$("<img class='pokemon-modal-image'>");i.attr("src",t.imageUrl);let r=$("<img class='pokemon-modal-image'>");r.attr("src",t.imageUrlBack);let l=document.createElement("p");t.types.forEach(((e,n)=>{n===t.types.length-1?l.innerText+=e.type.name:l.innerText+=e.type.name+", "})),e.empty(),n.empty(),e.append(o),n.append(i),n.append(r),n.append(l),n.append(a)}(t)}))}return $(document).ready((function(){$("#myInput").on("keyup",(function(){let t=$(this).val().toLowerCase();$(".search-button").filter((function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)}))}))})),{add:e,getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".list-group"),n=document.createElement("li");n.classList.add("group-list-item");let a=document.createElement("button");a.innerText=t.name,a.classList.add("btn-primary","search-button"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#pokemonModal"),n.append(a),e.append(n),a.addEventListener("click",(function(e){o(t)}))},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=84").then((function(t){return t.json()})).then((function(t){t.results.forEach((function(t){e({name:t.name,detailsUrl:t.url})}))})).catch((function(t){console.error(t)}))},loadDetails:n,showDetails:o}}();pokemonRepository.loadList().then((function(){pokemonRepository.getAll().forEach((function(t){pokemonRepository.addListItem(t)}))}));
