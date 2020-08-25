// banner轮播
var btns=banner.getElementsByTagName("button");
var liss=banner.getElementsByTagName("li");
var pic=banner.getElementsByClassName("pic")[0];
var j=0;
for(var n=0;n<btns.length;n++){
    btns[n].onclick=function(){
        if(this.innerText==">"){
            move(1);
        }else if(this.innerText=="<"){
            move(-1);
        }
    }
}
for(var i=0;i<liss.length;i++){
    liss[i].onclick=function(){
        move(undefined,this);
    }
}

// 封装
function move(x,btn){
    if(x){
        j+=x;
        if(j==4){
            j=0;
        }
        else if(j==-1){
            j=3;
        }
    }
    else if(x==undefined){
        j=parseInt(btn.getAttribute("dy"));
    }
    pic.style.marginLeft=(-100)*j+"%";
    for(var i=0;i<liss.length;i++){
        liss[i].className="";
    }
    liss[j].className="banactive";
}