
dogC = 6
let dog_list = [];

for (let i = 0; i < dogC; i++)
{
    dog_list[i] = prompt('Name: ');

}
console.log(dog_list)
a = dog_list.sort();
a.reverse();

let dogs = '<ul>';
for (let i = 0; i < dogC; i++)
{
    dogs += '<li>';
    dogs += dog_list[i];
    dogs += '</li>';
}
dogs += '</ul>';

document.querySelector('#target').innerHTML = dogs