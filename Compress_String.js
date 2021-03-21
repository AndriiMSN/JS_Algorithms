function solve(s) {
    if (s === '') {
        return '';
    }
    const a = s.split('');
    let b = [a[0]];
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a[i - 1]) {
            b.push(a[i]);
        }
    }
    return b.join("");
}
console.log(solve('aaaaaaavcccdfggttttesfg'));
