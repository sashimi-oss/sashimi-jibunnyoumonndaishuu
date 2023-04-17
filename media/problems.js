const problem = document.getElementsByClassName('problem');
const cor = document.getElementsByClassName('cor');
const inc = document.getElementsByClassName('inc');
const w02 = document.getElementById('w02');
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
explain[8] = '蝸牛内の基底膜を伝搬する進行波によって音の高さ知覚に関する情報を伝達する';
explain[9] = 'トノトピーについて';
explain[10] = '求心性神経は抹消から中枢へ情報を伝達、遠心性神経は中枢から抹消へ情報を伝達';
explain[11] = '※音のない環境でも外耳に取り付けたマイクで小さな音を収音できる';
explain[12] = '伝音性難聴‐外耳および中耳の障害に起因する難聴<br>感音性難聴‐内耳（蝸牛），あるいは聴神経の障害に起因する難聴';
explain[13] = 'かぎゅうしんけいかく、がいそくもうたいかく、かきゅう、ないそくしつじょうたい';
explain[14] = '有毛細胞は意外と発火タイミングミスるらしい、あと低周波数の方がタイミング正確だからドラムとかベースはリズムとしてもってこい';
explain[15] = '両耳間時間差や両耳間音圧レベル差を検出するすることによって可能にしている。';
explain[16] = 'あ～って言って、言い終わったことを知覚できるとか？そういうこと？';
explain[17] = '⇒周波数分析の完成，音源定位の強化，音知覚の機能単位の形成';
explain[18] = 'なんか良い例え聞いた気がするけど、友達の声を聞き分けれるとかだっけ？';