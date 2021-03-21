function solve(matrix: Array<Array<number>>): Array<Array<number>> {
    let n: number = matrix.length;
    let a: number[][] = [];
    
    for (let i = 0; i < n; i++) {
        a.push([]);

        for (let j = 0; j < n; j++) {
            a[i][j] = matrix[j][i]
        }
    }
    return a;
}