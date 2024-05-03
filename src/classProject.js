import { content } from "./index.js";
import { irretation } from "./irretation.js";
import { displayName } from "./createProject.js";
import Folder from "./folder-open-custom.png";
export const sidebar = document.querySelector('.sidebar-btns');
export let table;
export let currentProject;
export let existingProject;
export let projects;
export class Project {
  constructor(_name) {
    this.name = _name;
    this.btn = document.createElement('button');
    this.array = [];
    this.table = document.createElement('table');
    this.btn.addEventListener('click', () => {
      content.innerHTML = '';
      displayName.innerHTML = `Project: ${this.name}`;
      currentProject = this;
      table = this.table;
      content.innerHTML = '';
      irretation(this.array, table); 
    });
  }

  saveToLocalStorage(item) {
    projects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProject = projects.find(p => p.name === this.name);
    if (existingProject) {
        existingProject.array.push(item);
    } else {
        projects.push({ name: this.name, array: [item] });
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  delToLocalStorage(item) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProject = projects.find(p => p.name === this.name);
    const index = currentProject.array.indexOf(item);
    if (existingProject) {
        existingProject.array.splice(index, 1);
    } else {
      console.log('no')

        projects.splice(index, 1);
    }
    localStorage.setItem('projects', JSON.stringify(projects));
}

  static loadFromLocalStorage() {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.forEach(projectData => {
      const project = new Project(projectData.name);
      project.array = projectData.array;
    
      project.array.shift()
      
      project.btn.classList.add('buttons')
      const img = new Image()
      img.src = Folder
      const h3 = document.createElement('h3')
      h3.textContent = project.name
      
      const delBtn = document.createElement('button')
      
      delBtn.textContent = 'X'
      delBtn.classList.add('delPro')

      delBtn.addEventListener('click', () => {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects = projects.filter(p => p.name !== project.name);
        localStorage.setItem('projects', JSON.stringify(projects));
        sidebar.removeChild(project.btn);
      });
      sidebar.appendChild(project.btn);
      
      project.btn.appendChild(img)
    project.btn.appendChild(h3)
    project.btn.appendChild(delBtn)
    });
    
  }

  static clearDOM(element) {
    element.innerHTML = '';
  }
}
  


window.addEventListener('load', () => {
  Project.loadFromLocalStorage();
});
