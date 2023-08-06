const scriptName = "hastebin";
importClass(org.jsoup.Jsoup);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  this.time=Date.now();
  var res=Jsoup.connect("https://controlc.com/index.php?act=submit")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .data("paste_title","title!!")
        .data("input_text","[tpsize=7]####text####[/tpsize]")
        .data("timestamp",String(this.time))
        .data("antispam",1)
        .data("code",0)
        .ignoreContentType(true)
        .post();
    
  replier.reply(res);
}
