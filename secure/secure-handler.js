const square = document.getElementsByClassName('square');


for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', () => {
    location.href = locate[i];
  })
}

const locate = [];
locate[0] = './w01/index.html';
locate[1] = './w02/index.html';
locate[2] = './w03/index.html';