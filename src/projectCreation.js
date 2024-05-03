import { Project , projects} from "./classProject";
import { getInputValuesPro } from "./getInputValPro";
import Folder from "./folder-open-custom.png"
import { content } from ".";
export function projectCreation() {
  let inputTitlePro = getInputValuesPro()

  let project = new Project(inputTitlePro);
  const sidebar = document.querySelector('.sidebar-btns');
  const img = new Image()
  img.src = Folder
  const delBtn = document.createElement('button')
  delBtn.classList.add('delPro')
  delBtn.textContent = 'X'
  delBtn.addEventListener('click', () => {
    // Remove project from local storage
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects = projects.filter(p => p.name !== project.name);
    localStorage.setItem('projects', JSON.stringify(projects));
    // Remove project from UI
    sidebar.removeChild(project.btn);
  });
  project.btn.classList.add('buttons')
  const h3 = document.createElement('h3')
  h3.textContent = project.name
  project.btn.appendChild(img)
  project.btn.appendChild(h3)
  project.saveToLocalStorage();
  project.btn.appendChild(delBtn)
  sidebar.appendChild(project.btn)
}