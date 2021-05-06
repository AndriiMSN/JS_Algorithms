function getAge(studentsYear, startMonth, studentDay) {
    debugger
    const months = ['January', 'February',
        'March', 'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December']
    let age = new Date().getFullYear() - +studentsYear
    let month = months.indexOf(startMonth)
    if (new Date().getMonth() - month === 0) {
        if (new Date().getDate() < +studentDay) {
            age--
        }
    } else if (new Date().getMonth() < month) {
        age--
    }
    return age.toString()
}
console.log(
    getAge('1998', 'June', '3'));