function solve(num) {
    if (num < 0) {
        return false;
    } else if (num < 10) {
        return true;
    } else {
        let result = true;

        let a = 0;
        let b = num;
        while (b > 9) {
            b = Math.floor(b / 10);
            a++;
        }

        let first;
        let copyNumForFirst = num;
        let last;
        let copyNumForLast = num;
        while (a > 0) {
            first = Math.floor(copyNumForFirst / Math.pow(10, a));
            last = copyNumForLast % 10;
            if (first !== last) {
                return (result = false);
            }
            copyNumForFirst = copyNumForFirst % Math.pow(10, a);
            copyNumForLast = Math.floor(copyNumForFirst / 10);
            a--;
        }
        return result;
    }
}

console.log(solve(151));
