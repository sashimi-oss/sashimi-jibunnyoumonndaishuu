const problem = document.getElementsByClassName('problem');
const cor = document.getElementsByClassName('cor');
const inc = document.getElementsByClassName('inc');
const w02 = document.getElementById('w02');
const w03 = document.getElementById('w03');
const wbt2 = document.getElementById('wbt2');
const wbt3 = document.getElementById('wbt3');
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

wbt1.addEventListener('click', () => {
  w01.scrollIntoView({behavior:"smooth"});
})

wbt2.addEventListener('click', () => {
  w02.scrollIntoView({behavior:"smooth"});
})

wbt3.addEventListener('click', () => {
  w03.scrollIntoView({behavior:"smooth"});
})

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
explain[10] = '求心性神経は抹消から中枢へ情報を伝達、遠心性神経は中枢から抹消へ情報を伝達する神経経路を意味する。';
explain[11] = '※音のない環境でも外耳に取り付けたマイクで小さな音を収音できる';
explain[12] = '伝音性難聴‐外耳および中耳の障害に起因する難聴<br>すなわち、音波による振動を効率よく基底膜に伝えることが出来ない症状である。<br>外科手術や投薬により、比較的容易に治療することが出来る。<br>感音性難聴‐内耳（蝸牛），あるいは聴神経の障害に起因する難聴<br>周波数や音圧レベルの依存性が強く、外科手術で治療することは極めて困難である。';
explain[13] = 'かぎゅうしんけいかく、がいそくもうたいかく、かきゅう、ないそくしつじょうたい';
explain[14] = '有毛細胞は意外と発火タイミングミスるらしい、あと低周波数の方がタイミング正確だからドラムとかベースはリズムとしてもってこい';
explain[15] = '両耳間時間差や両耳間音圧レベル差を検出していることがわかっているので、これらが音源定位の知覚に極めて有力な情報であるからである';
explain[16] = 'あ～って言って、言い終わったことを知覚できるとか？そういうこと？';
explain[17] = '他には<br>‐片耳からの音にのみ応答するもの<br>‐左右耳に到達する音の時間差・音圧差に応答するもの（左右定位に関する情報<br><br>‐音の立ち上がり・立下りに応答するもの<br>‐振幅変調・周波数変調に応答するもの';
explain[18] = 'なんか良い例え聞いた気がするけど、友達の声を聞き分けれるとかだっけ？';
explain[19] = ' <h4>ブローカ野</h4>：運動性言語中枢で傷害により失語症を発症、<h4>ウェルニッケ野</h4>：言語の理解等、<h4>聴覚野</h4>など<br><br>‐大脳皮質の解剖学的区分はブロードマンの脳地図と呼ばれる<br>‐一次聴覚野は41，42番に相当';
explain[20] = '‐シルビウス溝の内側（上側頭回）に位置<br>‐中心領域は一次聴覚野（A1），吻側部（R），吻側側頭部（RT）に分類される<br>‐一次聴覚野を中心に同心円状に二次，三次聴覚野がある';
explain[21] = '右脳は音楽に対して高い応答をします。<br>‐情緒や感情の処理に関係→直観的思考や視聴覚のイメージ<br>‐情報を並列的に処理';
explain[22] = '‐モノゴトの論理や理解の処理に関係<br>‐情報を直列的に処理<br>⇒話の内容をスムーズに理解するためには，右耳に受話器をあてて，左脳で情報処理するのが良い';
explain[23] = '二次聴覚野の機能：‐音に対するゲシュタルト的パターン処理を行う<br>(前頭葉や海馬などと連携することより，音楽的知識など記憶の修飾を受ける)<br>‐音楽のおいては，旋律，律動，和声などの知覚・認知に相当';
explain[24] = '‐学習等によって，神経の応答特性が変化するのは聴覚野共通の機能。<br>三次聴覚野の機能は音楽の大域的な意味の理解などが挙げられる。<br>(二次聴覚野と同様に，他の部位との連携による複雑な処理)';
explain[25] = '聴覚野共通の機能である。';
explain[26] = 'ドイツ語で“形態”という意味';
explain[27] = '・ リンゴのドット絵を見て，それを点の集まりではなく，“リンゴ”と知覚できる．<br>・ 音楽を聴いて，それらを単音の集まりではなく，“リズムやメロディ”を知覚できる．';
explain[28] = ' // // // //　　■□□□■□□□■';
explain[29] = 'ゲシュタルトとはドイツ語で“形態”という意味．<br> “The Mirror” by Dream Theater<br>↑Metric Modulationの演奏例';