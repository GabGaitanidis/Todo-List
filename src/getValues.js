function getInputValues() {
  const inputTitle = document.getElementById('title').value;
  const inputDescription = document.getElementById('des').value;
  const inputSelect = document.getElementById('select').value;
  return { inputTitle, inputDescription, inputSelect };
}

export { getInputValues };
