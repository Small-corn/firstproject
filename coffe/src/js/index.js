
// 团队点击切换
var dls=team.getElementsByTagName("dl");
for(var i=0;i<dls.length;i++){
    dls[i].onclick=function(){
        for(var n=0;n<dls.length;n++){
            dls[n].className="";
        }
        this.className="team-active";
    }
}