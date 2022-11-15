let v =parseInt(prompt('Anna vuosiluku: '));

print1 = document.querySelector('#target')

if ((v % 4 === 0 && v % 100 !== 0) || (v % 400 === 0))
{
  print1.innerHTML = 'vuosi on karkausvuosi';
}
else
{
print1.innerHTML = 'vuosi ei ole karkausvuosi';
}