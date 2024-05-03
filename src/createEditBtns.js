export function btns(){
  let delBtn = document.createElement('button');
  let showEdit = document.createElement('button');
  showEdit.textContent = 'Edit'
  delBtn.textContent = 'Delete'; 
  return {delBtn, showEdit}
}