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

  showHealthInfo(div, pattern) {
    div.innerHTML = ` 
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Typical pressure',
   `^[${pattern} 0-9]+$`
 )}
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'number',
   'Body mass index',
   `[0-9]{3}`
 )}

 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Diseases of cardiovascular',
   `^[${pattern} 0-9]+$`
 )}
 ${createInput('modal-visit__extra small', 'modal-visit__gap placeholder', 'number', 'Age', `[0-9]{3}`)}

`
  }
}
