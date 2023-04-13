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
}


for (let i = 0; i < cor.length; i++) {
  count[i] = 0;
  cor[i].addEventListener('click', () => answer(i, true));
}

for (let i = 0; i < inc.length; i++) {
  count[i] = 0;
  inc[i].addEventListener('click', () => answer(i, false))
}

console.log(Math.floor(Math.random() * 2));

const explain = [];
explain[0] = '音波（弾性波）またはそれによって起こされる聴覚的感覚<br>※すべての音波（弾性波）が聴覚的感覚を起こすとは限らない　e.g. 超音波';
explain[1] = 'その通り';
explain[2] = '周波数の上昇下降に伴い，循環的で共通する性質を持つ“高さ” “音楽的（調性的）高さ”とも呼ばれる';
explain[3] = '‐基部（手前側）が高周波数に同調　　‐先端（奥側）が低周波数に同調';
explain[4] = '奥に進むにしたがって幅が広く薄い';
explain[5] = 'それは外有毛細胞。内有毛細胞は周波数の情報を脳に伝える役割を担っている';
explain[6] = 'これを位相固定という。不応期は聴神経が一度発火してからもう一度発火するまでに要する時間のこと<br>0.001s(1msec)';
explain[7] = 'これを斉射説（せいしゃせつ）という';