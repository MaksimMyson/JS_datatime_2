
import getCurrentDateTime from './getCurrentDateTime'; 
import './style.css'; 

const div = document.createElement('div');
div.className = 'date-time'; 


div.textContent = `Поточна дата та час: ${getCurrentDateTime()}`;


document.body.appendChild(div);
