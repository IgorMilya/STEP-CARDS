import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitCardiologist extends Visit {
  constructor({
    name,
    surname,
    priority,
    department,
    goal,
    description,
    phone,
    doctor,
    pressure,
    bodyIndex,
    disease,
    age,
  }) {
    super({ name, surname, priority, goal, description, phone, doctor, department, age })
    this.pressure = pressure
    this.bodyIndex = bodyIndex
    this.disease = disease
  }

  showHealthInfo(div, pattern) {
    div.innerHTML = ` 
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Typical pressure',
   `^[0-9 -.+/]+$`,
   'pressure'
 )}
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Body mass index',
   `^[0-9 -.+/]+$`,
   'bodyIndex'
 )}

 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'text',
   'Diseases of cardiovascular',
   `^[${pattern} 0-9]+$`,
   'disease'
 )}
 

`
  }
}
