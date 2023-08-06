const scriptName = "신청t";
const enteru = "\u200b".repeat(500);
const FS = FileStream;
const path = '/sdcard/hamsterbot/dshs/dshs.txt';
const path2 = '/sdcard/hamsterbot/dshs/2/selfstudyconvert.txt';
const path3 = '/sdcard/hamsterbot/dshs/2/weekenddb.txt';
const path4 = '/sdcard/hamsterbot/dshs/1/selfstudyconvert.txt';
const path5 = '/sdcard/hamsterbot/dshs/1/weekenddb.txt';
const path6 = '/sdcard/hamsterbot/dshs/3/selfstudyconvert.txt';
const path7 = '/sdcard/hamsterbot/dshs/3/weekenddb.txt';
const dpath = '/sdcard/hamsterbot/dshs/dobe/dobe.json';
const dpath2 = '/sdcard/hamsterbot/dshs/dobe/dobeban.json';
const tpath = '/sdcard/hamsterbot/dshs/auto/test.json';


const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient("번호", "https://example.com")
Kakao.login('아이디', '비밀번호');// 카카오링크를 보낼 계정의 이메일과 비밀번호




importClass(org.jsoup.Jsoup);
if (!FS.read(dpath)) FS.write(dpath,JSON.stringify({},null,3));
if (!FS.read(dpath2)) FS.write(dpath2,JSON.stringify({},null,3));
if (!FS.read(tpath)) FS.write(tpath,JSON.stringify({},null,3));

var crnames1= ["(설정 안됨)","독서실","부모외출","병외출","종교외출","기타외출","R&E연구외출","외박","기숙사 호실","다산관 대강당","[일신4층]독서실","[일신2층]1-1교실","[일신2층]1-2교실","[일신2층]1-3교실","[일신2층]1-4교실","[일신2층]1-5교실","[일신2층]1-6교실","[일신1층]시청각실","[다산7층](707)천문학실험실","[다산7층](708)천체동아리실","[다산7층](710)대기과학실험실","[다산7층](705)무한상상실","[다산6층](607)화학실험실","[다산6층](608)화학실험실","[다산4층](412)물리소규모실험실","[다산3층](302)일반물리실험실","[다산2층](202)박테리아배양실","[다산2층](202)동물세포배양실","[다산2층](203)일반생명과학실험실","[다산2층](206)현미경실험실","[다산2층](207)생물실험실","[다산2층](209)전자현미경실","[다산1층](103)일반화학실험실","[다산1층](104)무기화학실험실","[다산1층](108)화학기기분석실","[탐의2층]중회의실","[다산6층](606)융합실험실","[일신2층]다목적강의실1(체육관쪽)","[일신2층]다목적강의실2(1학년2반앞)","[일신2층]체육관"];
var crnames2= ["(설정 안됨)","독서실","부모외출","병외출","종교외출","기타외출","R&E연구외출","외박","기숙사 호실","다산관 대강당","[일신4층]독서실","[일신3층]Online Study Room","[일신3층]Open Study Room","[일신1층]시청각실","[다산7층](707)천문학실험실","[다산7층](708)천체동아리실","[다산7층](710)대기과학실험실","[다산7층](705)무한상상실","[다산6층](607)화학실험실","[다산6층](608)화학실험실","[다산5층](506)Group Study Room 1","[다산5층](505)Group Study Room 2","[다산5층](504)Group Study Room 3","[다산5층](503)Group Study Room 4","[다산5층](513)2-1교실","[다산5층](512)2-2교실","[다산5층](511)2-3교실","[다산5층](510)2-4교실","[탐의5층](집현전)2-5","[탐의5층](훈민정음)2-6","[다산4층](412)물리소규모실험실","[다산3층](302)일반물리실험실","[다산2층](202)박테리아배양실","[다산2층](202)동물세포배양실","[다산2층](203)일반생명과학실험실","[다산2층](206)현미경실험실","[다산2층](207)생물실험실","[다산2층](209)전자현미경실","[다산1층](103)일반화학실험실","[다산1층](104)무기화학실험실","[다산1층](108)화학기기분석실","[탐의2층]중회의실","[다산6층](606)융합실험실","[일신2층]체육관"];
var crnames3= ["(설정 안됨)","독서실","부모외출","병외출","종교외출","기타외출","R&E연구외출","외박","기숙사 호실","다산관 대강당","[일신4층]독서실","[일신3층]세미나실1","[일신3층]세미나실2","[일신3층]세미나실3","[일신3층]세미나실4","[일신3층]세미나실5","[일신3층]세미나실6","[일신3층]세미나실7","[일신1층]시청각실","[다산7층](707)천문학실험실","[다산7층](708)천체동아리실","[다산7층](710)대기과학실험실","[다산7층](705)무한상상실","[다산6층](607)화학실험실","[다산6층](608)화학실험실","[다산4층](412)물리소규모실험실","[다산3층](302)일반물리실험실","[다산2층](202)박테리아배양실","[다산2층](202)동물세포배양실","[다산2층](203)일반생명과학실험실","[다산2층](206)현미경실험실","[다산2층](207)생물실험실","[다산2층](209)전자현미경실","[다산1층](103)일반화학실험실","[다산1층](104)무기화학실험실","[다산1층](108)화학기기분석실","[탐의4층](베이징)3-6","[탐의3층](수학)3-1","[탐의3층](수학)3-2","[탐의3층](수학)3-3","[탐의3층](수학)3-4","[탐의3층](수학)3-5","[탐의2층]중회의실","[다산6층](606)융합실험실","[일신2층]체육관"];
var crnamew1a= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신1층]시청각실","[일신2층]다목적강의실(세미나실)","[다산1층]대강당","[일신2층]체육관","[일신2층]1-1","[일신2층]1-2","[일신2층]1-3","[일신2층]1-4","[일신2층]1-5","[일신2층]1-6","[다산5층](510)2-4","[다산5층](511)2-3","[다산5층](512)2-2","[다산5층](513)2-1","[탐의5층](집현전)2-5","[탐의5층](훈민정음)2-6","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산5층](506)Group Study Room 1","[다산5층](505)Group Study Room 2","[다산5층](504)Group Study Room 3","[다산5층](503)Group Study Room 4","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)","[일신2층]미술실","[일신1층]음악실","[일신1층]여명스토리","[기숙]무용연습실","[일신3층]도서관"];
var crnamew1b= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신1층]시청각실","[일신2층]다목적강의실(세미나실)","[다산1층]대강당","[일신2층]체육관","[일신2층]1-1","[일신2층]1-2","[일신2층]1-3","[일신2층]1-4","[일신2층]1-5","[일신2층]1-6","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)","[기숙]무용연습실"];
var crnamew2a= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신3층]Online Study Room","[일신3층]Open Study Room","[일신1층]시청각실","[일신2층]다목적강의실(세미나실)","[다산1층]대강당","[일신2층]체육관","[일신2층]1-1","[일신2층]1-2","[일신2층]1-3","[일신2층]1-4","[일신2층]1-5","[일신2층]1-6","[다산5층](510)2-4","[다산5층](511)2-3","[다산5층](512)2-2","[다산5층](513)2-1","[탐의5층](집현전)2-5","[탐의5층](훈민정음)2-6","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산5층](506)Group Study Room 1","[다산5층](505)Group Study Room 2","[다산5층](504)Group Study Room 3","[다산5층](503)Group Study Room 4","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)","[일신2층]미술실","[일신1층]음악실","[일신1층]여명스토리","[기숙]무용연습실","[일신3층]도서관"];
var crnamew2b= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신3층]Online Study Room","[일신3층]Open Study Room","[일신1층]시청각실","[일신2층]다목적강의실(세미나실)","[다산1층]대강당","[일신2층]체육관","[다산5층](510)2-4","[다산5층](511)2-3","[다산5층](512)2-2","[다산5층](513)2-1","[탐의5층](집현전)2-5","[탐의5층](훈민정음)2-6","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산5층](506)Group Study Room 1","[다산5층](505)Group Study Room 2","[다산5층](504)Group Study Room 3","[다산5층](503)Group Study Room 4","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)","[기숙]무용연습실"];
var crnamew3a= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신3층]세미나실1","[일신3층]세미나실2","[일신3층]세미나실3","[일신3층]세미나실4","[일신3층]세미나실5","[일신3층]세미나실6","[일신3층]세미나실7","[일신1층]시청각실","[다산1층]대강당","[일신2층]체육관","[탐의3층]3-1(수학교실1)","[탐의3층]3-2(수학교실2)","[탐의3층]3-3(수학교실3)","[탐의3층]3-4(수학교실4)","[탐의3층]3-5(수학교실5)","[탐의4층]3-6(베이징)","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)"];
var crnamew3b= ["","독서실","부모외출","병외출","종교외출","기타외출","R&E외출","외박","기숙사 호실","[일신3층]세미나실1","[일신3층]세미나실2","[일신3층]세미나실3","[일신3층]세미나실4","[일신3층]세미나실5","[일신3층]세미나실6","[일신3층]세미나실7","[일신1층]시청각실","[다산1층]대강당","[일신2층]체육관","[탐의3층]3-1(수학교실1)","[탐의3층]3-2(수학교실2)","[탐의3층]3-3(수학교실3)","[탐의3층]3-4(수학교실4)","[탐의3층]3-5(수학교실5)","[탐의4층]3-6(베이징)","[다산1층]화학R&E실(101)","[다산1층]일반화학실험실(103)","[다산1층]무기화학실험실(104)","[다산1층]유기화학실험실(107)","[다산1층]화학기기분석실(108)","[다산2층]모델생물실(201)","[다산2층]박테리아배양실(202)","[다산2층]일반생물학실험실(203)","[다산2층]현미경실험실(206)","[다산2층]생화학실험실(207)","[다산2층]전자현미경실(209)","[다산3층]일반물리실험실(302)","[다산6층]화학실험실(607)","[다산6층]화학실험실(608)","[다산7층]천문학실험실(707)","[다산7층]천체동아리실(708)","[다산7층]대기과학실험실(710)","[다산7층]무한상상실(705)","[기숙]무용연습실"];


function response(room, msg, sender, isGroupChat, replier, ImageDB) {

     if(isGroupChat==false){
      if(!msg.startsWith("/신규등록")&&msg!="/help"&&msg!="/명령어"&&(!sender.startsWith("DSHS")||sender.length!=14)) replier.reply("방 나가기를 눌러 나가주시고 닉네임 설정에 유의하여 다시 1대1채팅을 들어와주세요.\n\n⚠️신규 유저의 경우, 닉네임을\nDSHS + 복잡한 숫자 10자리로 해주세요.\nEx) DSHS0123456789 (띄어쓰기없음)\n\n⚠️기존에 이미 등록된 유저의 경우, 기존 닉네임으로 변경해주세요.\n기존 닉네임을 확인하시려면 /신규등록 절차를 다시 진행해주세요."); //닉네임이 올바르지 않음   
      else{
        var wtime=Date.now();
      var dobe=JSON.parse(FS.read(dpath));
      var dobeban=JSON.parse(FS.read(dpath2));
      if(dobeban[sender]!=undefined&&wtime-dobeban[sender]<=3600000){
        replier.markAsRead();
        return 0;
        }
      else if(dobeban[sender]!=undefined&&wtime-dobeban[sender]>3600000){
        delete dobe[sender];
        delete dobeban[sender];
        dobe[sender]=1;
        dobe["Timer"+sender]=wtime;
        }
      else if(dobe[sender]==undefined){
        dobe[sender]=1;
        dobe["Timer"+sender]=wtime;
         } 
      else if(dobeban[sender]==undefined&&wtime-dobe["Timer"+sender]<5000){
        if(dobe[sender]>=5){
          dobeban[sender]=wtime;
          dobe[sender]=0;
          delete dobe["Timer"+sender];
          replier.reply("b방장봇방",sender+"가 도배해서 막았어요.");
          replier.reply("도배가 감지되어 사용이 1시간 제한됩니다.");
          return 0;
        }
        else{
          dobe[sender]+=1;
            }
      }
      else if(wtime-dobe["Timer"+sender]>=5000){
        dobe[sender]=1;
        dobe["Timer"+sender]=wtime;
        }
        FS.write(dpath,JSON.stringify(dobe,null,3));
      FS.write(dpath2,JSON.stringify(dobeban,null,3));     
        
      try{
      if(msg.startsWith("/신규등록")){
        if(msg.split(" ").length<=2) replier.reply("잘못된 입력입니다. 다시 입력해주세요.\n Ex) /신규등록 20201120 20201120");
        else if(getUserIDRegistered(msg.split(" ")[1].replace(/(|)/g,""))) replier.reply("⛔ 이미 등록된 아이디입니다."+getUserTalkNick(msg.split(" ")[1].replace(/(|)/g,""),msg.split(" ")[2].replace(/(|)/g,"")));
        else if (!sender.startsWith("DSHS")||sender.length!=14) replier.reply("우측 상단의 세줄 버튼을 누른 뒤 방 나가기를 눌러 나가주시고 닉네임 설정에 유의하여 다시 1대1채팅을 들어와주세요.\n\n⚠️닉네임을\nDSHS + 복잡한 숫자 10자리로 해주세요.\nEx) DSHS0123456789 (띄어쓰기없음)"); //닉네임이 올바르지 않음   
        
        else if(getUserNickRegistered(sender)) replier.reply("⛔ "+sender+"은 이미 사용중인 닉네임입니다. 방을 나간 뒤 다른 닉네임으로 설정하여 들어와주세요.");
       
        else{
          var ID=msg.split(" ")[1].replace(/(|)/g,"");
          var PW=msg.split(" ")[2].replace(/(|)/g,"");
          var token=doLogin([ID,PW]);
          var name=getName(token);
          if(name=="") replier.reply("⛔ 로그인을 실패하였습니다. 아이디와 비밀번호를 정확하게 입력했는지 확인해주세요.");
          else{
            var temp=JSON.parse(FS.read(path));
            temp.push({
              "User": sender,
              "ID": ID,
              "PW": PW,
              "token": token,
              "flag": [false,false,false],
              "num1": [],
              "num2": []
            });
            FS.write(path,JSON.stringify(temp,null,4));
            replier.reply(name+"님 등록 완료!");
          }
        }
      }
      
        else if(!getUserNickRegistered(sender)&&(msg.startsWith("/자습")||msg.startsWith("/주말")||msg.startsWith("/리셋")||msg.startsWith("/벌점")||msg.startsWith("/관리자"))){
          replier.reply("학생현황관리시스템 /신규등록을 먼저 진행해주세요.😠\n\n⚠️만약 기존에 이미 등록하셨을 경우, 기존 닉네임으로 변경해주세요.\n기존 닉네임을 확인하시려면 /신규등록 절차를 다시 진행해주세요.");
          }
      else{
      if(msg=="/리셋"){
        replier.reply("재로그인 시도 중...");
        var info=getUserInfo(sender);
        var ID=info[0];
        var PW=info[1];
        var temp=JSON.parse(FS.read(path));
    var index=temp.findIndex(isUser,sender);
    temp[index].token=doLogin([ID,PW]);
    FS.write(path,JSON.stringify(temp,null,4));
    var name=getName(temp[index].token);
    Log.e("⛔리셋 발생⛔\n"+sender+" 님 리셋 발생.");
    replier.reply("b방장봇방","⛔리셋 발생⛔\n"+sender+" 님 리셋 발생.");
    replier.reply(name+"님 재로그인 완료!");
      }
      else if(msg=="/명령어"||msg=="/help"){
        Kakao.sendLink(sender, {
          link_ver: '4.0', 
          template_id: 54641,
          template_args:{
            'path': "?kakaomoim://post?referer=b&chat_id=18315335781416738&post_id=tJFNVkbNPJ9qoKMXyn3H"
          }
        },'custom');
        replier.markAsRead();
      }
      else if(msg==("/자습상태")||msg=="/자습 상태"){
        replier.reply("불러오는 중..");
        replier.reply(doSelfStudyCheck(false,true,sender));
      }
      else if(msg==("/벌점o")){
        replier.reply("불러오는 중..");
        replier.reply(doPointCheck(sender));
      }
      else if(msg==("/벌점")){
        replier.reply("불러오는 중..");
        doPointCheckN(sender);
      }
      else if(msg=="/주말상태"||msg=="/주말 상태"){
        replier.reply("불러오는 중..");
        replier.reply(doWeekendCheck(false,true,sender));
      }
      else if((msg=="/자습번호"||msg=="/자습 번호")){
  
        replier.reply("불러오는 중..");
        var number=getUserInfo(sender)[0];
    if(number.startsWith("2021")) var iinfo="《교실 목록》\n(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E연구외출\n(7) 외박\n(8) 기숙사 호실\n(9) 다산관 대강당\n(10) [일신4층]독서실\n(11) [일신2층]1-1교실\n(12) [일신2층]1-2교실\n(13) [일신2층]1-3교실\n(14) [일신2층]1-4교실\n(15) [일신2층]1-5교실\n(16) [일신2층]1-6교실\n(17) [일신1층]시청각실\n(18) [다산7층](707)천문학실험실\n(19) [다산7층](708)천체동아리실\n(20) [다산7층](710)대기과학실험실\n(21) [다산7층](705)무한상상실\n(22) [다산6층](607)화학실험실\n(23) [다산6층](608)화학실험실\n(24) [다산4층](412)물리소규모실험실\n(25) [다산3층](302)일반물리실험실\n(26) [다산2층](202)박테리아배양실\n(27) [다산2층](202)동물세포배양실\n(28) [다산2층](203)일반생명과학실험실\n(29) [다산2층](206)현미경실험실\n(30) [다산2층](207)생물실험실\n(31) [다산2층](209)전자현미경실\n(32) [다산1층](103)일반화학실험실\n(33) [다산1층](104)무기화학실험실\n(34) [다산1층](108)화학기기분석실\n(35) [탐의2층]중회의실\n(36) [다산6층](606)융합실험실\n(37) [일신2층]다목적강의실1(체육관쪽)\n(38) [일신2층]다목적강의실2(1학년2반앞)\n(39) [일신2층]체육관\n";
    else if(number.startsWith("2020")) var iinfo="《교실 목록》\n(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E연구외출\n(7) 외박\n(8) 기숙사 호실\n(9) 다산관 대강당\n(10) [일신4층]독서실\n(11) [일신3층]Online Study Room\n(12) [일신3층]Open Study Room\n(13) [일신1층]시청각실\n(14) [다산7층](707)천문학실험실\n(15) [다산7층](708)천체동아리실\n(16) [다산7층](710)대기과학실험실\n(17) [다산7층](705)무한상상실\n(18) [다산6층](607)화학실험실\n(19) [다산6층](608)화학실험실\n(20) [다산5층](506)Group Study Room 1\n(21) [다산5층](505)Group Study Room 2\n(22) [다산5층](504)Group Study Room 3\n(23) [다산5층](503)Group Study Room 4\n(24) [다산5층](513)2-1교실\n(25) [다산5층](512)2-2교실\n(26) [다산5층](511)2-3교실\n(27) [다산5층](510)2-4교실\n(28) [탐의5층](집현전)2-5\n(29) [탐의5층](훈민정음)2-6\n(30) [다산4층](412)물리소규모실험실\n(31) [다산3층](302)일반물리실험실\n(32) [다산2층](202)박테리아배양실\n(33) [다산2층](202)동물세포배양실\n(34) [다산2층](203)일반생명과학실험실\n(35) [다산2층](206)현미경실험실\n(36) [다산2층](207)생물실험실\n(37) [다산2층](209)전자현미경실\n(38) [다산1층](103)일반화학실험실\n(39) [다산1층](104)무기화학실험실\n(40) [다산1층](108)화학기기분석실\n(41) [탐의2층]중회의실\n(42) [다산6층](606)융합실험실\n(43) [일신2층]체육관\n";
    else if(number.startsWith("2019")) var iinfo="《교실 목록》\n(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E연구외출\n(7) 외박\n(8) 기숙사 호실\n(9) 다산관 대강당\n(10) [일신4층]독서실\n(11) [일신3층]세미나실1\n(12) [일신3층]세미나실2\n(13) [일신3층]세미나실3\n(14) [일신3층]세미나실4\n(15) [일신3층]세미나실5\n(16) [일신3층]세미나실6\n(17) [일신3층]세미나실7\n(18) [일신1층]시청각실\n(19) [다산7층](707)천문학실험실\n(20) [다산7층](708)천체동아리실\n(21) [다산7층](710)대기과학실험실\n(22) [다산7층](705)무한상상실\n(23) [다산6층](607)화학실험실\n(24) [다산6층](608)화학실험실\n(25) [다산4층](412)물리소규모실험실\n(26) [다산3층](302)일반물리실험실\n(27) [다산2층](202)박테리아배양실\n(28) [다산2층](202)동물세포배양실\n(29) [다산2층](203)일반생명과학실험실\n(30) [다산2층](206)현미경실험실\n(31) [다산2층](207)생물실험실\n(32) [다산2층](209)전자현미경실\n(33) [다산1층](103)일반화학실험실\n(34) [다산1층](104)무기화학실험실\n(35) [다산1층](108)화학기기분석실\n(36) [탐의4층](베이징)3-6\n(37) [탐의3층](수학)3-1\n(38) [탐의3층](수학)3-2\n(39) [탐의3층](수학)3-3\n(40) [탐의3층](수학)3-4\n(41) [탐의3층](수학)3-5\n(42) [탐의2층]중회의실\n(43) [다산6층](606)융합실험실\n(44) [일신2층]체육관\n";
        replier.reply(
        "'/자습신청'을 입력하고, 교실코드를 입력하세요."
        +enteru
        +"\n\n"
        +"ex) /자습신청 1/2/3  ||  /자습신청 1//3  ||  /자습신청 a12 || /자습신청 12a\n -신청하지 않을 자습시간은 빈칸으로 해주세요.\n -취소하실 자습시간에는 0을 입력해주세요.\n -모든 자습시간을 같은 교실로 신청하시려면 교실코드를 하나만 적고 a나 A를 같이 입력해주세요.\n\n"
       +"🔴봇으로 자습신청을 하여 발생한 문제는 개발자가 책임지지 않으며 사용자 본인에게 책임이 있습니다.\n\n"
       +"🔴<자동자습신청 설정법>🔴\n/자습신청과 사용법은 동일합니다.\n'/자습설정'을 입력하고, 같은 방법으로 교실코드를 입력하세요.\n자동자습신청을 해제하시려면 '/자습설정 해제'를 입력해주세요.'\n\n"
        +"====================\n\n"
        +iinfo
        );
       
      }
      else if((msg=="/자습인원")||(msg=="/자습 인원")){
        if(!getSelfStudyTime()) replier.reply("⛔ 자습신청 시간이 아니므로 확인할 수 없습니다.\n(신청시간: 08:00~18:30)");
        else{
        replier.reply("불러오는 중.. (10초 이상 소요)");
        replier.reply("ℹ자습장소 인원현황ℹ"
        +enteru+"\n\n"
        +doSelfStudyCheckNum(sender)
        );
        }
      }
      else if(msg.startsWith("/자습신청")||msg.startsWith("/자습 신청"))
      {
        if(getWeekendTime()) replier.reply("⚠️오늘은 주말입니다. 주말신청을 해주시기 바랍니다.");
        else if(!getSelfStudyTime()) replier.reply("⛔ 자습신청 시간이 아닙니다.\n(신청시간: 08:00~18:30)");
        else{
        if(msg.indexOf("A")!=-1||msg.indexOf("a")!=-1){
          replier.reply("신청하는 중...\n(⚠️신청이 끝나기 전까지 자습신청을 절대 재시도 하지 말아주세요.)\n🔴봇으로 자습신청을 하여 발생한 문제는 개발자가 책임지지 않으며 사용자 본인에게 책임이 있습니다.");
          var info=doSelfStudyCheck(true,false,sender);
          Log.i("자습신청\n"+sender+"\n"+info);
          var tp=msg.substr(6).replace(/A|a/g,"");
          var apply=[tp,tp,tp];
          Log.i("자습신청\n"+sender+"\n"+apply);
        apply=doSelfStudyConvert(apply,sender);
          Log.i("자습신청\n"+sender+"\n"+apply);
        for(var i=0;i<3;i++){
            if(apply[i]=="") continue;
            if(info[i]!="") doSelfStudySubmit(apply[i],i+1,info[i],sender);
            if(apply[i]!="delete") doSelfStudySubmit(apply[i],i+1,"save",sender);
        }
        replier.reply("신청 완료!\n\n"+doSelfStudyCheck(false,true,sender));
        }
        else if(msg.substr(6).split("/")[2]==undefined) replier.reply("입력이 잘못되었는지 확인 후 다시 입력해주세요.");
        else{
          replier.reply("신청하는 중...\n(⚠️신청이 끝나기 전까지 자습신청을 절대 재시도 하지 말아주세요.)\n🔴봇으로 자습신청을 하여 발생한 문제는 개발자가 책임지지 않으며 사용자 본인에게 책임이 있습니다.");
          var info=doSelfStudyCheck(true,false,sender);
          Log.i("자습신청\n"+sender+"\n"+info);
          var apply=msg.substr(6).split("/");
          if(apply[0]==apply[1]&&apply[1]==apply[2]){
            replier.reply("[팁] /자습신청 "+apply[1]+"a 로 입력하시면 더 편하게 신청하실 수 있습니다!");
          }
          Log.i("자습신청\n"+sender+"\n"+apply);
        apply=doSelfStudyConvert(apply,sender);
          Log.i("자습신청\n"+sender+"\n"+apply);
        for(var i=0;i<3;i++){
            if(apply[i]=="") continue;
            if(info[i]!="") doSelfStudySubmit(apply[i],i+1,info[i],sender);
            if(apply[i]!="delete") doSelfStudySubmit(apply[i],i+1,"save",sender);
        }
        replier.reply("신청 완료!\n\n"+doSelfStudyCheck(false,true,sender));
      }
      }
      }
      else if(msg.startsWith("/자습설정")||msg.startsWith("/자습 설정"))
      {
        var DB=JSON.parse(FS.read(path));
      var index=DB.findIndex(isUser,sender);
        if(msg.indexOf("해제")!=-1){
          
          var before=DB[index]["Commandasself"].slice();        
          var befname=doSelfStudyNameConvert(before,DB[index].ID);
          aDB=JSON.parse(FS.read(tpath));
      for(var pp=0;pp<3;pp++){
         aDB[pp][befname[pp]]-=1;
      }
          FS.write(tpath,JSON.stringify(aDB,null,3));
          
          delete DB[index]["Commandasself"];
          delete DB[index]["asself"];
          DB[index]["flag"][0]=false;
          FS.write(path,JSON.stringify(DB,null,3));
          replier.reply("자동 평일자습신청 해제 및 삭제 완료!");
          return 0;
        }
        
        if(msg.indexOf("A")!=-1||msg.indexOf("a")!=-1){
          var tp=msg.substr(6).replace(/A|a/g,""); 
            var apply=[tp,tp,tp];
            DB[index]["flag"][0]=true;
         }
        else if(msg.substr(6).split("/")[2]==undefined){
          replier.reply("입력이 잘못되었는지 확인 후 다시 입력해주세요.");
          return 0;
          }
        else{
         var apply=msg.substr(6).split("/");
         DB[index]["flag"][0]=true;
      }
      for(ik=0;ik<3;ik++){
        if(apply[ik]=="0") apply[ik]="";
        else if(apply[ik]=="") apply[ik]=DB[index]["Commandasself"][ik];
      }
      aDB=JSON.parse(FS.read(tpath));
      if(DB[index]["Commandasself"]!=undefined){
        var before=DB[index]["Commandasself"].slice();
      var befname=doSelfStudyNameConvert(before,DB[index].ID);
   
        for(var pp=0;pp<3;pp++){
        if(aDB[pp]!=undefined&&aDB[pp][befname[pp]]!=undefined)
          aDB[pp][befname[pp]]-=1;
        }
      }
        var name=doSelfStudyNameConvert(apply,DB[index].ID);
        if(name[0]==undefined||name[1]==undefined||name[2]==undefined){
          replier.reply("⛔잘못된 교실번호가 포함되어 있습니다.");
          return 0;
        }
       DB[index]["Commandasself"]=apply.slice();
       
      var apply=doSelfStudyConvert(apply,sender);
      DB[index]["asself"]=apply;
      
      
      for(var pp=0;pp<3;pp++){
        if(aDB[pp]==undefined){
          aDB[pp]={};
          aDB[pp][name[pp]]=1;
          }
          else if(aDB[pp][name[pp]]==undefined){
            aDB[pp][name[pp]]=1;
            }
        else aDB[pp][name[pp]]+=1;
      }
      FS.write(tpath,JSON.stringify(aDB,null,3));
      FS.write(path,JSON.stringify(DB,null,3));
      replier.reply("설정 완료!\n1자: "+name[0]+"\n2자: "+name[1]+"\n3자: "+name[2]);
    // replier.reply("b방장봇방",sender+"님이 자습설정 사용.");
     
      }
      else if(msg=="/a자습설정"){
        aDB=JSON.parse(FS.read(tpath));
        var res="ℹℹ"+enteru+"\n\n";
        for(var pp=0;pp<3;pp++){
          res+=(pp+1)  +"》》\n";
      for(variable in aDB[pp]){
        if(aDB[pp][variable]!=0) res+=variable+": "+aDB[pp][variable]+"\n";
      }
      res+="\n\n\n";
      }
         replier.reply(res);
      }
     else if((msg=="/주말번호"||msg=="/주말 번호")){
        
        replier.reply("불러오는 중..");
        var number=getUserInfo(sender)[0];
        var sinfoa="[[토요일]]\n《시간표(8)》\n (1)오전자율   09:00 ~ 12:00\n (2)꿈지락      13:00 ~ 16:20\n (3)오후자율1 13:00 ~ 14:40\n (4)오후자율2 14:50 ~ 16:20\n (5)오후자율3 16:30 ~ 18:00\n (6)야간자율1 19:30 ~ 21:00\n (7)야간자율2 21:30 ~ 22:30\n (8)야간자율3 22:40 ~ 23:40\n\n《교실 목록》\n";
        var sinfob="[[일요일]]\n《시간표(7)》\n (1)오전자율   09:00 ~ 12:00\n (2)오후자율1 13:00 ~ 14:40\n (3)오후자율2 14:50 ~ 16:20\n (4)오후자율3 16:30 ~ 18:00\n (5)야간자율1 19:30 ~ 21:00\n (6)야간자율2 21:30 ~ 22:40\n (7)야간자율3 22:40 ~ 23:40\n\n《교실 목록》\n";
        var sinfoc="[[공휴일]]\n《시간표(7)》\n (1)오전자율   09:00 ~ 12:00\n (2)오후자율1 13:00 ~ 14:40\n (3)오후자율2 14:50 ~ 16:20\n (4)오후자율3 16:30 ~ 18:00\n (5)야간자율1 19:30 ~ 21:00\n (6)야간자율2 21:30 ~ 22:40\n (7)야간자율3 22:40 ~ 23:40\n\n《교실 목록》\n";
var iinfo="";
var iiinfo="";
var iiiinfo="";
    if(number.startsWith("2021")){
      iinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신1층]시청각실\n(10) [일신2층]다목적강의실(세미나실)\n(11) [다산1층]대강당\n(12) [일신2층]체육관\n(13) [일신2층]1-1\n(14) [일신2층]1-2\n(15) [일신2층]1-3\n(16) [일신2층]1-4\n(17) [일신2층]1-5\n(18) [일신2층]1-6\n(19) [다산5층](510)2-4\n(20) [다산5층](511)2-3\n(21) [다산5층](512)2-2\n(22) [다산5층](513)2-1\n(23) [탐의5층](집현전)2-5\n(24) [탐의5층](훈민정음)2-6\n(25) [다산1층]화학R&E실(101)\n(26) [다산1층]일반화학실험실(103)\n(27) [다산1층]무기화학실험실(104)\n(28) [다산1층]유기화학실험실(107)\n(29) [다산1층]화학기기분석실(108)\n(30) [다산2층]모델생물실(201)\n(31) [다산2층]박테리아배양실(202)\n(32) [다산2층]일반생물학실험실(203)\n(33) [다산2층]현미경실험실(206)\n(34) [다산2층]생화학실험실(207)\n(35) [다산2층]전자현미경실(209)\n(36) [다산3층]일반물리실험실(302)\n(37) [다산5층](506)Group Study Room 1\n(38) [다산5층](505)Group Study Room 2\n(39) [다산5층](504)Group Study Room 3\n(40) [다산5층](503)Group Study Room 4\n(41) [다산6층]화학실험실(607)\n(42) [다산6층]화학실험실(608)\n(43) [다산7층]천문학실험실(707)\n(44) [다산7층]천체동아리실(708)\n(45) [다산7층]대기과학실험실(710)\n(46) [다산7층]무한상상실(705)\n(47) [일신2층]미술실\n(48) [일신1층]음악실\n(49) [일신1층]여명스토리\n(50) [기숙]무용연습실\n(51) [일신3층]도서관";
      iiinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신1층]시청각실\n(10) [일신2층]다목적강의실(세미나실)\n(11) [다산1층]대강당\n(12) [일신2층]체육관\n(13) [일신2층]1-1\n(14) [일신2층]1-2\n(15) [일신2층]1-3\n(16) [일신2층]1-4\n(17) [일신2층]1-5\n(18) [일신2층]1-6\n(19) [다산1층]화학R&E실(101)\n(20) [다산1층]일반화학실험실(103)\n(21) [다산1층]무기화학실험실(104)\n(22) [다산1층]유기화학실험실(107)\n(23) [다산1층]화학기기분석실(108)\n(24) [다산2층]모델생물실(201)\n(25) [다산2층]박테리아배양실(202)\n(26) [다산2층]일반생물학실험실(203)\n(27) [다산2층]현미경실험실(206)\n(28) [다산2층]생화학실험실(207)\n(29) [다산2층]전자현미경실(209)\n(30) [다산3층]일반물리실험실(302)\n(31) [다산6층]화학실험실(607)\n(32) [다산6층]화학실험실(608)\n(33) [다산7층]천문학실험실(707)\n(34) [다산7층]천체동아리실(708)\n(35) [다산7층]대기과학실험실(710)\n(36) [다산7층]무한상상실(705)\n(37) [기숙]무용연습실";
      iiiinfo="(1) 독서실\n (2) 부모외출\n (3) 병외출\n (4) 종교외출\n (5) 기타외출\n (6) R&E연구외출\n (7) 외박\n (8) 기숙사 호실\n (9) [일신1층]시청각실\n (10) [일신2층]다목적강의실(세미나실)\n (11) [다산1층]대강당\n (12) [일신2층]체육관\n (13) [일신2층]1-1\n (14) [일신2층]1-2\n (15) [일신2층]1-3\n (16) [일신2층]1-4\n (17) [일신2층]1-5\n (18) [일신2층]1-6\n (19) [다산1층]화학R&E실(101)\n (20) [다산1층]일반화학실험실(103)\n (21) [다산1층]무기화학실험실(104)\n (22) [다산1층]유기화학실험실(107)\n (23) [다산1층]화학기기분석실(108)\n (24) [다산2층]모델생물실(201)\n (25) [다산2층]박테리아배양실(202)\n (26) [다산2층]일반생물학실험실(203)\n (27) [다산2층]현미경실험실(206)\n (28) [다산2층]생화학실험실(207)\n (29) [다산2층]전자현미경실(209)\n (30) [다산3층]일반물리실험실(302)\n (31) [다산6층]화학실험실(607)\n (32) [다산6층]화학실험실(608)\n (33) [다산7층]천문학실험실(707)\n (34) [다산7층]천체동아리실(708)\n (35) [다산7층]대기과학실험실(710)\n (36) [다산7층]무한상상실(705)\n (37) [기숙]무용연습실\n";
   }
    else if(number.startsWith("2020")){
      iinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신3층]Online Study Room\n(10) [일신3층]Open Study Room\n(11) [일신1층]시청각실\n(12) [일신2층]다목적강의실(세미나실)\n(13) [다산1층]대강당\n(14) [일신2층]체육관\n(15) [일신2층]1-1\n(16) [일신2층]1-2\n(17) [일신2층]1-3\n(18) [일신2층]1-4\n(19) [일신2층]1-5\n(20) [일신2층]1-6\n(21) [다산5층](510)2-4\n(22) [다산5층](511)2-3\n(23) [다산5층](512)2-2\n(24) [다산5층](513)2-1\n(25) [탐의5층](집현전)2-5\n(26) [탐의5층](훈민정음)2-6\n(27) [다산1층]화학R&E실(101)\n(28) [다산1층]일반화학실험실(103)\n(29) [다산1층]무기화학실험실(104)\n(30) [다산1층]유기화학실험실(107)\n(31) [다산1층]화학기기분석실(108)\n(32) [다산2층]모델생물실(201)\n(33) [다산2층]박테리아배양실(202)\n(34) [다산2층]일반생물학실험실(203)\n(35) [다산2층]현미경실험실(206)\n(36) [다산2층]생화학실험실(207)\n(37) [다산2층]전자현미경실(209)\n(38) [다산3층]일반물리실험실(302)\n(39) [다산5층](506)Group Study Room 1\n(40) [다산5층](505)Group Study Room 2\n(41) [다산5층](504)Group Study Room 3\n(42) [다산5층](503)Group Study Room 4\n(43) [다산6층]화학실험실(607)\n(44) [다산6층]화학실험실(608)\n(45) [다산7층]천문학실험실(707)\n(46) [다산7층]천체동아리실(708)\n(47) [다산7층]대기과학실험실(710)\n(48) [다산7층]무한상상실(705)\n(49) [일신2층]미술실\n(50) [일신1층]음악실\n(51) [일신1층]여명스토리\n(52) [기숙]무용연습실\n(53) [일신3층]도서관";
      iiinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신3층]Online Study Room\n(10) [일신3층]Open Study Room\n(11) [일신1층]시청각실\n(12) [일신2층]다목적강의실(세미나실)\n(13) [다산1층]대강당\n(14) [일신2층]체육관\n(15) [다산5층](510)2-4\n(16) [다산5층](511)2-3\n(17) [다산5층](512)2-2\n(18) [다산5층](513)2-1\n(19) [탐의5층](집현전)2-5\n(20) [탐의5층](훈민정음)2-6\n(21) [다산1층]화학R&E실(101)\n(22) [다산1층]일반화학실험실(103)\n(23) [다산1층]무기화학실험실(104)\n(24) [다산1층]유기화학실험실(107)\n(25) [다산1층]화학기기분석실(108)\n(26) [다산2층]모델생물실(201)\n(27) [다산2층]박테리아배양실(202)\n(28) [다산2층]일반생물학실험실(203)\n(29) [다산2층]현미경실험실(206)\n(30) [다산2층]생화학실험실(207)\n(31) [다산2층]전자현미경실(209)\n(32) [다산3층]일반물리실험실(302)\n(33) [다산5층](506)Group Study Room 1\n(34) [다산5층](505)Group Study Room 2\n(35) [다산5층](504)Group Study Room 3\n(36) [다산5층](503)Group Study Room 4\n(37) [다산6층]화학실험실(607)\n(38) [다산6층]화학실험실(608)\n(39) [다산7층]천문학실험실(707)\n(40) [다산7층]천체동아리실(708)\n(41) [다산7층]대기과학실험실(710)\n(42) [다산7층]무한상상실(705)";
      iiiinfo="(1) 독서실\n (2) 부모외출\n (3) 병외출\n (4) 종교외출\n (5) 기타외출\n (6) R&E연구외출\n (7) 외박\n (8) 기숙사 호실\n (9) [일신3층]Online Study Room\n (10) [일신3층]Open Study Room\n (11) [일신1층]시청각실\n (12) [다산1층]대강당\n (13) [일신2층]체육관\n (14) [다산5층](510)2-4\n (15) [다산5층](511)2-3\n (16) [다산5층](512)2-2\n (17) [다산5층](513)2-1\n (18) [탐의5층](집현전)2-5\n (19) [탐의5층](훈민정음)2-6\n (20) [다산1층]화학R&E실(101)\n (21) [다산1층]일반화학실험실(103)\n (22) [다산1층]무기화학실험실(104)\n (23) [다산1층]유기화학실험실(107)\n (24) [다산1층]화학기기분석실(108)\n (25) [다산2층]모델생물실(201)\n (26) [다산2층]박테리아배양실(202)\n (27) [다산2층]일반생물학실험실(203)\n (28) [다산2층]현미경실험실(206)\n (29) [다산2층]생화학실험실(207)\n (30) [다산2층]전자현미경실(209)\n (31) [다산3층]일반물리실험실(302)\n (32) [다산5층](506)Group Study Room 1\n (33) [다산5층](505)Group Study Room 2\n (34) [다산5층](504)Group Study Room 3\n (35) [다산5층](503)Group Study Room 4\n (36) [다산6층]화학실험실(607)\n (37) [다산6층]화학실험실(608)\n (38) [다산7층]천문학실험실(707)\n (39) [다산7층]천체동아리실(708)\n (40) [다산7층]대기과학실험실(710)\n (41) [다산7층]무한상상실(705)\n (42) [기숙]무용연습실\n";
   }
    else if(number.startsWith("2019")){
     iinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신3층]세미나실1\n(10) [일신3층]세미나실2\n(11) [일신3층]세미나실3\n(12) [일신3층]세미나실4\n(13) [일신3층]세미나실5\n(14) [일신3층]세미나실6\n(15) [일신3층]세미나실7\n(16) [일신1층]시청각실\n(17) [다산1층]대강당\n(18) [일신2층]체육관\n(19) [탐의3층]3-1(수학교실1)\n(20) [탐의3층]3-2(수학교실2)\n(21) [탐의3층]3-3(수학교실3)\n(22) [탐의3층]3-4(수학교실4)\n(23) [탐의3층]3-5(수학교실5)\n(24) [탐의4층]3-6(베이징)\n(25) [다산1층]화학R&E실(101)\n(26) [다산1층]일반화학실험실(103)\n(27) [다산1층]무기화학실험실(104)\n(28) [다산1층]유기화학실험실(107)\n(29) [다산1층]화학기기분석실(108)\n(30) [다산2층]모델생물실(201)\n(31) [다산2층]박테리아배양실(202)\n(32) [다산2층]일반생물학실험실(203)\n(33) [다산2층]현미경실험실(206)\n(34) [다산2층]생화학실험실(207)\n(35) [다산2층]전자현미경실(209)\n(36) [다산3층]일반물리실험실(302)\n(37) [다산6층]화학실험실(607)\n(38) [다산6층]화학실험실(608)\n(39) [다산7층]천문학실험실(707)\n(40) [다산7층]천체동아리실(708)\n(41) [다산7층]대기과학실험실(710)\n(42) [다산7층]무한상상실(705)";
      iiinfo="(1) 독서실\n(2) 부모외출\n(3) 병외출\n(4) 종교외출\n(5) 기타외출\n(6) R&E외출\n(7) 외박\n(8) 기숙사 호실\n(9) [일신3층]세미나실1\n(10) [일신3층]세미나실2\n(11) [일신3층]세미나실3\n(12) [일신3층]세미나실4\n(13) [일신3층]세미나실5\n(14) [일신3층]세미나실6\n(15) [일신3층]세미나실7\n(16) [일신1층]시청각실\n(17) [다산1층]대강당\n(18) [일신2층]체육관\n(19) [탐의3층]3-1(수학교실1)\n(20) [탐의3층]3-2(수학교실2)\n(21) [탐의3층]3-3(수학교실3)\n(22) [탐의3층]3-4(수학교실4)\n(23) [탐의3층]3-5(수학교실5)\n(24) [탐의4층]3-6(베이징)\n(25) [다산1층]화학R&E실(101)\n(26) [다산1층]일반화학실험실(103)\n(27) [다산1층]무기화학실험실(104)\n(28) [다산1층]유기화학실험실(107)\n(29) [다산1층]화학기기분석실(108)\n(30) [다산2층]모델생물실(201)\n(31) [다산2층]박테리아배양실(202)\n(32) [다산2층]일반생물학실험실(203)\n(33) [다산2층]현미경실험실(206)\n(34) [다산2층]생화학실험실(207)\n(35) [다산2층]전자현미경실(209)\n(36) [다산3층]일반물리실험실(302)\n(37) [다산6층]화학실험실(607)\n(38) [다산6층]화학실험실(608)\n(39) [다산7층]천문학실험실(707)\n(40) [다산7층]천체동아리실(708)\n(41) [다산7층]대기과학실험실(710)\n(42) [다산7층]무한상상실(705)\n(43) [기숙]무용연습실";
     iiiinfo="(1) 독서실\n (2) 부모외출\n (3) 병외출\n (4) 종교외출\n (5) 기타외출\n (6) R&E연구외출\n (7) 외박\n (8) 기숙사 호실\n (9) [일신3층]세미나실1\n (10) [일신3층]세미나실2\n (11) [일신3층]세미나실3\n (12) [일신3층]세미나실4\n (13) [일신3층]세미나실5\n (14) [일신3층]세미나실6\n (15) [일신3층]세미나실7\n (16) [일신1층]시청각실\n (17) [다산1층]대강당\n (18) [일신2층]체육관\n (19) [탐의3층]3-1(수학교실1)\n (20) [탐의3층]3-2(수학교실2)\n (21) [탐의3층]3-3(수학교실3)\n (22) [탐의3층]3-4(수학교실4)\n (23) [탐의3층]3-5(수학교실5)\n (24) [탐의4층]3-6(베이징)\n (25) [다산1층]화학R&E실(101)\n (26) [다산1층]일반화학실험실(103)\n (27) [다산1층]무기화학실험실(104)\n (28) [다산1층]유기화학실험실(107)\n (29) [다산1층]화학기기분석실(108)\n (30) [다산2층]모델생물실(201)\n (31) [다산2층]박테리아배양실(202)\n (32) [다산2층]일반생물학실험실(203)\n (33) [다산2층]현미경실험실(206)\n (34) [다산2층]생화학실험실(207)\n (35) [다산2층]전자현미경실(209)\n (36) [다산3층]일반물리실험실(302)\n (37) [다산6층]화학실험실(607)\n (38) [다산6층]화학실험실(608)\n (39) [다산7층]천문학실험실(707)\n (40) [다산7층]천체동아리실(708)\n (41) [다산7층]대기과학실험실(710)\n (42) [다산7층]무한상상실(705)\n (43) [기숙]무용연습실\n";
      sinfoa="[[토요일]]\n《시간표(7)》\n (1)오전자율   09:00 ~ 12:00\n (2)오후자율1 13:00 ~ 14:40\n (3)오후자율2 14:50 ~ 16:20\n (4)오후자율3 16:30 ~ 18:00\n (5)야간자율1 19:30 ~ 21:00\n (6)야간자율2 21:30 ~ 22:40\n (7)야간자율3 22:40 ~ 23:40\n\n《교실 목록》\n";
    }  
        replier.reply(
        "'/주말신청'을 입력하고 요일과 교실코드를 양식에 맞게 입력해주세요."
        +enteru
        +"\n\n"
        +"🔵공휴일은 요일 입력칸에 '공'이라고 입력해주세요.\n\n"
        +"ℹ방법1ℹ\n/주말신청 (요일)/(번호1)/(번호2)/....\nex) /주말신청 토/1/2/3/4/5/6/7/8\n\nℹ방법2ℹ\n/주말신청\n(요일)\n(교시번호): (교실번호) 줄바꿈으로 구분하여 입력.\n\nex)\n/주말신청\n토\n1: 5\n3: 1\n6: 0\n\nℹ방법3ℹ\n/주말신청 (요일,교실코드,a또는A)를 순서 상관없이 입력\n-> 모든 자습시간을 단일 교실로 신청.\nex) /주말신청 토a20\n\n신청하지 않을 자습시간은 빈칸으로 해주세요.\n취소하실 자습시간에는 0을 입력해주세요.\n\n"
        +"🔴봇으로 자습신청을 하여 발생한 문제는 개발자가 책임지지 않으며 사용자 본인에게 책임이 있습니다.\n\n"
        +"🔴<자동주말자습신청 설정법>🔴\n/주말신청과 사용법은 동일합니다.\n'/주말설정'을 입력하고, 같은 방법으로 요일과 교실코드를 입력하세요.\n자동주말자습신청을 해졔하시려면, '/주말설정 해제'를 입력해주세요.\n\n"
        +"====================\n\n"
        +sinfoa
        +iinfo+"\n\n\n"
      +sinfob
      +iiinfo+"\n\n\n"
      +sinfoc
      +iiiinfo
        );
       }
       
       else if((msg.startsWith("/주말인원"))||(msg.startsWith("/주말 인원"))){
        if(msg.indexOf("토")!=-1){
          var n=0;
          var week="토요일";
        }
        else if(msg.indexOf("일")!=-1){
          var n=1;
          var week="일요일";
        }
        else{
          replier.reply("⚠️올바른 요일을 포함하여 다시 입력해주세요.\nex) /주말인원 토");
          return 0;
        }
        replier.reply("불러오는 중.. (15초 이상 소요)");
        replier.reply("ℹ"+week+" 주말자습장소 인원현황ℹ"
        +enteru+"\n\n"
        +doWeekendCheckNum(sender,n)
        );
      }
       
      
          else if(msg.startsWith("/주말신청")||msg.startsWith("/주말 신청")){
        if(msg.indexOf("토")!=-1&&!getWeekendSatTime()){
      
            replier.reply("⛔신청 시간이 아닙니다.");
            return 0;
          
        }
        else if(msg.indexOf("일")!=-1&&!getWeekendSunTime()){
          
          replier.reply("⛔신청 시간이 아닙니다.");
            return 0;
            
        }
        else if(msg.indexOf("공")!=-1&&!getWeekendHolTime()){
          
          replier.reply("⛔신청 시간이 아닙니다.");
            return 0;
            
        }
       else{
        replier.reply("신청하는 중...\n(⚠️신청이 끝나기 전까지 자습신청을 절대 재시도 하지 말아주세요.)\n🔴봇으로 자습신청을 하여 발생한 문제는 개발자가 책임지지 않으며 사용자 본인에게 책임이 있습니다.");
    
    if(msg.substr(6).indexOf("a")!=-1||msg.substr(6).indexOf("A")!=-1){
      var tp=msg.substr(6).replace(/A|a|토|일|공/g,"");
      var command=["a",tp,tp,tp,tp,tp,tp,tp,tp];
      if(msg.indexOf("토")!=-1){
        var weekind="saturday";
         var n=0;
         var str="<!-- 토요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 토요일 방과후 끝 --> ";
        
      }
      else if(msg.indexOf("일")!=-1){
        var weekind="sunday";
         var n=1;
         var str="<!-- 일요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 일요일 방과후 끝 --> ";

      }
      else if(msg.indexOf("공")!=-1){
        var weekind="holiday";
         var n=2;
         var str="<!-- 공휴일 방과후 프로그램 신청 --> ";
        var str2="<!-- 주말 방과후 끝 --> ";
      }
      else{
        replier.reply("⚠️요일을 포함하여 다시 입력해주세요.");
         return 0;
      }   
    }
    else{
     var command=msg.substr(6).split("/");
      var command2=msg.split("\n");
      if(command2[1]==undefined&&command[1]!=undefined){
      if(command[0].trim()=="토")
      {
      var weekind="saturday";
         var n=0;
         var str="<!-- 토요일 방과후 프로그램 신청 --> ";        
        var str2="<!-- 토요일 방과후 끝 --> ";
        }
      else if(command[0].trim()=="일")
      {       
     var weekind="sunday";
         var n=1;
         var str="<!-- 일요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 일요일 방과후 끝 --> ";
      }
      else if(command[0].trim()=="공")
      {       
     var weekind="holiday";
         var n=2;
         var str="<!-- 공휴일 방과후 프로그램 신청 --> ";
        var str2="<!-- 주말 방과후 끝 --> ";
      }
      else{
        replier.reply("⚠️요일을 포함하여 다시 입력해주세요.\nex) /주말신청 토/1/1/1/...");
         return 0;
      }
      }
      else if(command2[1]!=undefined&&command[1]==undefined){
        if(command2[1].trim()=="토"){
          var weekind="saturday";
         var n=0;
         var str="<!-- 토요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 토요일 방과후 끝 --> ";
         var command=[,,,,,,,,,]
         }
        
        else if(command2[1].trim()=="일"){
          var weekind="sunday";
         var n=1;
         var str="<!-- 일요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 일요일 방과후 끝 --> ";
            var command=[,,,,,,,,]
         }
        else if(command2[1].trim()=="공"){
          var weekind="holiday";
         var n=2;
         var str="<!-- 공휴일 방과후 프로그램 신청 --> ";
        var str2="<!-- 주말 방과후 끝 --> ";
        var command=[,,,,,,,,]
         }
        else{
          replier.reply("⚠️요일을 포함하여 다시 입력해주세요.\nex)\n/주말신청\n토\n1: 1");
         return 0;
        }
        for(var ik=2;ik<command2.length;ik++){
           var tmp=command2[ik].split(":");
           command[Number(tmp[0])]=tmp[1];
          }
      }
      else{
         replier.reply("⚠️입력이 잘못되었는지 확인 후 다시 입력해주세요.");
         return 0;
      }
      }
        var result=doWeekendCheck(true,false,sender);
     Log.i(result);
      var weeknum=result.split("var chk_week = \"")[1].split("\"")[0];
        var winfo=JSON.parse(FS.read(path3));
      var i=0;
      var pid=winfo[n].pid;
      Log.i(pid);
      Log.i("주말신청\n"+sender+"\n"+command);
      command=doWeekendConvert(command,n,sender);
      result=result.split(str)[1].split(str2)[0].split("<th>");
      var stamp=result[7].split(weekind)[1].split("_")[1];
        var chkno=[];
      var dis=[];
        for(var i=7;i<result.length;i++)
        {
          if(i%2==1){
          if(result[i].indexOf("취소")!=-1) dis.push("취소");
          else dis.push("");
          Log.e("🚨"+result[i]);
          var t2=result[i].split("id=")[1].split(">")[0].split("_");
          chkno.push(t2[5]);
          }
        }
      for(var i=0;i<pid.length;i++)
      {
         if(command[i+1]==""||command[i+1]==undefined) continue; //안 건든다.
         if(dis[i]=="취소"||command[i+1]=="delete") doWeekendSubmit("delete",chkno[i],pid[i],String(i+1),stamp,weekind,weeknum,"",sender); //일단 취소.
         if(command[i+1]!="delete") doWeekendSubmit("save",chkno[i],pid[i],String(i+1),stamp,weekind,weeknum,command[i+1],sender); //취소가 아니면 신청.
      }
     replier.reply("신청 완료!\n\n"+doWeekendCheck(false,true,sender));
    }
    }
   
   else if(msg.startsWith("/주말설정")||msg.startsWith("/주말 설정")){
   var DB=JSON.parse(FS.read(path));
      var index=DB.findIndex(isUser,sender);     
     var number=DB[index].ID; 
   var sinfoa="[[토요일]]\n (1)오전자율   09:00 ~ 12:00{0}\n (2)꿈지락      13:00 ~ 16:20{1}\n (3)오후자율1 13:00 ~ 14:40{2}\n (4)오후자율2 14:50 ~ 16:20{3}\n (5)오후자율3 16:30 ~ 18:00{4}\n (6)야간자율1 19:30 ~ 21:00{5}\n (7)야간자율2 21:30 ~ 22:30{6}\n (8)야간자율3 22:40 ~ 23:40{7}";
    var sinfob="[[일요일]]\n (1)오전자율   09:00 ~ 12:00{0}\n (2)오후자율1 13:00 ~ 14:40{1}\n (3)오후자율2 14:50 ~ 16:20{2}\n (4)오후자율3 16:30 ~ 18:00{3}\n (5)야간자율1 19:30 ~ 21:00{4}\n (6)야간자율2 21:30 ~ 22:40{5}\n (7)야간자율3 22:40 ~ 23:40{6}";
   if(number.startsWith("2019")){
     sinfoa="[[토요일]]\n (1)오전자율   09:00 ~ 12:00{1}\n (2)오후자율1 13:00 ~ 14:40{2}\n (3)오후자율2 14:50 ~ 16:20{3}\n (4)오후자율3 16:30 ~ 18:00{4}\n (5)야간자율1 19:30 ~ 21:00{5}\n (6)야간자율2 21:30 ~ 22:40{6}\n (7)야간자율3 22:40 ~ 23:40{7}";
    }
    if(msg.indexOf("해제")!=-1){
      delete DB[index]["asWeekendSat"];
      delete DB[index]["CommandasWeekendSat"];
      delete DB[index]["NameasWeekendSat"];
      delete DB[index]["asWeekendSun"];
      delete DB[index]["CommandasWeekendSun"];
      delete DB[index]["NameasWeekendSun"];
      DB[index]["flag"][1]=false;
      DB[index]["flag"][2]=false;
      FS.write(path,JSON.stringify(DB,null,3));
      replier.reply("자동 주말자습 신청 해제 및 삭제 완료!");
      return 0;
    }
    if(msg.substr(6).indexOf("a")!=-1||msg.substr(6).indexOf("A")!=-1){
      var tp=msg.substr(6).replace(/A|a|토|일/g,"");
      var command=["a",tp,tp,tp,tp,tp,tp,tp,tp];
      if(msg.indexOf("토")!=-1){
         var n=0;
         var where="asWeekendSat";
       var result=sinfoa;
       DB[index]["flag"][1]=true;
      }
      else if(msg.indexOf("일")!=-1){
         var n=1;
         var where="asWeekendSun";
       var result=sinfob;
       DB[index]["flag"][2]=true;
      }
      else{
        replier.reply("요일을 포함하여 다시 입력해주세요. \nex) /주말신청 토1a");
         return 0;
      }   
    }
    else{
     var command=msg.substr(6).split("/");
      var command2=msg.split("\n");
      if(command2[1]==undefined&&command[1]!=undefined){
      if(command[0].trim()=="토")
      {
         var n=0;
         var where="asWeekendSat";
            var result=sinfoa;
           var precommand=DB[index]["command"+where];
           DB[index]["flag"][1]=true;
      }
      else if(command[0].trim()=="일")
      {       
         var n=1;
         var where="asWeekendSun";
              var result=sinfob;
              var precommand=DB[index]["command"+where];
              DB[index]["flag"][2]=true;
      }
      else{
        replier.reply("요일을 포함하여 다시 입력해주세요.\nex) /주말신청 토/1/1/1/...");
         return 0;
      }
      for(id=0;id<command.length;id++){
        if(command[id]==""&&precommand!=undefined) command[id]=precommand[id];
        else if(command[id]==""&&precommand==undefined) command[id]=="";
      }
      }
      else if(command2[1]!=undefined&&command[1]==undefined){
        if(command2[1].trim()=="토"){
         var n=0;
         var where="asWeekendSat";
         var precommand=DB[index]["command"+where];
       var result=sinfoa;
       DB[index]["flag"][1]=true;
         }
        
        else if(command2[1].trim()=="일"){
         var n=1;
         var where="asWeekendSun";
         var precommand=DB[index]["command"+where];
      var result=sinfob;
      DB[index]["flag"][2]=true;
         }
        
        else{
          replier.reply("요일을 포함하여 다시 입력해주세요.\nex) /주말신청\n토\n1: 1");
         return 0;
        }
        if(precommand!=undefined) command=precommand;
       else command=[];
       // replier.reply(precommand);
        for(var ik=2;ik<command2.length;ik++){
          var tmp=command2[ik].split(":");
             command[Number(tmp[0])]=tmp[1];
          }
      }
      else{
         replier.reply("입력이 잘못되었는지 확인 후 다시 입력해주세요.");
         return 0;
      }
      }
      
      Log.i("주말설정\n"+sender+"\n"+command);
     DB[index]["command"+where]=command.slice();
     
     for(var ik=0;ik<command.length;ik++){
       if(command[ik]=="0")  DB[index]["command"+where][ik]="";
     }
     
     var names=doWeekendNameConvert(command,number,n,DB[index]["name"+where]);
      if(names=="nope"){
        replier.reply("⛔잘못된 교실번호가 포함되어 있습니다.");
        return 0;
      }
      DB[index]["name"+where]=names;
      command=doWeekendConvert(command,n,number);
       DB[index][where]=command;
     
      FS.write(path,JSON.stringify(DB,null,3));
     replier.reply("설정 완료!\n"+format(result,names.slice(1)));
   //replier.reply("b방장봇방",sender+"님이 주말자습설정 사용.");
   }
   else if(msg.startsWith("/설정상태")||msg.startsWith("/설정 상태"))
      {
        var res1="";
        var res2="";
        var res3="";
        var DB=JSON.parse(FS.read(path));
      var index=DB.findIndex(isUser,sender);    
     var number=DB[index].ID; 
   var sinfoa=" (1)오전자율   09:00 ~ 12:00{0}\n (2)꿈지락      13:00 ~ 16:20{1}\n (3)오후자율1 13:00 ~ 14:40{2}\n (4)오후자율2 14:50 ~ 16:20{3}\n (5)오후자율3 16:30 ~ 18:00{4}\n (6)야간자율1 19:30 ~ 21:00{5}\n (7)야간자율2 21:30 ~ 22:30{6}\n (8)야간자율3 22:40 ~ 23:40{7}";
    var sinfob=" (1)오전자율   09:00 ~ 12:00{0}\n (2)오후자율1 13:00 ~ 14:40{1}\n (3)오후자율2 14:50 ~ 16:20{2}\n (4)오후자율3 16:30 ~ 18:00{3}\n (5)야간자율1 19:30 ~ 21:00{4}\n (6)야간자율2 21:30 ~ 22:40{5}\n (7)야간자율3 22:40 ~ 23:40{6}";
   if(number.startsWith("2019")){
     sinfoa=" (1)오전자율   09:00 ~ 12:00{1}\n (2)오후자율1 13:00 ~ 14:40{2}\n (3)오후자율2 14:50 ~ 16:20{3}\n (4)오후자율3 16:30 ~ 18:00{4}\n (5)야간자율1 19:30 ~ 21:00{5}\n (6)야간자율2 21:30 ~ 22:40{6}\n (7)야간자율3 22:40 ~ 23:40{7}";
    }
      if(!DB[index]["flag"][0]) res1="(자동신청이 설정되어 있지 않습니다.)";
      else{
         var name=doSelfStudyNameConvert(DB[index]["Commandasself"],number);
        res1="1자: "+name[0]+"\n2자: "+name[1]+"\n3자: "+name[2];
      }
      if(!DB[index]["flag"][1]) res2="(자동신청이 설정되어 있지 않습니다.)";
      else{
        res2=format(sinfoa,DB[index]["nameasWeekendSat"].slice(1));
      }
      if(!DB[index]["flag"][2]) res3="(자동신청이 설정되어 있지 않습니다.)";
      else{
        res3=format(sinfob,DB[index]["nameasWeekendSun"].slice(1));
      }
      replier.reply("<자동자습신청 설정 상태>\n"
      +enteru
      +"\n\nℹ평일 자습신청:\n"+res1
      +"\n\nℹ토요일 자습신청\n"+res2
      +"\n\nℹ일요일 자습신청\n"+res3
      );
      }
   else if(msg.startsWith("혹시 액션이 어떻게 되는지 아세요")||msg.startsWith("무한~")){
       replier.reply("무 야 호~~!");
    }
    else{
      if(!msg.startsWith("/오늘")&&!msg.startsWith("/내일")&&!msg.startsWith("/급식")&&!msg.startsWith("/추가")) replier.reply("잘못된 명령어입니다.\n/help 또는 /명령어 입력 후 사용법을 확인하세요.\n(확인하시려면 대곽봇 단톡방에 입장되어 있어야 합니다.)");
    }
    }
    }catch(error){
      Log.e("⛔오류 발생⛔\n"+sender+" 님 오류 발생.\n"+error.name+"\n"+error.message+"\n"+error.lineNumber);
      replier.reply("b방장봇방","⛔오류 발생⛔\n"+sender+" 님 오류 발생.\n"+error.name+"\n"+error.message+"\n"+error.lineNumber);
      replier.reply("⚠️오류 발생!⚠️\n/리셋 명령어를 사용한 뒤 재시도해주세요!\n학생현황 시스템을 등록하시지 않으셨다면 /신규등록 명령어를 통해 등록해주세요.\n현상이 지속될 경우 대곽봇 오픈채팅방 공지를 참고하여 관리자에게 문의바랍니다."+enteru+"\n"+error.name+"\n"+error.message);
    }
    }
    }
    else if(room=="b방장봇방"&&msg=="/자동자습신청"){
      var time= new Date();
  var yo=time.getDay();
  if(yo==6||yo==0) return 0;
      replier.reply("b방장봇방","자동자습신청 시작!");
     // replier.reply("b전체방","자동자습신청 시작!");
      Log.i("자동자습신청 시작!");
      var DB=JSON.parse(FS.read(path));
      var cnt=0;
      for(var j=0;j<DB.length;j++){
        if(!DB[j]["flag"][0]) continue;
        else{
          var apply=DB[j].asself;
          Log.i("자동자습신청\n"+DB[j].Commandasself+"\n"+DB[j].User);
          cnt+=1;
          for(var i=0;i<3;i++){
            if(apply[i]=="") continue;
            doSelfStudySubmit(apply[i],i+1,"save",DB[j].User);          
          }
        }
      }
      replier.reply("b방장봇방","자동자습신청 끝. 인원: "+cnt);
      replier.reply("b전체방","✅자동자습신청 완료! ("+cnt+"명)");
    }
    else if(room=="b방장봇방"&&(msg=="/봇 급식"||msg=="/수동주말자습신청")){
      if(!getAutoWeekendTime()&&msg=="/봇 급식") return 0;
      java.lang.Thread.sleep(10000);
      replier.reply("b방장봇방","자동주말자습신청 시작!");
      replier.reply("b전체방","자동주말자습신청 시작!");
      Log.i("자동주말자습신청 시작!");
      var DB=JSON.parse(FS.read(path));
      
      var cnt1=0;
      senders=["DSHS0509108754","DSHS0120041219","DSHS6894662811"];
     
      DB1=[{},{},{}];
      
      var weekind="saturday";
var str="<!-- 토요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 토요일 방과후 끝 --> ";
      for(ig=0;ig<3;ig++){
        var result=doWeekendCheck(true,false,senders[ig]);
        var weeknum=result.split("var chk_week = \"")[1].split("\"")[0];
        var winfo=JSON.parse(FS.read(path3));
        var pid=winfo[0].pid;
        result=result.split(str)[1].split(str2)[0].split("<th>");
        var stamp=result[7].split(weekind)[1].split("_")[1];
       
        DB1[ig]["weeknum"]=weeknum;
        DB1[ig]["pid"]=pid.slice();
        DB1[ig]["stamp"]=stamp;
        Log.i(DB1[ig]["weeknum"]);
        Log.i(DB1[ig]["pid"]);
        Log.i(DB1[ig]["stamp"]);
      }
      
      
      
      
      for(var j=0;j<DB.length;j++){
        
        if(DB[j]["flag"][1]){
          var curDB=DB1[Number(DB[j].ID.substr(0,4))-2019];
          
          var apply=DB[j].asWeekendSat;
         // replier.reply("✅토\n"+DB[j].commandasWeekendSat+"\n"+DB[j].User);
          var result=doWeekendCheck(true,false,DB[j].User);
          result=result.split(str)[1].split(str2)[0].split("<th>");
          var chkno=[];
          var dis=[];
          for(var i=7;i<result.length;i++)
        {
          if(i%2==1){
            if(result[i].indexOf("취소")!=-1) dis.push("취소");
          else dis.push("");
          var t2=result[i].split("id=")[1].split(">")[0].split("_");
          chkno.push(t2[5]);
          }
        }
          cnt1+=1;
          for(var i=0;i<apply.length;i++){
            if(apply[i+1]=="") continue;
            if(dis[i]=="취소") doWeekendSubmit("delete",chkno[i],curDB["pid"][i],String(i+1),curDB["stamp"],"saturday",curDB["weeknum"],"",DB[j].User); //취소.
            doWeekendSubmit("save",chkno[i],curDB["pid"][i],String(i+1),curDB["stamp"],"saturday",curDB["weeknum"],apply[i+1],DB[j].User);
          }
        }
      }
      
      var cnt2=0;
      DB2=[{},{},{}];
      
      var weekind="sunday";
      var str="<!-- 일요일 방과후 프로그램 신청 --> ";
        var str2="<!-- 일요일 방과후 끝 --> ";
      

        for(ig=0;ig<3;ig++){
        var result=doWeekendCheck(true,false,senders[ig]);
        var weeknum=result.split("var chk_week = \"")[1].split("\"")[0];
        var winfo=JSON.parse(FS.read(path3));
        var pid=winfo[1].pid;
        result=result.split(str)[1].split(str2)[0].split("<th>");
        var stamp=result[7].split(weekind)[1].split("_")[1];
       
        DB2[ig]["weeknum"]=weeknum;
        DB2[ig]["pid"]=pid.slice();
        DB2[ig]["stamp"]=stamp;
        Log.i(DB2[ig]["weeknum"]);
        Log.i(DB2[ig]["pid"]);
        Log.i(DB2[ig]["stamp"]);
        
      }
      
      
      
      
      for(var j=0;j<DB.length;j++){
        
        if(DB[j]["flag"][2]){
          var curDB=DB2[Number(DB[j].ID.substr(0,4))-2019];
            var apply=DB[j].asWeekendSun;
        var result=doWeekendCheck(true,false,DB[j].User);
          result=result.split(str)[1].split(str2)[0].split("<th>");
          var chkno=[];
          var dis=[];
          for(var i=7;i<result.length;i++)
        {
          if(i%2==1){
          if(result[i].indexOf("취소")!=-1) dis.push("취소");
          else dis.push("");
          var t2=result[i].split("id=")[1].split(">")[0].split("_");
          chkno.push(t2[5]);
          }
        }
          //replier.reply("✅일\n"+DB[j].commandasWeekendSun+"\n"+DB[j].User);
          cnt2+=1;
          for(var i=0;i<apply.length;i++){
            if(apply[i+1]=="") continue;
            if(dis[i]=="취소") doWeekendSubmit("delete",chkno[i],curDB["pid"][i],String(i+1),curDB["stamp"],"sunday",curDB["weeknum"],"",DB[j].User); //취소.
            doWeekendSubmit("save",chkno[i],curDB["pid"][i],String(i+1),curDB["stamp"],"sunday",curDB["weeknum"],apply[i+1],DB[j].User);
            }
        }
      } 
      replier.reply("b방장봇방","자동주말자습신청 끝.\n인원: "+cnt1+" "+cnt2);
      replier.reply("b전체방","✅자동주말자습신청 완료!\n("+cnt1+"명, "+cnt2+"명)");
    }
}





function getToken(username){ //토큰값이 유효한지 확인하고 유효한 토큰값을 리턴함.
  var arr=getUserInfo(username); //유저정보를 로컬에서 가져옴.
  if(getName(arr[2])==""){ //이름을 서버에서 가져옴. 이름이 비어있으면 토큰값이 무효한것.
    var temp=JSON.parse(FS.read(path));
    var index=temp.findIndex(isUser,username);
    temp[index].token=doLogin(arr); //서버에 새로 로그인하여 토큰값을 가져오고 로컬에 저장함.
    FS.write(path,JSON.stringify(temp,null,4));
    Log.e("getToken\n"+username+"\n"+temp[index].token);
    return temp[index].token; //새로받은 유효한 토큰값을 리턴함.
  }
  else{
    Log.i("getToken\n"+username+"\n"+arr[2]);
    return arr[2]; //파일에 저장된 유효한 토큰값을 리턴함.
  }
}

function getUserInfo(username){ //유저정보를 로컬에서 가져와서 리턴함.
  var list=JSON.parse(FS.read(path));
  var arr=list.filter(isUser,username);
  if(arr[0]==undefined) return false;
  return [arr[0].ID,arr[0].PW,arr[0].token];
}

function getUserSS(username){ //유저정보를 로컬에서 가져와서 리턴함.
  var list=JSON.parse(FS.read(path));
  var arr=list.filter(isUser,username);
  return arr[0].num1;
}


function getUserIDRegistered(stuid){ //로컬에 아이디가 등록이 되어있는지 확인하고 리턴함.
  var list=JSON.parse(FS.read(path));
  var arr=list.filter(isID,stuid);
  if(arr[0]==undefined) return false;
  else return true;
}

function getUserTalkNick(stuid,stupw){ //로컬에 아이디가 등록이 되어있는지 확인하고 리턴함.
  var list=JSON.parse(FS.read(path));
  var arr=list.filter(isID,stuid);
  if(arr[0]==undefined) return "";
  else if(arr[0]["PW"]!=stupw) return "\n⚠️봇에 저장된 비밀번호와 다릅니다.";
  else return "\n이 계정을 사용하기 위한 카톡 닉네임:"+arr[0]["User"]+"\n우측 상단의 세줄 버튼을 누른 뒤 방 나가기를 누르세요!!";
}

function getUserNickRegistered(username){ //로컬에 등록이 되어있는지 확인하고 리턴함.
  var list=JSON.parse(FS.read(path));
  var arr=list.filter(isUser,username);
  if(arr[0]==undefined) return false;
  else return true;
}

function getName(token){ //받은 토큰을 사용해 서버에서 이름을 가져오고 리턴함.
    try{
    var result= Jsoup.connect("https://djs.weschool.kr/sph_manager/prep/registration.php")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post()
    .text();
    }catch(error){
      Log.e("getName\n"+token+"\nNoName");
      return "";
    }
    try{
    var gotname=result.split("관리 시스템")[1].substr(15).split("(")[0].trim();
    Log.i("getName\n"+token+"\n"+gotname);
    return gotname;
    }catch(error){
      Log.e("getName\n"+token+"\nNoName");
      return "";
    }
  
}

function isUser(element){
  if(element.User == this) {
    return true;
    }
}

function isID(element){
  if(element.ID == this) {
    return true;
    }
}


function doLogin(arr) { //받은 아이디, 패스워드로 로그인하여 서버에서 토큰값을 새로 받아 리턴함.
  var ID=arr[0];
  var PW=arr[1];
  var result = Jsoup.connect("https://djs.weschool.kr/_login")
    .header("Content-Type", "application/x-www-form-urlencoded")
   .data("url", "/")
    .data("UID", ID)
    .data("PASSWD", PW)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .method(org.jsoup.Connection.Method.POST)
    .execute()
    .cookies()
    .get("COBEE_AUTH");
    result=JSON.stringify(result).replace("\"","").replace("\"","");
    Log.i("doLogin\n"+result);
    return "COBEE_AUTH="+result+";Path=/;HttpOnly";
}

function doPointCheck(username){ //벌점을 확인함.
  
    var token=getToken(username);
    var number=getUserInfo(username)[0];
    if(number.startsWith("2020")) number=2;
    else if(number.startsWith("2021")) number=1;
    else if(number.startsWith("2019")) number=3;
    var resultraw= Jsoup.connect("https://djs.weschool.kr/sph_manager/point/index.php?s_group="+number)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post()
    .text();
    var pTotal = resultraw.split("누적점수 (")[1].split(")")[0];
    var pList = new Array();
    var pListRaw = resultraw.split("누적 ")[1];
    var result="벌점 목록 (합계 "+pTotal+")\n"+enteru+"\n";
    if(pListRaw!=undefined){
    pListRaw=pListRaw.split("2021-");
    //Log.i(pTotal);
   // Log.i(pListRaw[1]);
    pListRaw[1]=pListRaw[1].slice(0,-(pTotal.length)-1);
    //Log.i(pListRaw[1]);
    for(var i=1;i<=pListRaw.length-1;i++){
    pList[pList.length]=pListRaw[i].replace("-","/");
    }
    for(var i=1;i<=pListRaw.length-1;i++){
      result+=pList[i-1]+"\n";
    }
    }
   // Log.i(username+"\n벌점 확인");
    return result;
}

function doPointCheckN(username){ //벌점을 확인함.
  
    var token=getToken(username);
    var number=getUserInfo(username)[0];
    if(number.startsWith("2020")) number=2;
    else if(number.startsWith("2021")) number=1;
    else if(number.startsWith("2019")) number=3;
    var resultraw= Jsoup.connect("https://djs.weschool.kr/sph_manager/point/index.php?s_group="+number)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post()
    .text();
    var pTotal = resultraw.split("누적점수 (")[1].split(")")[0];
    var pList = new Array();
    var pListRaw = resultraw.split("누적 ")[1];
    var result="벌점 목록 (합계 "+pTotal+")"+"\n\n";
    var header=result;
    if(pListRaw!=undefined){
    pListRaw=pListRaw.split("2021-");
    //Log.i(pTotal);
   // Log.i(pListRaw[1]);
    pListRaw[1]=pListRaw[1].slice(0,-(pTotal.length)-1);
    //Log.i(pListRaw[1]);
    for(var i=1;i<=pListRaw.length-1;i++){
    pList[pList.length]=pListRaw[i].replace("-","/");
    }
    for(var i=1;i<=pListRaw.length-1;i++){
      result+=pList[i-1]+"\n";
    }
    pImgList=[];
    pColor=[
    "https://i.imgur.com/eMdiMyF.png", //lightgreen
    "https://i.imgur.com/JFd8Wfr.png", //green
    'https://i.imgur.com/pHn1A9o.png', //lightred
    "https://i.imgur.com/ba7ib4o.png"  //red
    ];
    var pDateList=pList.slice();
    for(var j=0;j<5;j++){
      if(pList[j]==undefined){
        pList[j]="(데이터 없음)";
        pImgList[j]="https://i.imgur.com/BfE6pj1.png";
        continue;
      }
      var tempa=pList[j].split("점 ");
      tnum=Number(tempa[tempa.length-1]);
      if(tnum>0&&tnum<=2) tcolor=2;
      else if(tnum>2) tcolor=3;
      else if(tnum<0 && tnum>=-1) tcolor=1;
      else tcolor=0;
      pImgList.push("https://textoverimage.moesif.com/image?image_url="+pColor[tcolor]+"&text="+String(tnum).replace("-","")+"&text_color=000000ff&text_size=128&y_align=middle&x_align=center");
      pList[j]=pList[j].substr(5).replace("[여]","").split("점 ")[0];
      pList[j]=pList[j].substr(0,pList[j].length-2);
      pDateList[j]=pDateList[j].split(" ")[0];
      var time= new Date();
      if (time.getDate==Number (pDateList[j].split ("/")[1])&&time.getMonth==Number (pDateList [j].split ("/")[0]))
        //if (2==Number (pDateList[j].split ("/")[1])&&7==Number (pDateList [j].split ("/")[0]))      
        pList[j]="[오늘]"+pList[j];
    }
    Log.i(pImgList);
    Kakao.sendLink(username, {
  link_ver: '4.0', 
  template_id: 54584,
  template_args:{
    'header': header,
    't1': pList[0].trim(),
    't2': pList[1].trim(),
    't3': pList[2].trim(),
    't4': pList[3].trim(),
    't5': pList[4].trim(),
    'd1': pDateList[0],
    'd2': pDateList[1],
    'd3': pDateList[2],
    'd4': pDateList[3],
    'd5': pDateList[4],
    'p1': pImgList[0],
    'p2': pImgList[1],
    'p3': pImgList[2],
    'p4': pImgList[3],
    'p5': pImgList[4],
    'path': hastebin(result)
    }
  },'custom');
  Log.i(pList);
}

}

function getWeekendTime(){
  var time= new Date();
  var yo=time.getDay();
  if (yo==6||yo==0) return true;
  else return false;
}

function doSelfStudyCheckNum(username){
  var token=getToken(username);
  var pnumbers=[];
  var pnumbertot=[];
  var pnames=[];
  var result="";
  for(var n=0;n<3;n++){
    pnumbers[n]=[];
    var resultraw= Jsoup.connect("https://djs.weschool.kr/sph_manager/prep/registration.php?mode=apply&order_no="+(n+1)+"&chk_no=")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post()
    .text();
    
    result=resultraw.split("좌석");
    //var temp=result[1].split(" ");
    //pnumbers[n].push(temp[2].replace(/[(-)]/g,""));
    for(var i=2;i<result.length;i++){
     temp=result[i].split(" ");
     pnumbers[n].push(temp[2].replace(/[(-)]/g,""));
    }
  }
    
    for(var i=2;i<=result.length;i++){
      var temp=result[i-1].split(" ");
      pnames.push(String(result[i-2].substring(result[i-2].indexOf(")")+2,result[i-2].length)));
      pnumbertot.push(temp[1]);
    }
    var res="";
    for (var i=6;i<pnumbertot.length;i++){
      res+="("+(i+2)+") "+pnames[i]+": ("+pnumbers[0][i-1]+","+pnumbers[1][i-1]+","+pnumbers[2][i-1]+"/"+pnumbertot[i]+")\n\n";
    }
    return res;
    
}

function doSelfStudySubmit(fid,num,m,username) { 
   var token=getToken(username);
    if(m=="save"){
        Jsoup.connect("https://djs.weschool.kr/sph_manager/prep/registration.php")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Cookie", token)
        .data("p_mode", "save")
        .data("chk_mode","seat_apply")
        .data("chk_type","seat")
        .data("chk_no", "0")
        .data("chk_fid", fid)
        .data("chk_order_no",String(num))
        .ignoreContentType(true)
        .ignoreHttpErrors(true)
        .post();
        
    }
    else{
        Jsoup.connect("https://djs.weschool.kr/sph_manager/prep/registration.php?mode=delete&order_no="+num+"&chk_no="+m)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Cookie", token)
        .ignoreContentType(true)
        .ignoreHttpErrors(true)
        .get();
    }
}

function getSelfStudyTime(){
  var time= new Date();
  var hour=time.getHours();
  var min=time.getMinutes();
  if ((hour<18&&hour>=8)||(hour==18&&min<30))
    return true;
  else return false;
}

function doSelfStudyCheck(f1,f2,username) {
    var token=getToken(username);
    var result= Jsoup.connect("https://djs.weschool.kr/sph_manager/prep/registration.php")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post();
    try{
    if(f1==true){ //취소용 코드 돌려주기
        var resultst=result.toString();
        var num = new Array();
        var tp=resultst.split("btn_app_1_")[1].split("\"");
        num.push(tp[0]);
        tp=resultst.split("btn_app_2_")[1].split("\"");
        num.push(tp[0]);
        tp=resultst.split("btn_app_3_")[1].split("\"");
        num.push(tp[0]);
        return num;
    }
    if(f2==true){ //신청목록 돌려주기
        var resulttx=result.text();
        var J1= resulttx.split("1 자율학습 ")[1].split(" 2 자율학습")[0].replace("완료","").replace("취소","").replace("신청","").replace("수정/","").replace("대기","⚠️대기");
        var J2= resulttx.split("2 자율학습 ")[1].split(" 3 자율학습")[0].replace("완료","").replace("취소","").replace("신청","").replace("수정/","").replace("대기","⚠️대기");
        var J3= resulttx.split("3 자율학습 ")[1].replace("완료","").replace("취소","").replace("신청","").replace("수정/","").replace("대기","⚠️대기");
        if(J1=="") J1="(신청 안됨)";
        if(J2=="") J2="(신청 안됨)";
        if(J3=="") J3="(신청 안됨)";
        var restring="1자: "+J1+"\n2자: "+J2+"\n3자: "+J3;
        return restring;
    }
    }catch(error){
      return doSelfStudyCheck(f1,f2,username);
    }
}

function doSelfStudyConvert(arr,username){
  
  var number=getUserInfo(username)[0];
    if(number.startsWith("2020")) var path=path2;
    else if(number.startsWith("2021")) var path=path4;
    else if(number.startsWith("2019")) var path=path6;
    var convert=JSON.parse(FS.read(path));
    for(var i=0;i<3;i++){
      if(arr[i]==undefined) arr[i]="";
      if(arr[i]!="") arr[i]=convert[Number(arr[i])];
    }
    return arr;
}

function doSelfStudyNameConvert(arr,number){
   if(number.startsWith("2021")) var names=crnames1;
    else if(number.startsWith("2020")) var names=crnames2;
    else if(number.startsWith("2019")) var names=crnames3;
   
   return [names[Number(arr[0])],names[Number(arr[1])],names[Number(arr[2])]];
}

function doWeekendCheckNum(username,n){
  var token=getToken(username);
  var result=doWeekendCheck(true,false,username);
  var weeknum=result.split("var chk_week = \"")[1].split("\"")[0];
  var winfo=JSON.parse(FS.read(path3));
  var str=["<!-- 토요일 방과후 프로그램 신청 --> ","<!-- 일요일 방과후 프로그램 신청 --> ","<!-- 공휴일 방과후 프로그램 신청 --> "];
  var str2=["<!-- 토요일 방과후 끝 --> ","<!-- 일요일 방과후 끝 --> ","<!-- 주말 방과후 끝 --> "];
  var str3=["saturday","sunday"];
  var i=0;
  var pid=winfo[n].pid;
  var weekind=str3[n];
  resultm=result.split(str[n])[1].split(str2[n])[0].split("<th>");
  var stamp=resultm[7].split(weekind)[1].split("_")[1];
  var chkno=[];
  var pnumbers=[];
  
      
  for(var i=7;i<resultm.length;i++)
        {
          if(i%2==1){
          var t2=resultm[i].split("id=")[1].split(">")[0].split("_");
          chkno.push(t2[5]);
          }
        }
  
  for(var i=0;i<pid.length;i++){
    pnumbers.push(doWeekendLoadNum(chkno[i],pid[i],String(i+1),stamp,weekind,weeknum,"",token)); //일단 취소.
  }
  var DB=JSON.parse(FS.read(path));
  var index=DB.findIndex(isUser,username);     
  var number=DB[index].ID;
  if(n==0){
      if(number.startsWith("2021")) var names=crnamew1a;
      else if(number.startsWith("2020")) var names=crnamew2a;
      else if(number.startsWith("2019")) var names=crnamew3a;
   }
   else if(n==1){
      if(number.startsWith("2021")) var names=crnamew1b;
      else if(number.startsWith("2020")) var names=crnamew2b;
      else if(number.startsWith("2019")) var names=crnamew3b;
   }
  var pnumbertot=doWeekendLoadNum(chkno[0],pid[0],1,stamp,weekind,weeknum,"tot",token);
  var res="";
  for(var i=6;i<pnumbertot.length;i++){
    res+="("+(i+2)+") "+names[i+2]+":\n\t=> ";
    for(var j=0;j<pnumbers.length;j++){
      res+=pnumbers[j][i-1];
      if(j==0||j==pnumbers.length-4) res+='|';
      else res+=',';
    }
    res=res.substr(0,res.length-1);
    res+=" ("+pnumbertot[i]+") \n\n";
  }
  return res;
}

function doWeekendLoadNum(chkno,pid,orderno,stamp,kind,chkweek,flag,token){
    var resultraw= Jsoup.connect("https://djs.weschool.kr/sph_manager/weekend/index.php?mode=layer_apply&kind="+kind+"&stamp="+stamp+"&order_no="+orderno+"&chk_no="+chkno+"&chk_week="+chkweek+"&pid="+pid)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .get()
    .text();
    Log.i(resultraw);
    Log.i("https://djs.weschool.kr/sph_manager/weekend/index.php?mode=layer_apply&kind="+kind+"&stamp="+stamp+"&order_no="+orderno+"&chk_no="+chkno+"chk_week="+chkweek+"&pid="+pid);
    result=resultraw.split("좌석");
    if(flag=='tot'){
      var pnumbertot=[];
     for(var i=2;i<=result.length;i++){
        var temp=result[i-1].split(" ");
        pnumbertot.push(temp[1]);
      }
      return pnumbertot;
    }
    else{
      var pnumber=[];
    for(var i=2;i<result.length;i++){
     temp=result[i].split(" ");
     pnumber.push(temp[2].replace(/[(-)]/g,""));
    }
    return pnumber;
    }
}

function doWeekendCheck(f1,f2,username){
  var token=getToken(username);
   var result= Jsoup.connect("https://djs.weschool.kr/sph_manager/weekend/index.php")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Cookie", token)
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .post()
   if(f1==true)
   {
      return result.toString();
   }
   else if(f2==true)
   {
       result=result.text().replace("(1인1기 1,2학년)","").replace(/\(주말프로그램\)/g,"").replace(/ 자율학습/g," 자율").replace("자율학습"," 자율").replace(/\(2학년\)/,"");
      var J1="";
      if(result.split("공휴일")[1]!=undefined) J1="<공휴일>\n "+result.split("공휴일")[1].split("토요일")[0].substr(94).replace(/완료/g,"").replace(/취소/g,"\n").replace(/신청/g,"\n")+"\n";
      var J2= result.split("토요일")[1].split("일요일")[0].substr(94).replace(/완료/g,"").replace(/취소/g,"\n").replace(/신청/g,"\n").replace("오전 자율","오전 자율  ").replace("꿈지락","꿈지락      ");
      var J3= result.split("일요일")[1].replace(/완료/g,"").substr(91).replace(/취소/g,"\n").replace(/신청/g,"\n").replace("오전 자율","오전 자율  ");
      return J1+"<토요일>\n "+J2+"\n<일요일>\n"+J3;
   }
}

function doWeekendSubmit(mode,chkno,pid,orderno,stamp,kind,chkweek,fid,username) {
    Log.e("✅✅\n"+mode+" "+chkno+" "+pid+" "+orderno+" "+stamp+" "+kind+" "+chkweek+" "+fid+" "+username);
    
    var token=getToken(username);
   if(mode=="delete")
   {
      Jsoup.connect("https://djs.weschool.kr/sph_manager/weekend/index.php?mode="+mode+"&kind="+kind+"&stamp="+stamp+"&order_no="+orderno+"&chk_no="+chkno+"&chk_week="+chkweek+"&pid="+pid)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Cookie", token)
        .ignoreContentType(true)
        .ignoreHttpErrors(true)
        .post();
   }
   else if(mode=="save")
   {
      Jsoup.connect("https://djs.weschool.kr/sph_manager/weekend/index.php")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Cookie", token)
        .data("chk_mode","layer_seat_apply")
        .data("chk_type","seat")
        .data("p_mode", "save")
      .data("kind", kind)
        .data("chk_no", chkno)
      .data("chk_week", chkweek)
      .data("pid", pid)
      .data("chk_fid", fid)
        .data("chk_order_no",orderno)
        .data("stamp",stamp)
        .ignoreContentType(true)
        .ignoreHttpErrors(true)
        .post();
   }
    
}


function doWeekendConvert(qarr,qn,qusername){
  if(qusername.length==8) var qnumber=qusername;
  else var qnumber=getUserInfo(qusername)[0]; 
    if(qnumber.startsWith("2020")) var patht=path3;
    else if(qnumber.startsWith("2021")) var patht=path5;
    else if(qnumber.startsWith("2019")) var patht=path7;
    var qconvert=JSON.parse(FS.read(patht));
    for(var qi=1;qi<qarr.length;qi++){
       if(qarr[qi]!="") qarr[qi]=qconvert[qn].fid[Number(qarr[qi])];
    }
    return qarr;
}

function doWeekendNameConvert(arr,number,n,preset){
   var result=[""];
   if(n==0){
      if(number.startsWith("2021")) var names=crnamew1a;
      else if(number.startsWith("2020")) var names=crnamew2a;
      else if(number.startsWith("2019")) var names=crnamew3a;
   }
   else if(n==1){
      if(number.startsWith("2021")) var names=crnamew1b;
      else if(number.startsWith("2020")) var names=crnamew2b;
      else if(number.startsWith("2019")) var names=crnamew3b;
   }
   for(var i=1;i<arr.length;i++){
     if(arr[i]==""||arr[i]==undefined||arr[i]=="0"){
       if(arr[i]=="0"||preset==undefined||preset[i]==undefined) result.push("(설정 안됨)");
       else result.push(preset[i]);
     }
     else result.push(names[Number(arr[i])]);
     if(result[i-1]==undefined) return "nope";
   }
   return result;
}

function getWeekendSatTime(){
 //return true;
  var time= new Date();
  var hour=time.getHours();
  var yo=time.getDay();
  if(((yo==5)&&(hour>=22))||yo==6)
   return false;
  else return true;
}

function getWeekendSunTime(){
  //return true;
  var time= new Date();
  var hour=time.getHours();
  var yo=time.getDay();
  if((yo==6)&&(hour>=22)||yo==0)
   return false;
  else return true;
}

function getWeekendHolTime(){
  var time= new Date();
  var hour=time.getHours();
  if(hour>=22)
   return false;
  else return true;
}

function getAutoWeekendTime(){
  var time= new Date();
  var yo=time.getDay();
  var hour=time.getHours();
  if(yo==1&&hour==0) return true;
  else return false;
}

function format(st,names){
  Log.i(names[0]);
   return st.replace (/\{(\d+)\}/g,function(match,num){
     return " "+names[num];
   });
}


function hastebin(text){
  var res=Jsoup.connect("https://hastebin.com/documents")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .requestBody(text)
        .ignoreContentType(true)
        .post()
        .toString();
     return res.split("key\":\"")[1].split("\"")[0];
}
