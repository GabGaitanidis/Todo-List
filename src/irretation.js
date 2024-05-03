import { currentProject } from "./classProject.js";
import { content } from "./index.js";
import { getEditValues } from "./getEditValues.js";
import imgDel from "./trash-can-custom.png"
import { Project } from "./classProject.js";
import editImg from "./pencil-custom.png"
export const dialogEdit = document.querySelector('.dialog-task-edit');
   
export function irretation(obj, table) {
  const edit = document.getElementById('edit-btn')
  const closeEdit = document.getElementById('close-btn-edit')
  
  table.innerHTML = '';

  if (obj && table) {
    for (let task of obj) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const showEdit = document.createElement('button')
      const divDelEd = document.createElement('div')
      const delBtn = document.createElement('button');
      const delimg = new Image()
      delimg.src = imgDel
      const editimg = new Image()
      editimg.src = editImg
      showEdit.classList.add('button-img')
      delBtn.classList.add('button-img')

      delBtn.appendChild(delimg)
      showEdit.appendChild(editimg)
      td.innerHTML = `Title: ${task.title} <br> Description: ${task.description}`;

      if(task.priority == 'High'){
        td.style.borderColor = 'Red' 
      } else if (task.priority == 'Medium'){
        td.style.borderColor = 'Blue' 
      } else {
        td.style.borderColor = 'Yellow' 
      }

      delBtn.addEventListener('click', () => {
        table.removeChild(tr);
        const index = currentProject.array.indexOf(task);
        if (index !== -1) {
          currentProject.array.splice(index, 1);
          currentProject.delToLocalStorage(task)
        }
      });
      closeEdit.onclick = () => {
        dialogEdit.close()
      }
      showEdit.onclick = ((currentTask) => {
        
        return () => {
          dialogEdit.showModal();
          edit.onclick = () => {
            const divDelEd = document.createElement('div')

            const { inputTitleEdit, inputDescriptionEdit, inputSelectEdit } = getEditValues();
          currentTask.title = inputTitleEdit;
          currentTask.description = inputDescriptionEdit;
          currentTask.priority = inputSelectEdit;
          if(task.priority == 'High'){
            td.style.borderColor = 'Red' 
          } else if (task.priority == 'Medium'){
            td.style.borderColor = 'Blue' 
          } else {
            td.style.borderColor = 'Yellow' 
          }
          td.innerHTML = `Title: ${currentTask.title}<br> Description: ${currentTask.description}`;
          currentProject.delToLocalStorage(task); 

          currentProject.saveToLocalStorage(task);  
          td.classList.add('td')
          divDelEd.appendChild(showEdit)
          divDelEd.appendChild(delBtn)
          td.appendChild(divDelEd)
          
          dialogEdit.close();

          }  
        };
      })(task);
      divDelEd.classList.add('divDelEdit')
      divDelEd.appendChild(showEdit)
      divDelEd.appendChild(delBtn)
      td.appendChild(divDelEd)
      tr.appendChild(td);
      table.appendChild(tr);
      content.appendChild(table);
    }
  }
}
