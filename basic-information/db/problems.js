const problem = document.getElementsByClassName('problem');
const cor = document.getElementsByClassName('cor');
const inc = document.getElementsByClassName('inc');
let count = [];

function answer(i, bool) {
  if (count[i] === 0) {
    const ans = bool ? '<p>正解です！</p>' : '<p>不正解です…</p>';
    problem[i].insertAdjacentHTML('beforeend', ans);
    problem[i].insertAdjacentHTML('beforeend', explain[i]);
    count[i]++;
  }
  console.log(count);
}


for (let i = 0; i < cor.length; i++) {
  count[i] = 0;
  cor[i].addEventListener('click', () => answer(i, true));
}

for (let i = 0; i < inc.length; i++) {
  count[i] = 0;
  inc[i].addEventListener('click', () => answer(i, false))
}

  console.log(count);

const explain = [];
explain[0] = 'りんごはりんごだから';
explain[1] = 'bananaはばななだから';