module.exports = function check(str, bracketsConfig) {
let braketOpen = [];
let braketPair = {};
let braketSome = [];

for (let i of bracketsConfig){
    braketOpen.push(i[0]);
    braketPair[i[1]] = i[0];
    if (i[1] === i[0]) {
        braketSome.push(i[0])
    }
}

let stack = [];
for (let i = 0; i < str.length; i++){
    let currCh = str[i];
    let topItem = stack[stack.length - 1];

    if (braketOpen.includes(currCh)) {
        if (braketSome.includes(currCh) && currCh === topItem) {
        // if (currCh === topItem) {
            stack.pop(currCh);
        } else {
            stack.push(currCh);
        }
    } else {
        if (stack.length === 0 ) return false;
        if (braketPair[currCh] === topItem) {
            stack.pop();
        } else {
            return false;
        }
    }
}
return stack.length === 0;
}
