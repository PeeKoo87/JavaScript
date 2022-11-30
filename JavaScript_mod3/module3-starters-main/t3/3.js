'use strict';
const names = ['John', 'Paul', 'Jones'];

let list = document.getElementById('target');

names.forEach((item)=>{
  let li = document.createElement("li");
  li.innerHTML = item;
  list.appendChild(li);

})