var uls=document.getElementsByClassName("uls")[0];
var lis=uls.getElementsByTagName("li");
var dts=document.getElementsByClassName("dts")[0];
var imgs=dts.getElementsByTagName("img");
var teamb=document.getElementsByClassName("teamb")[0];
var divs=teamb.getElementsByTagName("div");
var j=0;
console.log(lis)
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var n=0;n<lis.length;n++){
            lis[n].className="";
            imgs[n].className="";
            divs[n].className="";
        }
        this.className="team_active";
        j=this.getAttribute("dy");
        divs[j].className="teamactive";
        imgs[j].className="teamactive"
       
    }
}

