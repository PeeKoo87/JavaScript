let nof_c = parseInt(prompt('numer of candidates?'))
let candidates = []

for (let i = 0; i < nof_c; i++) {
    let cand_name = prompt('name for candidate' + (i + 1))


    let candidate = {
        name: cand_name,
        votes: 0
    }
    candidates.push(candidate);
}
console.log(candidates);