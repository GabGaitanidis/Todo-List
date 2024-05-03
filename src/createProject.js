export const createbtnpro = document.querySelector('.create-pro');
export const dialogProject = document.querySelector('.dialog-project');
const projectCreateBtn = document.querySelector('.create-project');
const closeBtnPro = document.querySelector('.close-btn-pro');
export const displayName = document.querySelector('.display-project-name');
projectCreateBtn.textContent = 'Create Project'
projectCreateBtn.classList.add('create-project')
const sidebar = document.querySelector('.sidebar')

sidebar.appendChild(projectCreateBtn)
import { projectCreation } from "./projectCreation";

export function createProject() {
  projectCreation()
}

projectCreateBtn.addEventListener('click', () => {
  dialogProject.showModal();
});

closeBtnPro.addEventListener('click', () => {
  dialogProject.close();
});

createbtnpro.addEventListener('click', () => {
  createProject();
  dialogProject.close();
});
