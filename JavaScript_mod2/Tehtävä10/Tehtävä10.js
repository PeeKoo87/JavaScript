let nof_c = parseInt(prompt('numer of candidates?'))
let candidates = []

for (let i = 0; i < nof_c; i++) {
    let candidateName = prompt('name for candidate' + (i + 1))

    let candidate = {
        name: candidateName,
        votes: 0
    }
    candidates.push(candidate);
}
console.log(candidates);

let nbrVoters = parseInt(prompt('number of voters?'))

function getIndexOfCandidate(name) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].name == name) {
            return i;
        }
    }
     // if name not found
    return false;
}
// read & calculate votes
for(let i = 0;i < nbrVoters; i++){
    let vote = prompt('voter ' + (i+1)+ ': please, type in your vote (candidate name');
    const candidateIndex = getIndexOfCandidate(vote);
    if (candidateIndex !== false){
        candidates[candidateIndex].votes++;
    }


}
console.log(candidates);
// sort candidates by vote count (descending)
candidates.sort((a,b) => b.votes - a.votes);
//print results
for (const candidate of candidates){
    console.log(`${candidate.name}: ${candidate.votes} votes` )
}