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
explain[0] = 'DataBase Management Systemの略';
explain[1] = 'RDBMS:テーブル間を関係付けることに着目したDBMS、最も普及<br>ODBMS:オブジェクトに着目、RDBMSよりも検索性能が高い<br>XML DBMS:XMLのタグ構造を保ったままDBに格納することができる';
explain[2] = 'テーブル：行と列で構成されたRDBMSのデータ形式';
explain[3] = 'うおぉおおお';
explain[4] = '１対多とか多対多とか';
explain[5] = '子エンティティの方には〇を描く。<br>1~多にはP,0~1にはZを描く。<br>親エンティティが0~1の時は◇を親側に描く。';
explain[6] = 'PK (primary key)';
explain[7] = 'FK (foreign key)';
explain[8] = ' <img src="./img/ER図_3.jpg" alt="ER図" width="650" height="400">';