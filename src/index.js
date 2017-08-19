import _ from "lodash";
import './style.css';
<<<<<<< HEAD
import Icon from './1.png'; //获取路径 output 输入最好的路径
=======
import printMe from './print';
import emma from './emma';
>>>>>>> b54f4983a1d7fdf9c58978c291816db1760e9901

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const emmaem = document.createElement('em');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

<<<<<<< HEAD
    const myIcon = new Image();
    myIcon.src = Icon;
    console.log(myIcon);
    element.appendChild(myIcon);


=======
   btn.innerHTML = 'Click me and check the console!';
    emmaem.innerHTML = 'Click to show emma';
    emmaem.onclick = emma
    btn.onclick = printMe;
    element.appendChild(btn);
    element.appendChild(emmaem);
>>>>>>> b54f4983a1d7fdf9c58978c291816db1760e9901
    return element;
}

document.body.appendChild(component());