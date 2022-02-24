(()=>{"use strict";function t(t){const e=Array(t).fill(0);return{getLength:()=>e.length,isSunk:()=>{let t=0;return e.forEach((e=>{1===e&&(t+=1)})),t===e.length},hit:t=>{e[t]=1},isHit:t=>1===e[t]}}function e(){const e=[];for(let t=0;t<10;t+=1)e.push(Array(10).fill(0));const i=t=>{const[i,r]=t;return e[i][r]},r=t=>{const[i,r]=t;return"object"==typeof e[i][r]};return{getBoard:()=>[...e],placeShip:(i,o,l)=>{const[s,n]=i;if("horizontal"===l){if(void 0===e[s][n+o])return"error: out of bounds";for(let t=0;t<o;t+=1)if(r([s,n+t]))return"error: occupied by ship";const i=t(o);for(let t=0;t<o;t+=1)e[s][n+t]={originCoords:[s,n],ship:i}}if("vertical"===l){if(void 0===e[s+o])return"error: out of bounds";for(let t=0;t<o;t+=1)if(r([s+t,n]))return"error: occupied by ship";const i=t(o);for(let t=0;t<o;t+=1)e[s+t][n]={originCoords:[s,n],ship:i}}return"Ship placed"},isShip:r,cellStatus:i,recieveAttack:t=>{const[o,l]=t;if(r(t)){const r=e[o][l].originCoords;let s=o-r[0]+(l-r[1]);return s<0&&(s*=-1),i(t).ship.isHit(s)?"Cell is already hit":(e[o][l].ship.hit(s),"Cell marked as ship hit")}return r(t)?"Error":1!==i(t)?(e[o][l]=1,"Cell marked as water hit"):"Cell is already hit"},allSunk:()=>{for(let t=0;t<10;t+=1)for(let i=0;i<10;i+=1)if("object"==typeof e[t][i]&&!1===e[t][i].ship.isSunk())return!1;return!0},isCellHit:t=>{const[o,l]=t;if(r(t)){const r=e[o][l].originCoords;let s=o-r[0]+(l-r[1]);return s<0&&(s*=-1),i(t).ship.isHit(s)?"Cell is a hit ship":"Cell is an unhit ship"}return r(t)?"Error":1!==i(t)?"Cell is an unhit water":"Cell is a hit water"}}}function i(t,i=!1,r=!1){return{player:t,board:e(),isComputer:r,isTurn:i,sendAttack:(t,e)=>"Cell is already hit"===t.board.recieveAttack(e)?"Invalid move":(t.board.recieveAttack(e),"Valid move")}}const r=i("player1",!0,!1);i("player2",!1,!0),r.board.placeShip([0,0],4,"horizontal"),function(t){const e=document.querySelector("#root"),i=document.createElement("div");i.classList.add("gameboard-container");const r=document.createElement("div");r.classList.add("gameboard"),e.appendChild(i),i.appendChild(r);for(let e=0;e<10;e+=1)for(let i=0;i<10;i+=1){console.log(t);const o=document.createElement("div");"Cell is an unhit ship"!==t.isCellHit([e,i])&&"Cell is an unhit water"!==t.isCellHit([e,i])||o.classList.add("not-hit"),"Cell is a hit water"===t.isCellHit([e,i])&&o.classList.add("hit-water"),"Cell is a hit ship"===t.isCellHit([e,i])&&o.classList.add("hit-water"),r.appendChild(o)}}(r.board)})();