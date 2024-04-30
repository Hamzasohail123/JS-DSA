

function numOfChar(str){
    let occur = {};
    str.split('').forEach(element => {
        if(occur.hasOwnProperty(element) === false){
            occur[element] = 1
        } else {
            occur[element]++
        }
    });
    return occur
}

let strin = 'apple';
console.log(numOfChar(strin));