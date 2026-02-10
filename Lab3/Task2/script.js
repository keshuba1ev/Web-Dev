const form = document.getElementById('todo-form')
const input = document.getElementById('task-input')
const list = document.getElementById('todo-list')

const trashIcon = () => `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M9 3h6l1 2h5v2H3V5h5l1-2zm1 7h2v9h-2v-9zm4 0h2v9h-2v-9zM7 10h2v9H7v-9z"/>
</svg>
`

function addItem(text, checked = false) {
  const li = document.createElement('li')
  li.className = 'item' + (checked ? ' done' : '')

  const cb = document.createElement('input')
  cb.type = 'checkbox'
  cb.className = 'item__check'
  cb.checked = checked

  const span = document.createElement('span')
  span.className = 'item__text'
  span.textContent = text

  const del = document.createElement('button')
  del.type = 'button'
  del.className = 'item__trash'
  del.innerHTML = trashIcon()

  cb.addEventListener('change', () => {
    li.classList.toggle('done')
  })

  del.addEventListener('click', () => {
    list.removeChild(li)
  })

  li.appendChild(cb)
  li.appendChild(span)
  li.appendChild(del)
  list.appendChild(li)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (!text) return
  addItem(text, false)
  input.value = ''
  input.focus()
})
