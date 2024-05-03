
export function getEditValues(){
  
  const inputTitleEdit = document.getElementById('title-edit').value;
  const inputDescriptionEdit  = document.getElementById('des-edit').value;
  const inputSelectEdit  = document.getElementById('select-edit').value;
  return { inputTitleEdit , inputDescriptionEdit , inputSelectEdit  };
}