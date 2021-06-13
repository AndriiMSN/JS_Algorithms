const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

for (placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', (e) => {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
})

item.addEventListener('dragend', (e) => {
    e.target.className = 'item'
})

function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    e.target.classList.add('hovered')
}
function dragleave(e) {
    e.target.classList.remove('hovered')
}
function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}