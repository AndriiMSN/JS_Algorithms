function solve(matrix) {
    let n = matrix.length;
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push([]);
        for (let j = 0; j < n; j++) {
            a[i][j] = matrix[j][i];
        }
    }
    return a;
}
