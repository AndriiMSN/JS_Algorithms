function solve(moves, x, y) {
    let newX;
    let newY;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "NORTH": {
                newY = newY + 1;
                break;
            }
            case "SOUTH": {
                newY = newY - 1;
                break;
            }
            case "EAST": {
                newX = newX + 1;
                break;
            }
            case "WEST": {
                newX = newX - 1;
                break;
            }
            default: {
                break;
            }
        }
    }
    if (newX !== x || newY !== y) {
        return false;
    }
    else {
        return true;
    }
}
console.log(solve(["NORTH", "EAST"], 1, 1));
