function solve(a, b) {
    debugger
    if (a.length === 0 && b.length !== 0) {
        return b
    }
    if (b.length === 0 && a.length !== 0) {
        return a
    }
    if (b.length === 0 && a.length === 0) {
        return []
    }

    let ar = []
    while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
            ar.push(a[0])
            a.shift()
        } else {
            ar.push(b[0])
            b.shift()
        }
    }
    if (a.length > 0) {
        return ar.concat(a)
    } else if (b.length > 0) {
       return  ar.concat(b)
    }
    return ar
}

console.log(solve([1,2,3], [1, 4, 6]))