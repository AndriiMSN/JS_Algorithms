const smallCupWithEar = {
    volume: 300,
    hasEar: true,
    fn: function () {
        console.log(123)
    }
};

const largeCup = {
    volume: 500
};
const { fn } = smallCupWithEar
fn()
smallCupWithEar.fn = function () { console.log(555) }
fn()
