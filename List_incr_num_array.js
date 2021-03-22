function solve(head) {
    debugger
    let l = head.length;
    let b = true
    for (let i = 1; i < l; i++) {
        if (!b) {
            break;
        } else if (head[i - 1] >= head[i]) {
            b = false;
        }
    }
    console.log(b)
    return b
}

let arr = [0, 1, 1, 5, 7]
console.log(solve(arr))