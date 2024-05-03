export class Task {
  constructor(_title, _description, _priority) {
    this.title = _title;
    this.description = _description;
    this.priority = _priority;
    this.createdAt = new Date(); 
    
  }
}