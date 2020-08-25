
(function(){
// 导航切换
var navobj={
    "nav_a":document.getElementsByTagName("a"),
    "j":0,
    "init":function(){
            this.bind();
    },
    "bind":function(){
        var me=this;
           for(var i=0;i<this.nav_a.length;i++){
            this.nav_a[i].onclick=function(){
                   me.change(this);
            }
           }
    },
    "change":function(aa){
        for(var i=0;i<this.nav_a.length;i++){
            this.nav_a[i].className="";
        }
        j=aa.getAttribute("dy");
        this.nav_a[j].className="active";
    }

}
navobj.init();

// 轮播
// 存放共有属性
function lunbo(box){
    this.box=box;
    this.imgs=box.getElementsByTagName("img");
    this.btns=box.getElementsByTagName("button");
    this.lis=box.getElementsByTagName("li");
    this.j=0;
    this.timer=null;
}
// 共有方法
// 初始化方法
lunbo.prototype.init=function(){
  this.bind();
  this.dsq(1)
}
// 绑定方法
lunbo.prototype.bind=function(){
    var me=this;
   // 绑定按钮
   for(var i=0;i<this.btns.length;i++){
    this.btns[i].onclick=function(){
        if(this.innerText==">"){
             me.dh(1);
        }else{
             me.dh(-1);
        }
         
    }
   }
   for(var i=0;i<this.lis.length;i++){
    this.lis[i].onclick=function(){
        me.dh(undefined,this);
    }
    }
    // 绑定定时器
    this.box.onmouseover=function(){
        me.dsq(-1);
    }
    this.box.onmouseout=function(){
        me.dsq(1);
    }
}
// 动画方法
lunbo.prototype.dh=function(x,li){
    if(x){
        this.j+=x;
        if(this.j==4){
            this.j=0;
        }else if(this.j==-1){
            this.j=3;
        }
    }else if(x==undefined){
        this.j=parseInt(li.getAttribute("dy"));
    }
    for(var i=0;i<this.lis.length;i++){
        this.lis[i].className="";
        this.imgs[i].className="";
    }
    this.lis[this.j].className="active";
    this.imgs[this.j].className="active";

}
// 定时器方法
lunbo.prototype.dsq=function(x){
    var me=this;
    if(x==1){
        timer=setInterval(function(){
            me.dh(1);
        },1000)

    }else if(x==-1){
        clearInterval(timer);
        timer=null;

    }
}

// 第一个轮播
var box=document.getElementsByClassName("box")[0];
var lunboo=new lunbo(box);
lunboo.init();




// 选项卡
function xxk(box){
    this.box=box;
    this.p=box.getElementsByTagName("p");
    this.span=box.getElementsByTagName("span");
    this.aside=document.getElementsByTagName("aside");
    this.j=0;

}
xxk.prototype.init=function(){
    this.bind();
}

xxk.prototype.bind=function(){
    var me=this;
    for(var i=0;i<this.p.length;i++){
        this.p[i].onclick=function(){
            me.change(this);
        }
    }
}

xxk.prototype.change=function(p){
    for(var i=0;i<this.p.length;i++){
        this.p[i].className="";
        this.aside[i].className="";
        this.span[i].className="";
        }
    this.j=p.getAttribute("dy");
    this.p[ this.j].className="active";
    this.aside[ this.j].className="active";
    this.span[ this.j].className="active";
}
var case1=document.getElementsByClassName("case")[0];
var case1=new xxk(case1);
case1.init();











})()