//専門(経営情報)
let facutly_management = [["マーケティング基礎",2],["統計学Ⅰ",2],["戦略会計入門",2],
["イノベーションマネジメント",2],["会計情報とビジネス法規",2],["ロジカルシンキング",2],
["データベースマネジメント",2],["Webプログラミング",2],["統計学Ⅱ",2],["キャリア構築論",2],
["数理マネジメント",2],["システムモデリング",2],["経営分析",2],["マーケティング戦略",2],["戦略会計応用",2]];
//修学基礎
let study_basic = [["技術者と持続可能社会",2],["日本学（日本と日本人）Ａ",1],["日本学（日本と日本人）Ｂ",1],["日本文学の世界",2],["人間と哲学",2],
["法と社会",2],["こころのはたらき",2],["経済と社会",2],["グローバル社会(ヨーロッパ)",2],["グローバル社会(アジア)",2],
["芸術へのアプローチ",2],["企業の組織と戦略",2],["科学技術と社会",2],["技術者のためのコミュニケーション",2],["生涯学習特別(コミュニケーション技法)",2],
["生涯学習特別(芸術への思索)",2],["生涯学習特別(インターンシップ実習)",2],["生涯学習特別(麹の化学)",2],["生涯学習特別(地域計画演習)",2],["生涯学習特別(金沢市まちづくり)",2],["工業概論",2]]
//英語
let english = [["ビジネスコミュニケーション２",2],["ビジネスコミュニケーション１",2],["アカデミックリーディング２",2],["アカデミックプレゼンテーション",2],
["イングリッシュセミナー",2],["インテンシブイングリッシュ",2],["イングリッシュトピックス３",2]]
//数理・DS・AI
let math_ai = [["アドバンスト情報数理Ａ",2],["アドバンスト情報数理Ａ",2],["情報数理Ｂ",2],
["基礎生物",2],["アドバンスト数理Ａ",2],["アドバンスト数理Ｂ",2],
["データサイエンス基礎Ⅱ",2],["技術者のための統計",2],["ＡＩプログラミング入門",2],["ビジネスデータサイエンス",2]]
//PD
let PD_Basics = [["プロジェクトデザインⅡ",2],["グローバルＰＤ",2],["プロジェクトデザイン実践（実験）",2],["エンベデッドシステム",2]];
//教職
let teaching_job = [["教育心理学",2],["道徳教育の理論と実践",2],["特別活動の指導法",2],["特別支援教育概論",1],["学習・発達論",2],["教育課程論",2]];

//--start-- 現在の履修しているtitleを取得してくる
let spanSearch = document.querySelectorAll("td > span");
let titles = new Set(); //重複を消す

spanSearch.forEach(span => {
  if(span.getAttribute('title') !== null){
    titles.add(span.getAttribute('title').split('<br>')[0]);
  }
});
//--end--

// //コンソール出力
// titles.forEach(title => console.log(title));

//-- マップ関数を試したなれの果て--
// const specialty = new Map([["情報フロンティア大意",1],["Webデザイン",2],["経営学入門",2],["データアナリティクス",2],["ITシステム基礎",2],["プログラミング基礎",2],
// ["経営戦略と組織",2],["企業会計基礎",2],["マーケティング基礎",2],["統計学Ⅰ",2],["戦略会計入門",2],["イノベーションマネジメント",2],["会計情報とビジネス法規",2],[
//   "ロジカルシンキング",2],["データベースマネジメント",2],["Webプログラミング",2],["統計学Ⅱ",2],["キャリア構築論",2],["数理マネジメント",2],["システムモデリング",2],
//   ["経営分析",2],["マーケティング戦略",2],["戦略会計応用",2]]);

// for (let i = 0; i < facutly_management.length;i++){
//   if (title )
// }
//-- ここまで--

let count_facutly_management = 0;
let count_study_basic =0;
let count_english = 0;
let count_math_ai = 0;
let count_PD_Basics = 0;
let count_teaching_job = 0;

titles.forEach(title => {
  for(let i = 0;i < facutly_management.length;i++){
      if(title == facutly_management[i][0]){
          count_facutly_management = count_facutly_management + facutly_management[i][1];
          //console.log(title + ":");
      }
  }
});
console.log(count_facutly_management);

titles.forEach(title => {
  for(let i = 0;i <  study_basic.length;i++){
      if(title ==  study_basic[i][0]){
          count_study_basic = count_study_basic +  study_basic[i][1];
          // console.log(title + ":");
      }
  }
});
console.log(count_study_basic);

titles.forEach(title => {
  for(let i = 0;i <  english.length;i++){
      if(title ==  english[i][0]){
          count_english = count_english +  english[i][1];
          // console.log(title + ":");
      }
  }
});
console.log(count_english);

titles.forEach(title => {
  for(let i = 0;i <  math_ai.length;i++){
      if(title ==  math_ai[i][0]){
          count_math_ai = count_math_ai +  math_ai[i][1];
          //console.log(title + ":");
      }
  }
});
console.log(count_math_ai);

titles.forEach(title => {
  for(let i = 0;i <  PD_Basics.length;i++){
      if(title ==  PD_Basics[i][0]){
          count_PD_Basics = count_PD_Basics +  PD_Basics[i][1];
          //console.log(title + ":");
      }
  }
});
console.log(count_PD_Basics);

titles.forEach(title => {
  for(let i = 0;i <  teaching_job.length;i++){
      if(title ==  teaching_job[i][0]){
          count_teaching_job = count_teaching_job +  teaching_job[i][1];
          //console.log(title + ":");
      }
  }
});
console.log(count_teaching_job);