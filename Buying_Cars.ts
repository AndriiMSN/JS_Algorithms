// @TODO
function solve(prices: Array<number>, k: number): number {
    if (prices.length === 0) {
        return
    }

    let a: number = prices.length
    let c: number = 0;
    let b = prices.sort((a, b) => (a - b))

    while(b[0] <= k){
        c++;
        k = k - b[0];
        b.shift();
    }

    return c;
}

console.log(solve([]))