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
explain[0] = 'それで生成した乱数をデータにXOR演算（排他的論理和）する方式。<br>(乱数がばれたら破られる、疑似乱数生成アルゴリズムの複雑さが大事)';
explain[1] = 'XORは2回やると元に戻る';
explain[2] = '後ろは壊れないため拡大しないらしい';
explain[3] = '(c言語のrand()は質が悪いらしい笑　偏りとかあるらしいから気軽に使ってはいけない。)';
explain[4] = '換え字や転置などのアイデアが使われているらしい';
explain[5] = '増えるらしい、どゆこと！？';
explain[6] = 'わかんない笑　要復習';
explain[7] = 'ー一般に平文サイズはブロックサイズを超えるため、ブロック単位の暗号化を繰り返す必要がある。<br>ーその繰り返しの方法を利用モード(mode)と呼ぶ。';
explain[8] = 'ー複数の平文ブロックの内容が同じであれば、それらの暗号文ブロックも等しくなり、内容を推測されやすくなる。<br>-暗号文ブロックの1ビットのエラー(通信の際のノイズなど)が復号によってその平文ブロック全体に広がってしまう(当たり前の現象、かくはん処理のため)。';
explain[9] = '・初期値は送受信の双方で共通の値で、公開しても良いが、毎回変更する必要がある。';
explain[10] = '最終的な暗号文は、暗号文①、暗号文②、......を連結したものになる。';
explain[11] = '最終的な平文（復号文）は平文1、平文2、......を連結したものになる。';
explain[12] = 'これはストリーム暗号であり、例えば疑似乱数を1バイトに切りつめると、平文を1バイト単位に暗号化するストリーム暗号になる。<br>睡号文ブロックのエラーが平文で拡大しない(後のブロックに伝わらない)。';
explain[13] = '当然、初期値は送受信の双方で共通である必要がある(ただし毎回変更する)。';
explain[14] = '暗号化処理と復号処理は同一の回路(またはプログラム)を利用できる。復号時は副鍵の生成を逆順に行うだけ。<br>※コンピュータの性能向上によって鍵の総当たりでの解読が可能になっているため、現在ではDESを3段重ねたTriple-DESや、新規格のAESが利用されている。';
explain[15] = '・ブロックの右32ビットを関数Fに入力し、その出カとブロックの左32ビットをXORし、左右の32ビットを交換する(最終段以外)。<br>※関数Fには、鍵スケジュール部で生成した副鍵が入力される。<br>最後に、最終転置でまたビット順が入れ替えられる。';
explain[16] = 'AES、Triple-DES、DFSの順に、送信側と受信側の双方が使えるものを選ぶと良い。';
