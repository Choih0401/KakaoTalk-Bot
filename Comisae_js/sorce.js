function response(room, msg, sender, isGroupChat, replier, ImageDB) {
var string = msg;
var strArray=string.split('-');
var a1=['수학', '음악', '창체' ,'운동과 건강', '컴퓨터 네트워크' , '영어A',  '디자인일반'];
var a2=['국어A', '수학', '보건','컴퓨터구조', '프로그래밍', '프로그래밍', '통합사회B'];
var a3=['컴퓨터시스템일반','컴퓨터시스템일반','영어A','통합사회C','디자인일반','국어A','동아리'];
var a4=['국어B', '컴퓨터구조','프로그래밍','프로그래밍','통합사회A','영어B','운동과 건강'];
var a5=['컴퓨터 네트워크', '컴퓨터 네트워크', '컴퓨터 시스템 일반', '컴퓨터 시스템 일반', '수학'];
if(msg == "/점액"){
replier.reply("점액?점액?점액?정액이 점액이야?");
}
if(msg == "/종민정"){
replier.reply("ㅋ");
}
    if (msg == "/오늘") {
        var day = new Date();
        replier.reply("오늘은 " + (day.getMonth() + 1) + "월 " + day.getDate() + "일 입니다.");
    }
    if (msg == "/시간") {
        var day = new Date();
        replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
    }
    if(msg == "/새우"){
var sa = ['절지동물문 십각목 장미아목을 통틀어 이르는 말. 일부 종과 대부분의 유생은 플랑크톤이기도 하다. 새우가 아닌데도 새우라는 오해를 받는 것도 있다.', '새우는 알로 번식한다.', '알을 헤엄다리 밑에 품고 다니면서 산소를 공급해주다가 알이 충분히 성숙하면 물에 풀어서 내보낸다.', '새우의 발생은 알(3) → 노플리우스(Nauplius - 4) 유생 → 조에아(Zoea - 5) 유생 → 미시스(Mysis - 6) 유생 → 아성체(7) → 성체(1)와 같은 변태 과정을 거친다.', '이 중 알 속에서 유생 과정을 모두 거쳐 성체로 태어나는 종류를 대란형 번식, 알에서 노플리우스, 혹은 조에아 유생 단계까지 발생한 다음 태어나는 종류를 소란형이라고 한다.', '보통 민물에서 번식하는 새우는 대란형이고 기수, 혹은 바닷물에서 번식하는 새우는 소란형이다.','대란형 종류는 알을 많이 낳지 않는다. 알에서 깨어난 새끼새우(치하 - 稚蝦)는 크기만 작을 뿐 성체와 완전히 동일하며 바로 집게발을 이용해 먹이를 섭취할 수 있다.', '소란형 종류는 한 배에 몇만마리의 유생을 한꺼번에 방출하는데 이들 유생은 플랑크톤이 되어 물 속을 떠돌다가 재수가 좋아서 잡혀먹히지 않으면 성장해 새우가 된다.', '민물새우: 한국에는 생이(토하), 새뱅이, 줄새우, 징거미새우 등 총 4종류의 민물새우가 사는데,이 징거미새우의 분류가 아직 연구되지 않아서 총 몇종의 징거미가 우리나라에 사는지는 확실히 모른다.','우드 슈림프: 앞다리가 굉장히 특이하게 생겼다. 마치 부채처럼 생겼는데, 이 부채를 수류 주위에서 쫙 편 후에 먹이를 걸러먹는다. 먹이수급때문에 사육 난이도가 높다. 소란형이라 기수에서만 번식할 수 있는데 어항 안에서 번식한 사례는 보고되지 않았다.', '청소새우: 유명한 녀석이다. 바닷물고기 청소를 해주는 걸로 유명하다.', '체리새우: 외국에서는 RCS라 불리며 빨간색을 띈다. 생이새우와 같은 속으로 둘간 교잡도 가능하나, 주로 생이새우에 가까운 발색으로 2세가 나온다.', '비슈림프(Bee shrimp) : 몸에 흰색/검정색의 줄무늬가 있어서 벌(bee)처럼 생겼기 때문에 비슈림프로 부른다. 생이나 체리새우에 비해 적응력은 약해 쉽게 폐사하는 편이지만 일단 적응만 하면 사육과 번식에 큰 무리는 없다.', 'CRS: (Crystal Red Shrimp)의 약자, 흰색, 적색, 투명의 색을 가지는 아름다운 새우로 사육 난이도가 높으며, 주로 흰색의 점유율이 높을수록 상급으로 치며 가격도 그만큼 비싸다', '김종민 : 새우이다.'];

var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
var arr2 = shuffle(sa);

    replier.reply(sa[1]);
}
if(msg == "/성준"){
 replier.reply("성준 == 종민" );
}
if(msg == "/지인"){
 replier.reply("only.... (grin)");
}
if(msg=="/민정"){
replier.reply("지인 따까리");
}
if(msg == "/란경"){
replier.reply("울보(?)");
}
    if(msg == "/자리"){
        var arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
        var arr2 = shuffle(arr);
        replier.reply(arr2[0] + " " + arr2[1] + "    "  + arr2[2] + " " +arr2[3] + "    " + arr2[4] + " " +arr2[5] + "\n" +arr2[6] + " " + arr2[7] + "    "  + arr2[8] + " " +arr2[9] + "    " + arr2[10] + " " +arr2[11] + "\n" + arr2[12] + " " + arr2[13] + "    "  + arr2[14] + " " +arr2[15] + "    " + arr2[16] + " " +arr2[17] + "\n" + arr2[18] + " " + arr2[19] + "    "  + arr2[20] +  " " +arr2[21] + "    " + arr2[22] + " "+arr2[23] + "\n" + arr2[24] + " " + arr2[25]);
    }
if(msg == "/시간표"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay()

if(dayLabel == 1){
replier.reply(a1[0] + "\n" + a1[1] + "\n" + a1[2] + "\n" + a1[3] + "\n" + a1[4] + "\n" + a1[5] + "\n" +  a1[6]);
}else if(dayLabel == 2){
replier.reply(a2[0] + "\n" + a2[1] + "\n" + a2[2] + "\n" + a2[3] + "\n" + a2[4] + "\n" + a2[5] + "\n" + a2[6]);
}else if(dayLabel == 3){
replier.reply(a3[0] + "\n" + a3[1] + "\n" + a3[2] + "\n" + a3[3] + "\n" + a3[4] + "\n" + a3[5] + "\n" + a3[6]);
}else if(dayLabel == 4){
replier.reply(a4[0] + "\n" + a4[1] + "\n" + a4[2] + "\n" + a4[3] + "\n" + a4[4] + "\n" + a4[5] + "\n" + a4[6]);
}else if(dayLabel == 5){
replier.reply(a5[0] + "\n" + a5[1] + "\n" + a5[2] + "\n" + a5[3] + "\n" + a5[4] );
}else{
replier.reply("시간표가 없습니다");
}
}
if(msg == "/민규"){
replier.reply("(하하)");
}
if(msg == "/수학"){
replier.reply("수학 : 월요일, 화요일, 금요일");
}
if(msg == "/음악"){
replier.reply("음악 : 월요일");
}
if(msg == "/연극"){
replier.reply("연극 : 월요일")
}
if(msg == "/운건"){
replier.reply("운건 : 월요일, 목요일");
}
if(msg == "/네트워크"){
replier.reply("월요일, 금요일");
}
if(msg == "/영어"){
replier.reply("영어 : 월요일, 수요일, 목요일");
}
if(msg == "/디자인"){
replier.reply("디자인 : 월요일, 수요일");
}
if(msg == "/국어"){
replier.reply("국어 : 화요일, 수요일, 목요일");
}
if(msg == "/보건"){
replier.reply("보건 : 화요");
}
if(msg == "/구조"){
replier.reply("구조 : 화요일, 목요일");
}
if(msg == "/프밍"){
replier.reply("프밍 : 화요일, 목요일");
}
if(msg == "/사회"){
replier.reply("사회 : 화요일, 수요일, 목요일")
}
if(msg == "/컴시일"){
replier.reply("컴시일 : 수요일, 금요일");
}
if(msg == "/임태빈팬클럽"){
replier.reply("회장 : 종민정\n부회장 : 나지인\n.5기 : 김민규");
}
if(msg == "/월요일 시간표" || msg == "/월 시간표"){
replier.reply(a1[0] + "\n" + a1[1] + "\n" + a1[2] + "\n" + a1[3] + "\n" + a1[4] + "\n" + a1[5] + "\n" +  a1[6]);
}
if(msg == "/화요일 시간표" || msg == "/화 시간표"){
replier.reply(a2[0] + "\n" + a2[1] + "\n" + a2[2] + "\n" + a2[3] + "\n" + a2[4] + "\n" + a2[5] + "\n" + a2[6]);
}
if(msg == "/수요일 시간표" || msg == "/수 시간표"){
replier.reply(a3[0] + "\n" + a3[1] + "\n" + a3[2] + "\n" + a3[3] + "\n" + a3[4] + "\n" + a3[5] + "\n" + a3[6]);
}
if(msg == "/목요일 시간표" || msg == "/목 시간표"){
replier.reply(a4[0] + "\n" + a4[1] + "\n" + a4[2] + "\n" + a4[3] + "\n" + a4[4] + "\n" + a4[5] + "\n" + a4[6]);
}
if(msg == "/금요일 시간표" || msg == "/금 시간표"){
replier.reply(a5[0] + "\n" + a5[1] + "\n" + a5[2] + "\n" + a5[3] + "\n" + a5[4] );
}

if(msg == "/내일 시간표"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay() + 1


if(dayLabel == 1){
replier.reply(a1[0] + "\n" + a1[1] + "\n" + a1[2] + "\n" + a1[3] + "\n" + a1[4] + "\n" + a1[5] + "\n" +  a1[6]);
}else if(dayLabel == 2){
replier.reply(a2[0] + "\n" + a2[1] + "\n" + a2[2] + "\n" + a2[3] + "\n" + a2[4] + "\n" + a2[5] + "\n" + a2[6]);
}else if(dayLabel == 3){
replier.reply(a3[0] + "\n" + a3[1] + "\n" + a3[2] + "\n" + a3[3] + "\n" + a3[4] + "\n" + a3[5] + "\n" + a3[6]);
}else if(dayLabel == 4){
replier.reply(a4[0] + "\n" + a4[1] + "\n" + a4[2] + "\n" + a4[3] + "\n" + a4[4] + "\n" + a4[5] + "\n" + a4[6]);
}else if(dayLabel == 5){
replier.reply(a5[0] + "\n" + a5[1] + "\n" + a5[2] + "\n" + a5[3] + "\n" + a5[4] );
}else{
replier.reply("시간표가 없습니다");
}
}
if(msg == "/태빈"){
replier.reply("3반 실세 인척 하는 아싸");
}
if(msg == "/숙제"){
replier.reply("영어 B 학습지 채워오기\n컴퓨터시스템일반 학습지 채우기");
}
if(msg == "/하늘"){
replier.reply("빌런");
}
if(msg == "/종혁"){
replier.reply("송준혁");
}
if(msg == "/계산기"){
replier.reply("http://github.com/Choih0401/C_Calculator");
}
if(msg == "/수행" || msg == "/수행평가"){
replier.reply("사회 A 우리동네 조사하기\n컴퓨터 네트워크 VLSM\n컴퓨터구조 수행평가\n사회 C 수행평가\n탁구 개인평가\n능률보카 단어시험");
}
if(msg == "/카카오톡 봇 만들기"){
replier.reply("https://github.com/Choih0401/KakaoTalk-Bot");
}
  if(msg == "/빌런"){
var peo = ['김란경', '김태경', '나지인', '박유연', '정민정', '최자영', '강주형', '김민규', '김민수', '김종민', '문형석', '박성준', '변근우', '송준혁', '안준서', '윤홍현', '이동건', '이은성', '임태빈', '장현빈', '정규석', '정제일', '채하늘', '최보민', '최준혁', '최현우'];
var peo2 = shuffle(peo);
  replier.reply("??? : 빌런은 " + 
peo2[0]);
}
if(msg == "/보민"){
 replier.reply("유폭 부장");
}
if(msg == "/제일"){
 replier.reply("레쎄 쀼장");
}
if(msg == "Layer7" || msg == "레쎄"){
replier.reply("http://layer7.kr");
}
if(msg == "Unifox" || msg == "유니폭스"){
replier.reply("http://unifox.kr");
}
if(msg == "Teamlog" || msg == "팀로그"){
replier.reply("http://teamlog.kr")
}
if(msg == "Nefus" || msg == "네퓨즈"){
replier.reply("http://nefus.kr");
}
if(msg == "Layer7 ctf" || msg == "레쎄 씨텝"){
replier.reply("http://ctf.layer7.kr")
}
if(msg == "Emotion" || msg == "이모션"){
replier.reply("http://ernotion.kr");
}
if(strArray[0] == "선린위키"){
replier.reply("http://sunrinwiki.layer7.kr/index.php/" + strArray[1]);
}
if(strArray[0] == "나무위키"){
replier.reply("http://namu.wiki/w/" + strArray[1]);
}
if(msg == "/현우"){
replier.reply("윾사개발자");
}
  if(msg == "/도움말"){
replier.reply("/시간표 를 입력하면 오늘의 시간표를 출력시켜드립니다." + "\n" + "\n" + "/자리 를 입력하면 자리 배치표를 랜덤으로 출력시켜드립니다." + "\n" + "\n" + "/빌런 을 입력하면 빌런이 누군지 알려드립니다." + "\n" + "\n" + "/날씨 를 입력하면 날씨를 알려드립니다."  + "\n" + "\n" + "정보보호과 동아리 이름을 치면 홈페이지를 출력합니다.");
}
}

function shuffle(arr){
 if(arr instanceof Array)
 {
  var len = arr.length;
  if(len == 1) return arr;
  var i = len * 2;
  while(i > 0)
  {
   var idx1 = Math.floor(Math.random()* len);
   var idx2 = Math.floor(Math.random()* len);
   if(idx1 == idx2) continue;
   var temp = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = temp;
   i--;
  }
 }
 return arr;
}