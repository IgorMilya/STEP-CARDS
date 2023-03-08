import './src/scss/style.scss'
import { Visit } from './src/js/classes'
import { dropdown } from './src/js/tools'

const attendDoctor = new Visit();

document.querySelector("#app").append(attendDoctor.drawModal())
dropdown();
