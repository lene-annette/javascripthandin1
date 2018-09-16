import _ from 'lodash';
import './style.css';
import Icon from './myimage.jpg';


function component(){
    let element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Handsome'], ' ');
    element.classList.add('hello');

    //Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const name = 'Kurt Wonnegut';
    setTimeout(()=> alert(`Hello from ${name}`), 1000);

    return element;
}

document.body.appendChild(component());