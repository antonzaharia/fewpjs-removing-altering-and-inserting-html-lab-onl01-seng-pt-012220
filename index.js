let element = document.createElement('div');
document.body.appendChild(element)
let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)
element.className = 'alert';
ul.removeChild(ul.querySelector('li:nth-child(2)'))


main = document.getElementById('main');
main.remove();
