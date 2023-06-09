const problem = document.getElementsByClassName('problem');
const cor = document.getElementsByClassName('cor');
const inc = document.getElementsByClassName('inc');
let count = [];
const w03 = document.getElementById('w03');
const wbt2 = document.getElementById('wbt2');
const wbt3 = document.getElementById('wbt3');

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

wbt2.addEventListener('click', () => {
  w02.scrollIntoView({behavior:"smooth"});
})

wbt3.addEventListener('click', () => {
  w03.scrollIntoView({behavior:"smooth"});
})


const explain = [];
explain[0] = 'DataBase Management Systemの略';
explain[1] = 'RDBMS:テーブル間を関係付けることに着目したDBMS、最も普及<br>ODBMS:オブジェクトに着目、RDBMSよりも検索性能が高い<br>XML DBMS:XMLのタグ構造を保ったままDBに格納することができる';
explain[2] = 'テーブル：行と列で構成されたRDBMSのデータ形式';
explain[3] = 'うおぉおおお';
explain[4] = '１対多とか多対多とか';
explain[5] = '子エンティティの方には〇を描く。<br>1~多にはP,0~1にはZを描く。<br>親エンティティが0~1の時は◇を親側に描く。';
explain[6] = 'PK (primary key)';
explain[7] = 'FK (foreign key)';
explain[8] = ' <img src="./img/ER図_3.jpg" alt="ER図" width="650" height="400">';
explain[9] = '正規化(normalization)<br>※冗長：長くて無駄のある状態<br>◼ 第１～第５正規化までの過程があるが、通常は第３正規化まで行われていればよい';
explain[10] = '※ユニークにするために、主キーは連番にすることが多い';