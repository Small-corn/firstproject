// 公司简介,新闻中心,公司历程
// 卡布奇诺,摩卡,拿铁
var uls=document.getElementsByTagName("ul")[1];
var lis=uls.getElementsByTagName("li");
var aside=document.getElementsByTagName("aside");
var ems=span.getElementsByTagName("em");
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
            aside[i].className="";
            ems[i].className=""
        }
        this.className="active";
        var j=this.getAttribute("liy");
       aside[j].className="aboutactive";
       ems[j].className="aboutactive"
    }
}

