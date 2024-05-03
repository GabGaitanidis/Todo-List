import { getEditValues } from "./getEditValues"

export function edit(obj){
  const { inputTitleEdit , inputDescriptionEdit , inputSelectEdit  } = getEditValues()
    obj.title = inputTitleEdit
    obj.description = inputDescriptionEdit
    obj.priority = inputSelectEdit
}