
const node = document.createElement("li");
const f = document.createTextNode("First item");
node.appendChild(f)
document.getElementById("target").appendChild(node);

const node2 = document.createElement("li");
document.getElementById("target").appendChild(node2);
const s = document.createTextNode("Second item");
node2.appendChild(s)
node2.setAttribute("class","my-item")

const node3 = document.createElement("li");
document.getElementById("target").appendChild(node3);
const t = document.createTextNode("Third item");
node3.appendChild(t)

