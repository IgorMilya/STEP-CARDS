import { editForm } from './editForm.js'

export const renderExtraForm = (boolean, department, newForm, fn, id) => {
  if (!!boolean) {
    editForm(department, fn.bind(department), id)
  } else {
    fn.bind(department, ...[newForm])()
    department.commonGapForm(newForm)
  }
}
