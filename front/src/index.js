import "./scss/style.scss";
import codeURL from "./assets/code.png";

import {groupBy} from 'lodash-es';
import people from './people.js';

const managerGroups = groupBy(people, "name");

const root = document.createElement('div');
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
document.body.appendChild(root);

const img = document.createElement('img');
img.src = codeURL;
img.style = "background: #2B3A42; padding: 20px";
img.width = 32;
document.body.appendChild(img);


const button = document.createElement("button");
button.textContent = 'Open chat';
document.body.appendChild(button);

button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat.js").then(chat => chat.init())
};

if(module.hot) {
  module.hot.accept();
}
