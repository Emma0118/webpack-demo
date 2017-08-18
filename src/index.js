import _ from "lodash";
import './style.css';
import printMe from './print';
import emma from './emma';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const emmaem = document.createElement('em');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
    emmaem.innerHTML = 'Click to show emma';
    emmaem.onclick = emma
    btn.onclick = printMe;
    element.appendChild(btn);
    element.appendChild(emmaem);
    return element;
}

document.body.appendChild(component());