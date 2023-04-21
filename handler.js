const item = document.getElementsByClassName('item');

// item[0].addEventListener('click', () => {
//   location.href = './media/index.html';
// })

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', () => {
    location.href = path[i];
  })
}


const path = [];
path[0] = './media/index.html';
path[1] = './basic-information/bsinfo-handler.html';
path[2] = './php/index.html';
path[3] = './secure/secure-handler.html';
path[4] = './data-ana/index.html';
path[5] = './experts/handler.html';