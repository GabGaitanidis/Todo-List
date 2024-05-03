export const dialog = document.querySelector('.dialog-task')
export const createBtn = document.getElementById('btn')
const closeBtn = document.getElementById('close-btn')
const btn = document.querySelector('.create-task')

btn.addEventListener('click', () => {
  dialog.showModal()
})

closeBtn.addEventListener('click', () => {
  dialog.close()
})

