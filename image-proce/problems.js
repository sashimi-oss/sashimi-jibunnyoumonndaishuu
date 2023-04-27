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
explain[0] = 'この原刺激を人間の眼を刺激することで、任意の色を再現できる';
explain[1] = '原色は、赤(R)・緑(G)・青(B)<br>コンピュータは加法混色<br>疲れたぁ(*´Д｀*)';
explain[2] = '原色は、シアン(C)・マゼンタ(M)・イエローY';
explain[3] = 'ディジタル画像が横M個、縦N個の画素で構成される画素の個数はMxN個になる';
explain[4] = '人間が知覚することが出来る波長範囲の電磁波を可視光という';
explain[5] = '赤として知覚できる波長よりもさらに"""長く"""、知覚できない電磁波を赤外線とよぶ';
explain[6] = '短い　＜ー　赤　ーー　波長　ーー　紫　 ー＞　長い ';
explain[7] = '色相-色の違いを示す属性<br>明度-各色相の明るさを示す属性<br>彩度-色の鮮やかさを示す属性';
explain[8] = '通常"キロ"は1000を意味するが、コンピュータでは2進数に基づくため、慣習として1024を用いる<br>307,200/1024 = 300KB';
explain[9] = '量子化は数値をあてること？';