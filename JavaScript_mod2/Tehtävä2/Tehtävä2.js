// kysytään osanottajien määrä
let nof_p = parseInt(prompt('How many participants?'));
let participants = [];
// luetaan osanottajien nimet
for (let i = 0; i < nof_p; i++)
{
    participants[i] = prompt('Name: ');
    participants.sort();
}
console.log(participants)

// generoidaan html-lista osanottajien nimistä
let html = '<ol>';
for (let i = 0; i < nof_p; i++)
{
    html += '<li>';
    html += participants[i];
    html += '</li>';
}
html += '</ol>';
/*console.log(html)*/


document.querySelector('#target').innerHTML = html
