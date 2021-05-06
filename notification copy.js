function solve(fullDate) {
    debugger
    if (!fullDate) return

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let time = ''
    let date = fullDate.split(" ")
    let dateYMD = date[0].split("-")
    let dateHMS = date[1].split(":")
    let setHours = +dateHMS[0] + (new Date().getTimezoneOffset() / (60 * -1))

    let messageDate = new Date(
        new Date(
            dateYMD[0], dateYMD[1] - 1, dateYMD[2],
            dateHMS[0], dateHMS[1], dateHMS[2])
            .setHours(setHours)
    )

    let messageYear = messageDate.getFullYear()
    let messageMonth = messageDate.getMonth()
    let messageDay = messageDate.getDate()
    let messageHours = messageDate.getHours()
    let messageMinutes = messageDate.getMinutes()

    let currentDate = new Date()

    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()
    let currentHours = currentDate.getHours()
    let currentMinutes = currentDate.getMinutes()

    if (currentYear > messageYear) {

        time = `${monthNames[messageMonth]} ${messageYear}` // March 2019

    } else if (currentMonth > messageMonth) {
        time = `${messageDay > 9 ? messageDay : '0' + messageDay} ${monthNames[messageMonth]} ${messageHours > 9 ? messageHours : '0' + messageHours}:${messageMinutes > 9 ? messageMinutes : '0' + messageMinutes}` // 23 March 17:22
    }
    else if ((currentMonth === messageMonth) && ((currentDay - messageDay) > 0)) {

        time = `${messageDay > 9 ? messageDay : '0' + messageDay} ${monthNames[messageMonth]} ${messageHours > 9 ? messageHours : '0' + messageHours}:${messageMinutes > 9 ? messageMinutes : '0' + messageMinutes}` // 23 March 17:22

    } else if (
        (currentDay - messageDay) === 0
    ) {

        time = `${messageHours > 9 ? messageHours : '0' + messageHours}:${messageMinutes > 9 ? messageMinutes : '0' + messageMinutes}` // 17:25

    }
    return time

}

solve("2021-03-31 20:27:59.000000")// 21:27