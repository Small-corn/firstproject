// 导航切换
var headerC=document.getElementsByClassName("header-con")[0]
var p=headerC.getElementsByTagName("p")[0]
var as=p.getElementsByTagName("a");
for(var i=0;i<as.length;i++){
    as[i].onclick=function(){
        var old=document.getElementsByClassName("nav-active")[0];
        old.className="";
        this.className="nav-active";
    }
}


