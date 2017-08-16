import _ from "lodash";
import './style.css';
import Icon from './icon.png'; //获取路径 output 输入最好的路径

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const myIcon = new Image();
    myIcon.src = Icon;
    // console.log(myIcon);
    // element.appendChild(myIcon);
    console.log(myIcon);


    return element;
}

document.body.appendChild(component());