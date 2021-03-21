
function solve(s: string): string {
    if (s === '') {
        return '';
    }

    const a: string[] = s.split('');
    let b: string[] = [a[0]];

    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a[i - 1]) {
            b.push(a[i]);
        }
    }
    return b.join("");
}

console.log(solve('aaaaaaavcccdfggttttesfg'))