function solve(fullDate, diff = 3) {
    if (!fullDate) return

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let time = ''
    // Grinvich
    let currentDate = new Date(
        new Date().getTime() + ((new Date().getTimezoneOffset() / 60)) * 1000 * 60 * 60
    )
    // Differnce with server
    //     let currentDate = new Date(
    //         new Date().getTime() - ((new Date().getTimezoneOffset() / 60 + 1) + +diff) * 1000 * 60 * 60
    // )
    let date = fullDate.split(" ")
    let dateYMD = date[0].split("-")
    let dateHMS = date[1].split(":")


    if (currentDate.getFullYear() > +dateYMD[0]) {
        time = `${monthNames[+dateYMD[1] - 1]} ${dateYMD[0]}` // March 2019
    } else if (currentDate.getMonth() + 1 > (+dateYMD[1])) {
        time = `${dateYMD[2]} ${monthNames[+dateYMD[1] - 1]}`
    } else if ((currentDate.getMonth() + 1 >= (+dateYMD[1])) && ((currentDate.getDate() - +dateYMD[2]) > 0)) {
        time = `${dateYMD[2]} ${monthNames[+dateYMD[1] - 1]}` // 23 March
    } else if
        ((currentDate.getDate() - +dateYMD[2]) === 0
        &&
        (currentDate.getHours() - +dateHMS[0]) > 1) {
        time = `${currentDate.getHours() - +dateHMS[0]} h` // 22 h
    } else if (
        ((currentDate.getHours() - +dateHMS[0]) === 1)
    ) {
        if ((currentDate.getMinutes() + 60 - +dateHMS[1]) < 60) {
            time = `${(currentDate.getMinutes() + 60 - +dateHMS[1])} m`
        } else {
            time = '1 h'
        }
    } else if (
        ((currentDate.getHours() - +dateHMS[0]) === 0)
        &&
        ((currentDate.getMinutes() - +dateHMS[1]) > 0)) {
        time = `${currentDate.getMinutes() - +dateHMS[1]} m` // 32 m
    } else {
        time = 'just now'
    }
    return time
}

console.log(solve("2021-03-31 11:21:40.000000"))

