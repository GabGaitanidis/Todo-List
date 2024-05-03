import { Task } from "./classTask.js";
import { createBtn } from "./dialog.js";
import { getInputValues } from "./getValues.js";
import { currentProject } from "./classProject.js";
import { irretation } from "./irretation.js";
import { table } from "./classProject.js";
// export let tasks

// export function saveTaskToLocal(task) {
//   tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   console.log(tasks)
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

createBtn.addEventListener('click', () => {
  if(currentProject){
    const { inputTitle, inputDescription, inputSelect } = getInputValues();
  let item = new Task(inputTitle, inputDescription, inputSelect); 
  currentProject.saveToLocalStorage(item); 
  currentProject.array.push(item);

  irretation(currentProject.array, table);
} else{
    alert('Create a project first')
  }
});
