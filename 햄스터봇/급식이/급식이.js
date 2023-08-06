const scriptName = "급식이";
const FS = FileStream;
const path = '/sdcard/hamsterbot/bab/bab.json';
const enteru = "\u200b".repeat(500);
if (!FS.read(path)) FS.write(path,JSON.stringify({},null,3));
importClass(org.jsoup.Jsoup);
function whatweek(da){
  var li=["일","월","화","수","목","금","토","일"];
  return li[da];
}



function bab(month, day) {
  bld = ["breakfast", "lunch", "dinner"];
  if (month < 10) 
    month = "0" + String(month);
  if (day < 10) 
    day = "0" + String(day);
  var db = JSON.parse(FS.read(path));
  var dt = month + day;
  if (db[dt] == undefined) {
    var result = [];
    try{
    var dat = Jsoup.connect("https://open.neis.go.kr/hub/mealServiceDietInfo?Key=6146ee67c310498693006539893cbd68&Type=json&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430032&MLSV_YMD=2021" + month + day).ignoreContentType(true).ignoreHttpErrors(true).get().toString();
    }catch(error){
      try{
        java.lang.Thread.sleep(2000);
        var dat = Jsoup.connect("https://open.neis.go.kr/hub/mealServiceDietInfo?Key=6146ee67c310498693006539893cbd68&Type=json&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430032&MLSV_YMD=2021" + month + day).ignoreContentType(true).ignoreHttpErrors(true).get().toString();
        }catch(error){
          return "\n⛔일시적인 네트워크 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.";
        }
      }
    
    if(dat.indexOf("INFO-200")!=-1) return "\n\n해당 날짜의 급식 정보가 없습니다.";
    else{
    var da = dat.replace(/(<html>|<\/html>|<head>|<\/head>|<body>|<\/body>)/g, "").replace(/\n/g, "");
    da = JSON.parse(da);
    try{
    da = da["mealServiceDietInfo"][1]["row"];
    for (i = 0; i < 3; i++) {
      try {
        var data = da[i]["DDISH_NM"];
        var cal=da[i]["CAL_INFO"];
        bae = bld[i];
        data = data.trim();
        data = data.replace(/([0-9]+)+\.|\*|(\(([^)]+)\))/g, "");
        data = data.replace(/,/g, "");
        data = data.replace("\":[\"", "");
        data = data.replace("\"]\"", "");
        data = data.replace(/amp;/g, "");
        data = data.replace(/  <br>/g, "\n ");
        result[i] = " ("+cal+")\n " + data;
      }      catch (e) {
  result[i] = "\n 급식 정보가 없습니다.";
}
}
    }
    catch(e){
  result[0] = "\n 급식 정보가 없습니다.";
  result[1] = "\n 급식 정보가 없습니다.";
  result[2] = "\n 급식 정보가 없습니다.";
}
    var temp = "\n\n[아침]" + result[0] + "\n\n[점심]" + result[1] + "\n\n[저녁]" + result[2];
    db[dt] = temp;
    FS.write(path, JSON.stringify(db, null, 3));
    return temp;
  }
  
  } else {
    return db[dt];
  }
}




function response(room, msg, sender, isGroupChat, replier, ImageDB) {
 if(sender.startsWith("DSHS")&&!isGroupChat){
     
 if (msg=="/오늘 급식"||msg=="/오늘급식"||msg=="/급식") {
  let day = new Date();
  var yoill=whatweek(day.getDay());
replier.reply("🍴 "+(day.getMonth()+1)+"월 "+day.getDate()+"일 ("+yoill+") 급식"+"\u200b".repeat(500)+bab(day.getMonth()+1, day.getDate()));
}
else if (msg=="/내일 급식"||msg=="/내일급식") {
  let day = new Date();
  var yoill=whatweek(day.getDay()+1);
  var check= new Date(2021,day.getMonth()+1,0).getDate();
  if(day.getDate()+1<=check){
    replier.reply("🍴 "+(day.getMonth()+1)+"월 "+(day.getDate()+1)+"일 ("+yoill+") 급식"+"\u200b".repeat(500)+bab(day.getMonth()+1, day.getDate()+1));
   }
  else{
 replier.reply("🍴 "+(day.getMonth()+2)+"월 "+(1)+"일 ("+yoill+") 급식"+"\u200b".repeat(500)+bab(day.getMonth()+2, 1));
}
}
else if(msg.startsWith("/급식")){
  if(msg.length!=8){
    replier.reply("형식에 맞게 다시 입력하여주세요.");
    return 0;
    }
  var mon=Number(msg.substring(4,6));
  var day=Number(msg.substring(6,8));
  let da= new Date(2021,mon-1,day);
 var yoill=whatweek(da.getDay());
 var check= new Date(2021,mon,0).getDate();
 if(mon>=1&&mon<=12&&check>=day){
  replier.reply("🍴 "+mon+"월 "+day+"일 ("+yoill+") 급식"+"\u200b".repeat(500)+ bab(mon,day));
}
  else replier.reply("잘못된 날짜입니다.");
}

}
if (msg=="/봇 급식" &&sender=="방장봇"&&room=="b방장봇방"){
  let da = new Date();
  var mon=da.getMonth()+1;
  var day=da.getDate();
  var yo=da.getDay();
  var check= new Date(2021,mon,0).getDate();
  var yoill1=whatweek(da.getDay());
  var yoill2=whatweek(da.getDay()+1);
  if (bab (mon,day)!="\n\n해당 날짜의 급식 정보가 없습니다.") replier.reply("b전체방","(오늘) "+mon+"월 "+day+"일 ("+yoill1+") 급식"+"\u200b".repeat(500)+ bab(mon,day));
 if(day+1<=check){
    if(bab(mon,day+1)!="\n\n해당 날짜의 급식 정보가 없습니다.")
    replier.reply("b전체방","(내일) "+mon+"월 "+(day+1)+"일 ("+yoill2+") 급식"+"\u200b".repeat(500)+ bab(mon,day+1));
  }
  else{
    if(bab(mon+1,1)!="\n\n해당 날짜의 급식 정보가 없습니다.")
    replier.reply("b전체방","(내일) "+(mon+1)+"월 "+(1)+"일 ("+yoill2+") 급식"+"\u200b".repeat(500)+ bab(mon+1,1));
     }

}


}

