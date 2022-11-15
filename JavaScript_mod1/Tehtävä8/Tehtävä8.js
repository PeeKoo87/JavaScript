let alku = parseInt(prompt("Anna alkuvuosi"));
let loppu = parseInt(prompt("Anna loppuvuosi"));

let abc = '<ul>';

for (let v= alku; v <= loppu; v++)
{
    if ((v % 4 === 0 && v % 100 !== 0) || (v % 400 === 0))
 {
  abc += '<li>';
  abc += v;
  abc += '</li>';
 }
}
abc += '</ul>';
document.querySelector('#target').innerHTML = abc