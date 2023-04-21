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
explain[0] = 'sonotoori';
explain[1] = 'bananaはばななだから';
explain[2] = '・秘匿性(confidentiality)(機密性・守秘性)ー個人情報などの秘密を守れること。暗号による。<br>・完全性(integrity(一貫性)ー情報の偽造や改ざん(されてもばれる)、破壊を防ぐこと。認証による。<br>・可用性(availabity)-情報や資源が必要なときに利用できること。（安全のために使えなくすることはセキュリティとはいえない）である';
explain[3] = 'ransomware:身代金要求型マルウェァ';
explain[4] = '完全性と可用性の侵害にあたるます';
explain[5] = '秘匿性！';
explain[6] = '秘匿性の侵害にあたる。認証情報等個人情報の漏洩';
explain[7] = '口座残高の不正な変更';
explain[8] = '自分以外に迷惑かかる可能性あり';
explain[9] = '可用性は別の道具を使用？';
explain[10] = '処理が早いのが特徴！？<br>公開鍵暗号とよく併用される。';
explain[11] = '証拠とかになりうる？';
explain[12] = 'デジタル署名は逆変換処理';
explain[13] = '関数だよ<br>入力に対応する適当な値（ハッシュ値）が返ってくるよ<br>入力する内容が同じであれば、同じ値が返ってくるよ';
explain[14] = 'すげぇ';
explain[15] = '大事！';
explain[16] = 'httpsなど。<br>みんなが使えるっていうこと？';