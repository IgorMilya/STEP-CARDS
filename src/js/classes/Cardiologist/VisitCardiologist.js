import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitCardiologist extends Visit {
  constructor(name, phone, surname, priority, department, pressure, bodyIndex, disease, age) {
    super(name, phone, surname, priority, department)
    this.pressure = pressure
    this.bodyIndex = bodyIndex
    this.disease = disease
    this.age = age
  }

  showHealthInfo() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` 
 ${createInput(
   'modal-visit__extra hide Cardiology small',
   'modal-visit__gap placeholder',
   'text',
   'Typical pressure'
 )}
 ${createInput(
   'modal-visit__extra hide Cardiology small',
   'modal-visit__gap placeholder',
   'number',
   'Body mass index'
 )}

 ${createInput(
   'modal-visit__extra hide Cardiology small',
   'modal-visit__gap placeholder',
   'text',
   'Diseases of cardiovascular'
 )}
 ${createInput('modal-visit__extra hide Cardiology small', 'modal-visit__gap placeholder', 'number', 'Age')}

`
    )
  }
}
