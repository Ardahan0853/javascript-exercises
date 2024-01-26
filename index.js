

const container = document.querySelector('#container');

const pharag = document.createElement('p')

pharag.innerText = 'I am pharagraph';

pharag.classList.add('red')


pharag.style.backgroundColor = 'red'


container.appendChild(pharag);


const h3BlueText = document.createElement('h3');

h3BlueText.innerText =  'i am blue'

h3BlueText.style.backgroundColor = 'blue'

container.appendChild(h3BlueText);

const container2 = document.createElement('div')

const h1 = document.createElement('h1')

const p = document.createElement('p')

h1.innerText = "I'm in a div"

p.innerText = "ME TOO!"

container2.appendChild(h1);
container2.appendChild(p);

container.appendChild(container2);