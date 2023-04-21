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
explain[0] = '復号は漢字に注意！<br>暗号化　＜ー＞　復号(サ変名詞)';
explain[1] = '鍵によって処理が個人ごとに少しだけ異なる';
explain[2] = '暗号文は正しい復号鍵でなければ復号できない。';
explain[3] = '他の人が勝手に情報を見ることが出来てしまうため。正直面倒';
explain[4] = '鍵をいちいち変える必要がない！？<br>共通鍵暗号の鍵を公開鍵暗号を使って共有することもある。<br>（ハイブリッド暗号方式）';
explain[5] = 'みんなに攻撃してもらってどんどん安全なものにしていこうという方向性';
explain[6] = '実数の鍵を用いることによって対応表をずらして暗号化する。<br>鍵はN=1などでずらす';
explain[7] = '並べ替えをするだけ？';
explain[8] = 'クレジットカード＞フィッシングサイトとか';