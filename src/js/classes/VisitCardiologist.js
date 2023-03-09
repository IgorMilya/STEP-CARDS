import { Visit } from './Visit.js'

export class VisitCardiologist extends Visit {
  constructor(name, phone, surname, priority, department, pressure, bodyIndex, disease, age) {
    super(name, phone, surname, priority, department)
    this.pressure = pressure
    this.bodyIndex = bodyIndex
    this.disease = disease
    this.age = age
  }

  drawHealthInfo() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` 
          <label class='modal-visit__extra hide Cardiology small'>
            <input class='modal-visit__gap placeholder' type='text' required placeholder='Typical pressure'>
          </label>
          <label class='modal-visit__extra hide Cardiology small'>
            <input class='modal-visit__gap placeholder' type='number' required placeholder='Body mass index'>
          </label>
          <label class='modal-visit__extra hide Cardiology small'>
            <input class='modal-visit__gap placeholder' type='text' required placeholder='Diseases of cardiovascular system were transferred'>
          </label> 
          <label class='modal-visit__extra hide Cardiology small' >
            <input class='modal-visit__gap placeholder' type='number' required placeholder='Age'>
          </label>`
    )
  }
}
