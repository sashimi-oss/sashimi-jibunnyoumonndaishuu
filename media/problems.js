const problem = document.getElementsByClassName('problem');
const cor = document.getElementsByClassName('cor');
const inc = document.getElementsByClassName('inc');
const week = document.getElementsByClassName('week');
const wbt = document.getElementsByClassName('wbt');
let count = [];
// const w02 = document.getElementById('w02');
// const w03 = document.getElementById('w03');
// const wbt2 = document.getElementById('wbt2');
// const wbt3 = document.getElementById('wbt3');

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

for (let i = 0; i < week.length; i++){
  wbt[i].addEventListener('click', () => {
    week[i].scrollIntoView({behavior:"smooth"});
  })
}

// wbt1.addEventListener('click', () => {
//   w01.scrollIntoView({behavior:"smooth"});
// })

// wbt2.addEventListener('click', () => {
//   w02.scrollIntoView({behavior:"smooth"});
// })

// wbt3.addEventListener('click', () => {
//   w03.scrollIntoView({behavior:"smooth"});
// })

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
explain[30] = '・測定の対象となる、モノ・コトの大・小や多・少（広辞苑）<br>・現象，物体または物質の持つ属性で，定性的に区別でき，かつ，定量的に決定できる（JIS, 日本産業規格（旧日本工業規格）';
explain[31] = '物理現象や物質の性質について､客観的な測定方法が明確である量<br>e.g. 長さ，質量，時間，速度，濃度，圧力，温度，etc.';
explain[32] = 'モノ・コトに対する人の主観的感覚・感性の強さ<br>e.g. 音の高さ・大きさ，光の明るさ，食べ物の甘さ・苦さ，かっこよさ，美しさ，見やすさ，インパクト，etc.';
explain[33] = '心理物理量を取り扱う学問を精神（心理）物理学（Psychophysics）と呼ぶ音の聴こえを取り扱う分野は音響心理物理，聴覚心理物理と呼ばれる';
explain[34] = '物理刺激の強さをゼロから徐々に大きくすると，ある値を越えた時点で感覚を生じる';
explain[35] = '音圧レベルの強さの違いを聞き分けれるかとか';
explain[36] = '‐同じ物理刺激であっても，生じる知覚はいつも同じ心理物理量の測定方法として下記のものは適切である<br>同じ人で何度も繰り返して測定<br>多数の人に対して測定ではない<br>‐聴く人によっても異なることがある<br>大変そう！！！';
explain[37] = 'ラウドネス曲線とかグラフで見ることが出来る';
explain[38] = '‐ヒトは20～20kHz（20歳前後の若者）<br>※ただし，19Hzや21kHzが絶対に聴こえないということではない．<br><br>‐動物に対する実験も行われている<br>ネコ，イヌ：20～50kHz, コウモリ，イルカ：1ｋHz～100kHz以上<br>爬虫類，両生類は低周波のみ，魚類の可聴周波数範囲も狭い';
explain[39] = '・横軸：雑音の強さレベルを感覚レベルSL(sensational level)で表示<br>・感覚レベルは，最小可聴閾値を0dBとしたときの刺激音の音圧レベル<br><br>感覚レベルが20dB以上であれば音の強さの弁別閾は約0.4dB';
explain[40] = '音圧レベル40dB, 周波数1kHzの純音のラウドネス ＝ 1sone<br>⇒2倍の大きさに聴こえる音のラウドネスは2sone';
explain[41] = 'ある音が，周波数1kHz，音圧レベル40dBの純音と同じ大きさに聴こえる<br>⇒この音の大きさは，40phon<br>';
explain[42] = '2kHzから4kHzで感度が良い<br>1000Hz以下の感度は悪い<br>低音域と超高音域は感度が極端に悪い';
explain[43] = '低周波数帯域の変量が大きい<br>(音圧レベル目線：同じ20dBでも…)';
explain[44] = '音の高さ知覚は，音圧レベル（音の強さ）の影響を受ける．<br>メルの定義に音圧レベルが指定されているのはこのため．';
explain[45] = 'かき消される音：マスキー音(Maskee sound)<br>かき消す音：マスカー音(Masker sound)';
explain[46] = 'マスカーとマスキーが同時に呈示される場合に起こるマスキング';
explain[47] = 'マスカーとマスキーが同時に呈示されなくても起こるマスキング';
explain[48] = '聞こえにくい';
explain[51] = '基底膜の復習';
explain[52] = '音波（空気の振動）はBPF群によって周波数分析される';
explain[53] = 'マスキング量が一定になるやつ';
explain[54] = 'White Noiseを複数のBand Pass Filterに通すとWhite Noiseが狭帯域雑音（Band Noise）として分離される';
explain[55] = ' ピーク振幅より3dB低下点の周波数を上限遮断周波数 fU､下限遮断周波数 fLという<br>(縦軸はAmplitude(dB))';
explain[56] = '同様に､帯域幅が1/3オクターブの場合は1/3オクターブバンドと呼ぶ．';