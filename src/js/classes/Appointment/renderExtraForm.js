import { editForm } from './editForm.js'

export const renderExtraForm = (boolean, department, newForm, fn) => {
  if (!!boolean) {
    editForm(department, fn.bind(department))
  } else {
    fn.bind(department, ...[newForm])()
    department.commonGapForm(newForm)
  }
}
