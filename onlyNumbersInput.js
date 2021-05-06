let total = selector.querySelector('.modal-footer #tuition-fees')
let commission = selector.querySelector('.modal-footer #comission-fees')
let expected = selector.querySelector('.modal-footer #expected-fees')

let onlyNum = /^-?[0-9]?[0-9,.]+$/

let totalVal = 0
let commisionVal = 0

total.addEventListener('input', (e) => {
    let value = e.target.value
    console.log(value, totalVal)

    if (onlyNum.test(value)) {
        if (value.length > 1 && value[0] == 0) {
            e.target.value = value.split('').slice(1).join('')
            totalVal = value.split('').slice(1).join('')
            expected.value = +totalVal + +commisionVal
            return totalVal
        }
        totalVal = e.target.value
        expected.value = +totalVal + +commisionVal
        return totalVal
    } else {
        if (value == '' && totalVal.length == 1) {
            e.target.value = 0
            totalVal = 0
            expected.value = +totalVal + +commisionVal
            return totalVal
        }
        e.target.value = totalVal
        return totalVal
    }
})